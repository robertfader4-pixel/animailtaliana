
(() => {
  const tracks = window.ALBUM_TRACKS || [];
  const storageKey = 'italian-mood-player-state-v3';
  const audio = document.getElementById('audio');

  const els = {
    heroPoster: document.getElementById('heroPoster'),
    artwork: document.getElementById('currentArtwork'),
    nowArtworkThumb: document.getElementById('nowArtworkThumb'),
    nowTitle: document.getElementById('nowTitle'),
    nowMood: document.getElementById('nowMood'),
    nowDescription: document.getElementById('nowDescription'),
    lyricsHeading: document.getElementById('lyricsHeading'),
    lyricsText: document.getElementById('lyricsText'),
    playlist: document.getElementById('playlist'),
    playBtn: document.getElementById('playBtn'),
    heroPlayBtn: document.getElementById('heroPlayBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    progressBar: document.getElementById('progressBar'),
    currentTime: document.getElementById('currentTime'),
    duration: document.getElementById('duration'),
    volumeBar: document.getElementById('volumeBar'),
    miniTrackTitle: document.getElementById('miniTrackTitle'),
    miniTrackInfo: document.getElementById('miniTrackInfo'),
    focusBtn: document.getElementById('focusBtn'),
    readingBtn: document.getElementById('readingBtn'),
    playlistToggleBtn: document.getElementById('playlistToggleBtn'),
    playlistPanel: document.getElementById('playlistPanel'),
    floatingPlayer: document.getElementById('floatingPlayer'),
    playerHandle: document.getElementById('playerHandle'),
    recenterBtn: document.getElementById('recenterBtn'),
    canvas: document.getElementById('spectrumCanvas'),
    toast: document.getElementById('toast')
  };

  let currentTrackIndex = 0;
  let isSwitching = false;
  let dragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;
  let saveTimer = null;
  let audioCtx = null;
  let sourceNode = null;
  let analyser = null;
  let gainNode = null;
  let animationId = null;
  let wasPlayingBeforeVisibility = false;

  const saved = readState();
  if (typeof saved.trackIndex === 'number' && saved.trackIndex >= 0 && saved.trackIndex < tracks.length) {
    currentTrackIndex = saved.trackIndex;
  }

  function init() {
    buildPlaylist();
    setTrack(currentTrackIndex, false);
    bindEvents();
    restorePlayerState();
    startSpectrum();
  }

  function bindEvents() {
    els.playBtn.addEventListener('click', togglePlayback);
    els.heroPlayBtn.addEventListener('click', togglePlayback);
    els.prevBtn.addEventListener('click', () => stepTrack(-1));
    els.nextBtn.addEventListener('click', () => stepTrack(1));

    els.progressBar.addEventListener('input', () => {
      if (!audio.duration) return;
      const ratio = Number(els.progressBar.value) / 100;
      audio.currentTime = ratio * audio.duration;
      updateProgress();
      queueSave();
    });

    els.volumeBar.addEventListener('input', async () => {
      await ensureAudioGraph();
      const value = Number(els.volumeBar.value);
      audio.volume = value;
      if (gainNode) gainNode.gain.value = value;
      queueSave();
    });

    audio.addEventListener('timeupdate', () => {
      updateProgress();
      queueSave();
    });

    audio.addEventListener('loadedmetadata', () => {
      updateProgress();
      fillTrackDurations();
      const state = readState();
      if (state.trackIndex === currentTrackIndex && typeof state.time === 'number' && Number.isFinite(state.time)) {
        const targetTime = Math.min(state.time, Math.max(0, audio.duration - 0.4));
        if (targetTime > 0) {
          audio.currentTime = targetTime;
          updateProgress();
        }
      }
    });

    audio.addEventListener('play', () => {
      syncPlayButtons(true);
      queueSave();
    });

    audio.addEventListener('pause', () => {
      syncPlayButtons(false);
      queueSave();
    });

    audio.addEventListener('ended', () => stepTrack(1, true));

    audio.addEventListener('error', () => {
      const err = audio.error;
      showToast(err ? `No se pudo cargar el audio (código ${err.code}).` : 'No se pudo cargar el audio.');
    });

    els.focusBtn.addEventListener('click', () => {
      document.body.classList.toggle('focus-mode');
      els.focusBtn.textContent = document.body.classList.contains('focus-mode') ? '⟲ Salir de focus' : '✦ Modo focus';
    });

    els.readingBtn.addEventListener('click', () => {
      document.body.classList.toggle('reading-mode');
      els.readingBtn.textContent = document.body.classList.contains('reading-mode') ? 'Vista normal' : 'Lectura limpia';
    });

    els.playlistToggleBtn.addEventListener('click', () => {
      const hidden = els.playlist.classList.toggle('hidden');
      els.playlistToggleBtn.textContent = hidden ? 'Mostrar' : 'Ocultar';
      els.playlistToggleBtn.setAttribute('aria-expanded', String(!hidden));
    });

    window.addEventListener('resize', resizeCanvas, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', saveState);

    els.playerHandle.addEventListener('pointerdown', startDrag);
    document.addEventListener('pointermove', onDrag);
    document.addEventListener('pointerup', stopDrag);
    els.recenterBtn.addEventListener('click', resetPlayerPosition);
  }

  function buildPlaylist() {
    els.playlist.innerHTML = '';
    tracks.forEach((track, index) => {
      const item = document.createElement('li');
      item.className = 'playlist-item';
      item.dataset.index = index;

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'playlist-button';
      button.innerHTML = `
        <span class="track-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="track-main">
          <p class="track-title">${escapeHtml(track.title)}</p>
          <p class="track-caption">${escapeHtml(track.mood)}</p>
        </span>
        <span class="track-duration" data-duration="${index}">${formatTime(track.duration_seconds || 0)}</span>
      `;
      button.addEventListener('click', async () => {
        if (index === currentTrackIndex) {
          await playCurrentTrack();
        } else {
          await setTrack(index, true);
          await playCurrentTrack();
        }
      });

      item.appendChild(button);
      els.playlist.appendChild(item);
    });
    highlightPlaylist();
  }

  function highlightPlaylist() {
    [...els.playlist.children].forEach((item, index) => {
      item.classList.toggle('active', index === currentTrackIndex);
    });
  }

  async function setTrack(index, preserveTime = false) {
    if (isSwitching || !tracks[index]) return;
    isSwitching = true;

    const track = tracks[index];
    currentTrackIndex = index;
    highlightPlaylist();

    const currentState = readState();
    const keepTime = preserveTime ? 0 : (currentState.trackIndex === index ? Number(currentState.time || 0) : 0);

    updateText(track);
    swapLyrics(track.lyrics);
    swapArtwork(track.image);

    audio.src = track.audio;
    audio.load();
    audio.preload = 'metadata';
    audio.dataset.trackIndex = String(index);
    audio.dataset.trackId = track.id;

    els.progressBar.value = '0';
    els.currentTime.textContent = '0:00';
    els.duration.textContent = formatTime(track.duration_seconds || 0);
    updateMiniInfo(track);

    if (keepTime > 0) {
      audio.addEventListener('loadedmetadata', function applyTime() {
        audio.currentTime = Math.min(keepTime, Math.max(0, audio.duration - 0.4));
        updateProgress();
        audio.removeEventListener('loadedmetadata', applyTime);
      });
    }

    saveState();
    setTimeout(() => {
      isSwitching = false;
    }, 180);
  }

  function updateText(track) {
    els.nowTitle.textContent = track.title;
    els.nowMood.textContent = track.mood;
    els.nowDescription.textContent = track.description;
    els.lyricsHeading.textContent = track.title;
    els.miniTrackTitle.textContent = track.title;
    if (els.nowArtworkThumb) {
      els.nowArtworkThumb.src = track.image;
      els.nowArtworkThumb.alt = `Imagen de ${track.title}`;
    }
  }

  function updateMiniInfo(track) {
    els.miniTrackInfo.textContent = `${track.artist} · ${formatTime(track.duration_seconds || 0)} · ${track.mood}`;
  }

  function swapLyrics(lyrics) {
    const verses = String(lyrics || '').split(/\n\s*\n/).filter(Boolean);
    els.lyricsText.classList.add('is-switching');
    window.setTimeout(() => {
      els.lyricsText.innerHTML = verses.map((verse, verseIndex) => {
        const lines = verse
          .split('\n')
          .filter(Boolean)
          .map((line, lineIndex) => `<p class="${verseIndex === 0 && lineIndex === 0 ? 'lead' : ''}">${escapeHtml(line)}</p>`)
          .join('');
        return `<div class="verse">${lines}</div>`;
      }).join('');
      els.lyricsText.classList.remove('is-switching');
    }, 180);
  }

  function swapArtwork(src) {
    els.artwork.classList.remove('is-visible');
    const next = new Image();
    next.onload = () => {
      els.artwork.src = src;
      requestAnimationFrame(() => {
        els.artwork.classList.add('is-visible');
      });
      els.heroPoster.classList.remove('is-visible');
      if (els.nowArtworkThumb) {
        els.nowArtworkThumb.src = src;
      }
    };
    next.onerror = () => {
      els.heroPoster.classList.add('is-visible');
      showToast('No se pudo cargar la imagen del tema actual.');
    };
    next.src = src;
  }

  async function playCurrentTrack() {
    const track = tracks[currentTrackIndex];
    if (!track) return;
    await ensureAudioGraph();
    try {
      await audioCtx.resume();
      await audio.play();
      syncPlayButtons(true);
      showToast(`Reproduciendo: ${track.title}`);
    } catch (error) {
      console.error(error);
      syncPlayButtons(false);
      showToast('El navegador bloqueó la reproducción. Pulsa play otra vez o toca la página.');
    }
  }

  function syncPlayButtons(isPlaying) {
    els.playBtn.textContent = isPlaying ? '❚❚' : '▶';
    els.heroPlayBtn.textContent = isPlaying ? '❚❚ Pausa' : '▶ Reproducir';
  }

  async function togglePlayback() {
    const track = tracks[currentTrackIndex];
    if (!track) return;
    if (!audio.src) {
      await setTrack(currentTrackIndex, false);
    }

    if (audio.paused) {
      await playCurrentTrack();
    } else {
      audio.pause();
      showToast(`Pausa: ${track.title}`);
    }
  }

  async function stepTrack(direction, autoplay = false) {
    const nextIndex = (currentTrackIndex + direction + tracks.length) % tracks.length;
    await setTrack(nextIndex, false);
    if (autoplay || !audio.paused) {
      await playCurrentTrack();
    }
  }

  async function ensureAudioGraph() {
    if (audioCtx) return;
    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) {
      showToast('Tu navegador no soporta Web Audio.');
      return;
    }

    audioCtx = new AudioContextCtor();
    sourceNode = audioCtx.createMediaElementSource(audio);
    gainNode = audioCtx.createGain();
    analyser = audioCtx.createAnalyser();

    analyser.fftSize = 2048;
    analyser.smoothingTimeConstant = 0.82;
    gainNode.gain.value = Number(els.volumeBar.value || audio.volume || 0.86);

    sourceNode.connect(gainNode);
    gainNode.connect(analyser);
    analyser.connect(audioCtx.destination);
  }

  function startSpectrum() {
    resizeCanvas();
    drawSpectrum();
  }

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const rect = els.canvas.getBoundingClientRect();
    els.canvas.width = Math.max(2, Math.floor(rect.width * ratio));
    els.canvas.height = Math.max(2, Math.floor(rect.height * ratio));
    const ctx = els.canvas.getContext('2d');
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function drawSpectrum() {
    const ctx = els.canvas.getContext('2d');
    const width = els.canvas.clientWidth;
    const height = els.canvas.clientHeight;

    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(95,212,217,0)');
    gradient.addColorStop(0.12, 'rgba(95,212,217,.55)');
    gradient.addColorStop(0.5, 'rgba(104,236,242,.96)');
    gradient.addColorStop(0.88, 'rgba(95,212,217,.55)');
    gradient.addColorStop(1, 'rgba(95,212,217,0)');

    let signal = [];
    if (analyser) {
      const data = new Uint8Array(analyser.fftSize);
      analyser.getByteTimeDomainData(data);
      const sampleCount = 88;
      const stride = Math.max(1, Math.floor(data.length / sampleCount));
      for (let i = 0; i < sampleCount; i++) {
        const v = (data[i * stride] - 128) / 128;
        signal.push(v);
      }
    } else {
      signal = makeIdleSignal(88);
    }

    const mid = height * 0.54;
    const amplitude = audio && !audio.paused ? height * 0.24 : height * 0.09;
    const baseY = mid;
    const xStep = width / (signal.length - 1 || 1);

    drawLayer(signal, amplitude * 1.15, 18, 0.18);
    drawLayer(signal, amplitude * 0.72, 10, 0.26);
    drawMainWave(signal, amplitude);
    drawGlowDots(signal, amplitude * 0.9);

    function drawLayer(source, amp, blur, alpha) {
      ctx.save();
      ctx.lineWidth = 3.4;
      ctx.strokeStyle = `rgba(95,212,217,${alpha})`;
      ctx.shadowBlur = blur;
      ctx.shadowColor = 'rgba(95,212,217,0.9)';
      ctx.beginPath();
      source.forEach((val, i) => {
        const x = i * xStep;
        const y = baseY + val * amp;
        if (i === 0) ctx.moveTo(x, y);
        else {
          const prevX = (i - 1) * xStep;
          const cx = (prevX + x) / 2;
          const prevY = baseY + source[i - 1] * amp;
          ctx.quadraticCurveTo(prevX, prevY, cx, (prevY + y) / 2);
        }
      });
      ctx.stroke();
      ctx.restore();
    }

    function drawMainWave(source, amp) {
      ctx.save();
      ctx.lineWidth = 4;
      ctx.strokeStyle = gradient;
      ctx.shadowBlur = 28;
      ctx.shadowColor = 'rgba(95,212,217,0.95)';
      ctx.beginPath();
      source.forEach((val, i) => {
        const x = i * xStep;
        const y = baseY + val * amp;
        if (i === 0) ctx.moveTo(x, y);
        else {
          const prevX = (i - 1) * xStep;
          const cx = (prevX + x) / 2;
          const prevY = baseY + source[i - 1] * amp;
          ctx.quadraticCurveTo(prevX, prevY, cx, (prevY + y) / 2);
        }
      });
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, height);
      source.forEach((val, i) => {
        const x = i * xStep;
        const y = baseY + val * (amp * 0.95);
        if (i === 0) ctx.lineTo(x, y);
        else {
          const prevX = (i - 1) * xStep;
          const cx = (prevX + x) / 2;
          const prevY = baseY + source[i - 1] * (amp * 0.95);
          ctx.quadraticCurveTo(prevX, prevY, cx, (prevY + y) / 2);
        }
      });
      ctx.lineTo(width, height);
      ctx.closePath();

      const fillGradient = ctx.createLinearGradient(0, baseY - amp, 0, height);
      fillGradient.addColorStop(0, 'rgba(95,212,217,0.22)');
      fillGradient.addColorStop(1, 'rgba(95,212,217,0)');
      ctx.fillStyle = fillGradient;
      ctx.fill();
      ctx.restore();
    }

    function drawGlowDots(source, amp) {
      ctx.save();
      for (let i = 8; i < source.length; i += 8) {
        const x = i * xStep;
        const y = baseY + source[i] * amp;
        const radius = 1.6 + Math.abs(source[i]) * 3.4;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(122,245,250,0.85)';
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(95,212,217,0.95)';
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    animationId = requestAnimationFrame(drawSpectrum);
  }

  function makeIdleSignal(count) {
    const signal = [];
    const time = performance.now() * 0.0011;
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1 || 1);
      const wave = Math.sin((t * Math.PI * 6) + time) * 0.42 + Math.sin((t * Math.PI * 10) - time * 1.3) * 0.18;
      signal.push(wave * 0.34);
    }
    return signal;
  }

  function updateProgress() {
    const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
    const time = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    els.currentTime.textContent = formatTime(time);
    els.duration.textContent = formatTime(duration || tracks[currentTrackIndex]?.duration_seconds || 0);
    els.progressBar.value = duration ? String((time / duration) * 100) : '0';
  }

  function fillTrackDurations() {
    tracks.forEach((track, index) => {
      const node = els.playlist.querySelector(`[data-duration="${index}"]`);
      if (node) {
        const duration = index === currentTrackIndex && audio.duration ? audio.duration : track.duration_seconds || 0;
        node.textContent = formatTime(duration);
      }
    });
  }

  function restorePlayerState() {
    const state = readState();
    const savedVolume = typeof state.volume === 'number' ? state.volume : 0.86;
    audio.volume = savedVolume;
    els.volumeBar.value = String(savedVolume);
    syncPlayButtons(false);

    if (state.playing) {
      showToast('Se recordó la sesión. Pulsa play para reanudar si el navegador bloquea el autoaudio.');
    }
  }

  function handleVisibilityChange() {
    if (document.hidden) {
      wasPlayingBeforeVisibility = !audio.paused;
      saveState();
    } else if (wasPlayingBeforeVisibility) {
      queueSave();
    }
  }

  function startDrag(event) {
    if (event.target.closest('button, input')) return;
    const rect = els.floatingPlayer.getBoundingClientRect();
    dragging = true;
    dragOffsetX = event.clientX - rect.left;
    dragOffsetY = event.clientY - rect.top;
    els.floatingPlayer.style.right = 'auto';
    els.floatingPlayer.style.bottom = 'auto';
    els.floatingPlayer.style.left = `${rect.left}px`;
    els.floatingPlayer.style.top = `${rect.top}px`;
    els.playerHandle.setPointerCapture?.(event.pointerId);
  }

  function onDrag(event) {
    if (!dragging) return;
    const x = Math.min(window.innerWidth - els.floatingPlayer.offsetWidth - 8, Math.max(8, event.clientX - dragOffsetX));
    const y = Math.min(window.innerHeight - els.floatingPlayer.offsetHeight - 8, Math.max(8, event.clientY - dragOffsetY));
    els.floatingPlayer.style.left = `${x}px`;
    els.floatingPlayer.style.top = `${y}px`;
  }

  function stopDrag() {
    dragging = false;
  }

  function resetPlayerPosition() {
    els.floatingPlayer.style.left = '';
    els.floatingPlayer.style.top = '';
    els.floatingPlayer.style.right = window.innerWidth <= 720 ? '8px' : '22px';
    els.floatingPlayer.style.bottom = window.innerWidth <= 720 ? '8px' : '22px';
    showToast('Reproductor recolocado.');
  }

  function saveState() {
    const state = {
      trackIndex: currentTrackIndex,
      time: Number.isFinite(audio.currentTime) ? audio.currentTime : 0,
      volume: Number(els.volumeBar.value),
      playing: !audio.paused
    };
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function queueSave() {
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(saveState, 240);
  }

  function readState() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch (_) {
      return {};
    }
  }

  function showToast(message) {
    window.clearTimeout(showToast.timer);
    els.toast.textContent = message;
    els.toast.classList.add('show');
    showToast.timer = window.setTimeout(() => {
      els.toast.classList.remove('show');
    }, 2400);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function formatTime(seconds) {
    const s = Math.max(0, Math.floor(Number(seconds) || 0));
    const minutes = Math.floor(s / 60);
    const remainder = s % 60;
    return `${minutes}:${String(remainder).padStart(2, '0')}`;
  }

  init();
})();
