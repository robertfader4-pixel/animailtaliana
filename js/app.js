const tracks = [
  {
    title: 'Pioggia Segreta', artist: 'Luis Fader', file: 'assets/music/pioggia-segreta.mp3', image: 'assets/images/pioggia-segreta.jpg',
    mood: 'Тайна, дождь и меланхоличная тишина.',
    description: 'Город за стеклом, дождь как шифр и чувство, которое нельзя до конца объяснить.',
    quote: 'Дождь шепчет там, где слова уже слишком поздно произносить.',
    tags: ['дождь', 'тайна', 'ночь', 'меланхолия'], accent: ['#b9e6ea', '#e6d5d0'],
    lyrics: ['Cade la pioggia senza un perché\nsopra i vetri spenti della città\nogni goccia un enigma, un alfabeto\nche la notte non sa spiegare già','Mi tocca il viso, mi parla piano\ncome un segreto che brucia la pelle\nforse è un addio, forse un inganno\nforse la voce di stelle ribelli','Pioggia misteriosa, dimmi chi sei\nsussurri di un mondo che non vedo mai\nparole scure, frammenti di noi\nforse ci uccidi, forse ci vuoi','Pioggia che cadi senza perché\nporti un messaggio che uccide la fé\ne nel silenzio che sa di veleno\nresto ad ascoltare il tuo nome neleno','Gocce che scrivono strani presagi\nsulle mie mani, sui tetti lontani\nforse è un lamento di giorni passati\nforse profeti, forze tiranni','Ho paura a tradurre quel suono\nperché ogni sillaba sa di abbandono\nforse la pioggia è uno specchio crudele\ndove si affoga anche il mio perdono','Pioggia misteriosa, dimmi chi sei\nsussurri di un mondo che non vedo mai\nparole scure, frammenti di noi\nforse ci uccidi, forse ci vuoi','E mentre cade… ancora…\npenso che forse\nla pioggia non parla.\nSiamo noi ad avere troppe domande.','Pioggia…\nmistero…\ncadì…\nin silenzio…\ncome un rimorso che non muore mai.']
  },
  {
    title: 'Onde d\'amore', artist: 'Luis Fader', file: 'assets/music/onde-damore.mp3', image: 'assets/images/onde-damore.jpg',
    mood: 'Светлая энергия, соединение и тихая вибрация любви.',
    description: 'Песня о любви как о волне, которая проходит сквозь душу и оживляет внутренний мир.',
    quote: 'Иногда любовь приходит не голосом, а светящейся частотой.',
    tags: ['любовь', 'волны', 'свет', 'тишина'], accent: ['#9ae6ee', '#f4d6c8'],
    lyrics: ['Quando la notte ci avvolge\nqualche anima non dorme:\nresta sveglia, aspetta – non so chi –\nma qualcosa le sussurra: è qui.','Sono onde d\'amore\nche si aprono nel cuore,\nche traversano l\'anima,\nche guariscono la calma,\nche giungono senza fretta, senza ombra, senza voce.','Non si specchiano,\nnon si toccano,\neppure piegano il desiderio\ncome il fiume piega il piano.\nE nel cuore del silenzio –\ndove il rumore è già menzogna –\nuna frequenza inizia\na vibrare nelle viscere.','Sono onde d\'amore\nche si aprono nel cuore,\nche traversano l\'anima,\nche guariscono la calma,\nche giungono senza fretta, senza ombra, senza voce.','Non occorre un nome,\nné un volto, né una meta:\nbasta un poco di quiete\nper ascoltarne la luce.','Onde d\'amore…\nrisvegliano il dormiente.\nOnde d\'amore…\nbattito senza mente.\nOnde d\'amore…\nci restituiscono il battito.','Nel centro della notte\nbatte sempre un unico suono:\nonde d\'amore.']
  },
  {
    title: 'Donna Misteriosa', artist: 'Luis Fader', file: 'assets/music/donna-misteriosa.mp3', image: 'assets/images/donna-misteriosa.jpg',
    mood: 'Ночной сон, женский образ и таинственное притяжение.',
    description: 'Сон о незнакомке, которая приходит каждую ночь и остаётся даже после света.',
    quote: 'Есть лица, которые принадлежат не миру, а ночи.',
    tags: ['сон', 'тайна', 'ночь', 'притяжение'], accent: ['#b7c7ff', '#d9d2ee'],
    lyrics: ['La città si spegne, un altro giorno va\nIo chiudo gli occhi e tu sei già qua\nNon so il tuo nome, non so dove abiti\nMa il buio è il ponte che ci fa abitare vicini','È un filo sottile tra sonno e realtà\nMi sfiori la mente, poi sparisci nell’aria','Chi sei tu, donna misteriosa?\nPerché ti sogno ogni notte?\nÈ una promessa mai detta, una sete nascosta\nChe nel buio non ha più compromesse','Provo a inseguirti quando l’alba sale\nMa il giorno è un vetro che rende tutto normale\nCerco il tuo volto tra la gente che va\nMa resta solo un’ombra, un’assenza che non se ne va','È un filo sottile tra sonno e realtà\nMi sfiori la mente, poi sparisci nell’aria','Chi sei tu, donna misteriosa?\nPerché ti sogno ogni notte?\nÈ una promessa mai detta, una sete nascosta\nChe nel buio non ha più compromesse','Perché non posso dimenticare il tuo viso?\nÈ inciso dentro, come un tatuaggio indeciso\nChe si fa vivo quando cala la luce\nE in quel momento niente mi conduce\nSe non da te, ancora una volta','Chi sei tu, donna misteriosa?\nPerché ti sogno ogni notte?\nIl tuo viso che mi appare di notte\nÈ la stella più vera, la più silenziosa','Donna misteriosa…\nChi sei?\nAppari di notte…\nE poi sparisci con la luce.']
  },
  {
    title: 'Primavera', artist: 'Luis Fader', file: 'assets/music/primavera.mp3', image: 'assets/images/primavera.jpg',
    mood: 'Свет, обновление и нежная радость.',
    description: 'Весна здесь — это не сезон, а доказательство того, что жизнь возвращается даже после шума мира.',
    quote: 'Иногда самое смелое — остаться с цветом, когда вокруг только крик.',
    tags: ['весна', 'цвет', 'надежда', 'свет'], accent: ['#ffd7e4', '#bce8e5'],
    lyrics: ['Sento che il mondo è in fiamme,lo sento nel notiziario\nUrlano tutti,nessuno ascolta, è un pianeta solitario\nCorrono tutti da qualche parte,senza guardarsi indietro\nInseguono un\'ombra,un like, un vuoto, un falso vetro\nMa io oggi ho spento il volume,ho chiuso quella porta\nPerché fuori c\'è un sole nuovo che non chiedeva scorta','E sboccia la prima,vera, vita!\nNon importa se il mondo cade,se la gente è impazzita\nNoi restiamo qui,a testa alta, a guardare il colore\nChe la primavera dipinge sul nostro cuore\nSui rami spogli,esplode un colore sincero\nÈ la prima,vera, cosa che sento che è vero.','Cammino lento tra i petali caduti sul selciato\nUn giallo acceso,un rosa tenue, un viola inaspettato\nSembra che dicano:"guardate, la vita ricomincia uguale,\ntra le macerie del passato,trova un modo per essere speciale"\nE un\'ape cerca il nettare,indifferente al rumore\nSvolge il suo antico compito,nel suo piccolo, amore.','E sboccia la prima,vera, vita!\nNon importa se il mondo cade,se la gente è impazzita\nNoi restiamo qui,a testa alta, a guardare il colore\nChe la primavera dipinge sul nostro cuore\nSui rami spogli,esplode un colore sincero\nÈ la prima,vera, cosa che sento che è vero.','E allora lascia che impazziscano,lascia che urlino al vento\nNoi abbiamo un appuntamento con un vecchio mandorlo in fiore,lento\nSotto le nuvole che passano,portando via la tempesta\nResta solo la luce,nuova, sulla nostra testa.','E sboccia la prima,vera, vita!\nNon importa se il mondo cade,se la gente è impazzita\nNoi restiamo qui,a testa alta, a guardare il colore\nChe la primavera dipinge sul nostro cuore\nSui rami spogli,esplode un colore sincero\nÈ la prima,vera, cosa che sento che è vero.','Sì,è la prima, vera...\nLa prima vera...\nCosa vera.']
  },
  {
    title: 'Sorrido senza paura', artist: 'Luis Fader', file: 'assets/music/sorrido-senza-paura.mp3', image: 'assets/images/sorrido-senza-paura.jpg',
    mood: 'Улыбка, свобода и лёгкая смелость.',
    description: 'Песня про внутренний свет, который не боится серого города и чужого взгляда.',
    quote: 'Радость тоже может быть формой мужества.',
    tags: ['улыбка', 'свобода', 'луна', 'надежда'], accent: ['#c8d9ff', '#f3e0c8'],
    lyrics: ['Cammino per le strade grigie,\nNessuno guarda su.\nTutti hanno gli occhi bassi,\nLa luce non c\'è più.\nMa dentro me qualcosa vive,\nUn fuoco che non muore,\nUna voce che mi dice:\n"Non spegnere il tuo cuore!"','Io voglio ridere, cantare,\nVoglio il sole in questa città!\nNon mi fermeranno mai,\nLa gioia è la mia libertà!\nSorrido senza paura,\nAnche se mi guardano male,\nPerché un mondo senza risate\nÈ un mondo davvero troppo uguale!','La gente passa e non si parla,\nSilenzio intorno a me.\nSembra che nessuno aspetti\nQualcosa di bello, perché?\nMa io ci credo ancora,\nChe tutto può cambiare,\nChe un giorno anche qui\nSi possa finalmente amare!','Io voglio ridere, cantare,\nVoglio il sole in questa città!\nNon mi fermeranno mai,\nLa gioia è la mia libertà!\nSorrido senza paura,\nAnche se mi guardano male,\nPerché un mondo senza risate\nÈ un mondo davvero troppo uguale!','E quando arriverà quel giorno,\nSarà tutto più leggero,\nLe strade avranno mille colori,\nE noi saremo lì, sinceri,\nA ridere senza vergogna,\nA piangere di felicità...','Perché io rido, canto, vivo!\nPorto il sole in questa città!\nNiente può fermare un sogno,\nLa gioia è la mia libertà!\nSorrido senza paura,\nFelice e libera ormai,\nPerché un mondo con le risate\nÈ il mondo che voglio, lo sai!','È il mondo che voglio...\nPer me...\nPer noi...']
  },
  {
    title: 'Tra le Acque e il Silenzio', artist: 'Luis Fader', file: 'assets/music/tra-le-acque-e-il-silenzio.mp3', image: 'assets/images/tra-le-acque-e-il-silenzio.jpg',
    mood: 'Мягкое примирение, глубина и покой.',
    description: 'Песня о том моменте, когда любовь становится тихим центром, а сердце перестаёт быть холодным.',
    quote: 'Иногда любовь не взрывает — она оттаивает.',
    tags: ['тишина', 'глубина', 'откровение', 'спокойствие'], accent: ['#cfd8f1', '#f0d7cb'],
    lyrics: ['Sono stata una statua nel tempo cristallizzata\nUn faro spento, un segreto per l\'onda custodita\nPoi il tuo sguardo, un terremoto di luce improvvisa\nHa incrinato il mio marmo, ha svelato la vita.','Ora danzo sulla scia di una cometa perduta\nSei il vento che smuove la mia polvere di stelle\nL\'unico riflesso in questo specchio di gelo\nChe conosce il mio volto, che sa del mio cielo.','Ho custodito notti più lunghe di secoli muti\nUna rosa d\'albatro che mai si è dischiusa\nLe tue mani, una mappa di calore assoluto\nHanno sciolto la brina, trovato la scusa.','Ora danzo sulla scia di una cometa perduta\nSei il vento che smuove la mia polvere di stelle\nL\'unico riflesso in questo specchio di gelo\nChe conosce il mio volto, che sa del mio cielo.','Il mio cuore era un labirinto sommerso e silente\nUn codice scritto con inchiostro di luna\nTu, viandante senza bussola e senza ponente\nHai trovato il centro, non per caso, per fortuna.','Ti stringo, enigma che non ha più bisogno d’essere sciolto\nMio porto sicuro in un oceano di maschere\nSei la rivelazione che non teme l’abisso\nL\'amore che finalmente, dopo secoli, riesco a baciare.']
  },
  {
    title: 'Il Violoncello nella Fortezza', artist: 'Luis Fader', file: 'assets/music/il-violoncello-nella-fortezza.mp3', image: 'assets/images/il-violoncello-nella-fortezza.jpg',
    mood: 'Эпическая нежность, крепость чувств и музыка как обещание.',
    description: 'Здесь любовь звучит как клятва среди камня, пустыни и эха прошлого.',
    quote: 'Даже крепость начинает дышать, когда в ней звучит виолончель.',
    tags: ['виолончель', 'крепость', 'драма', 'обещание'], accent: ['#e2c6aa', '#d5d9ef'],
    lyrics: ['Notte senza stelle,\nsuono per te.\nArco sul silenzio,\nciò che resta di me.\nDeserto fuori,\nricordo crudele.\nNella fortezza,\nsolo tu, con me.','Ti amo, lo sai,\ntra mura di speranza.\nMa un fantasma è qui,\ndell’altra amanza.\nLa tua anima è in guerra,\nlo vedo, lo sento.\nIn questo mondo morto,\nnoi siamo l’amore risorto.','Le tue mani stringono\nil passato fedele.\nLe mie cercano il futuro,\nfragile, ma che anela.\nLa fortezza ha ombre\nlungo le sue scale.\nE io combatto un’eco\nsenza fine, uguale.','Ti amo, lo sai,\ntra mura di speranza.\nMa un fantasma è qui,\ndell’altra amanza.\nLa tua anima è in guerra,\nlo vedo, lo sento.\nIn questo mondo morto,\nnoi siamo l’amore risorto.','Deserto ride,\nvento porta polvere.\nIl mio violoncello grida:\n“Non sia tutto cenere!”\nNon cancello il passato,\nma non farmi rifugio in prestito.\nFacciamo del nostro cuore\nun patto infinito.','Suono per un’utopia\nmai perduta.\nSuono perché questa fortezza\nnon sia venduta.\nSe la musica è chiave,\ntu sei la serratura,\nlascia il deserto fuori…\nabbraccia la mia cura.','Ti amo, lo sai,\ntra mura di speranza.\nSeppellisci quel fantasma,\ndalla distanza.\nLa nostra anima in pace,\nora lo voglio.\nIn questo mondo morto,\nnoi siamo l’amore risorto.\nSì, in questo mondo morto,\nnoi siamo l’amore risorto.']
  },
  {
    title: 'Sei La Mia Ispirazione', artist: 'Luis Fader', file: 'assets/music/sei-la-mia-ispirazione.mp3', image: 'assets/images/sei-la-mia-ispirazione.jpg',
    mood: 'Муза, космос и песня, рождающаяся из желания.',
    description: 'Любовь как вдохновение, которое живёт между сном, музыкой и поэзией.',
    quote: 'Иногда муза приходит не в слова, а в мелодию.',
    tags: ['муза', 'поэзия', 'космос', 'вдохновение'], accent: ['#d7c9ff', '#9ad7ff'],
    lyrics: ['Nell\'insonnia della notte,\npenso a te, e tu arrivi,\nin una melodia magica,\ndolcemente mi rapisci.','Sei la mia ispirazione,\nmusica ed emozione,\ncarezzo il tuo corpo\nin note e armonia.\nPoi svanisci piano,\nma resti lontano,\nnutrendo l\'anima mia.','Vieni, danzi tra le stelle,\nun sogno che non finisce,\nla tua voce è un vento caldo,\nche il mio cuore accende e dice...','Sei la mia ispirazione,\nmusica ed emozione,\ncarezzo il tuo corpo\nin note e armonia.\nPoi svanisci piano,\nma resti lontano,\nnutrendo l\'anima mia.','E quando l\'alba sorride,\ntu ti nascondi nel sole,\nma la tua canzone è vita,\nè fuoco che non muore...','Sei la mia ispirazione,\neterna melodia,\nanche se sei solo un sogno,\nvivi nella poesia.']
  },
  {
    title: 'Tu Sei Il Mio Segreto', artist: 'Luis Fader', file: 'assets/music/tu-sei-il-mio-segreto.mp3', image: 'assets/images/tu-sei-il-mio-segreto.jpg',
    mood: 'Тайная исповедь, нежность и классическое спокойствие.',
    description: 'Скрытая любовь, произнесённая тихо, но навсегда.',
    quote: 'Самое сокровенное часто живёт не во внешнем мире, а под сердцем.',
    tags: ['секрет', 'исповедь', 'нежность', 'классика'], accent: ['#d8c3b2', '#efe6d7'],
    lyrics: ['Ho palazzi di luce,\nCastelli nel vento,\nTesori nascosti\nSotto terra d’argento.','Ma tra tutte le ricchezze,\nTra sogni e potere,\nSolo tu, solo tu\nMi fai davvero vivere.','Tu sei il mio segreto,\nQuel nome che non dico mai,\nLa voce che mi porto dentro,\nChe nessuno saprà mai.','Tu sei il mio segreto,\nLa mia gioia, il mio peccato,\nL’amore che non ha confini,\nIl destino che ho baciato.','Posso avere il mondo,\nFermare il tempo,\nMa senza il tuo sguardo\nNon vale niente.','Perché sei la mia storia,\nLa musica e il silenzio,\nL’unico vero tesoro\nChe batte nel mio sangue.','Tu sei il mio segreto,\nQuel nome che non dico mai,\nLa voce che mi porto dentro,\nChe nessuno saprà mai.','Tu sei il mio segreto,\nLa mia gioia, il mio peccato,\nL’amore che non ha confini,\nIl destino che ho baciato.','E se un giorno il vento\nPortasse via tutto,\nResteresti tu,\nSolo tu,\nIl mio infinito.','Tu sei il mio segreto,\nL’unica verità,\nPer sempre mio,\nAnche se non mi avrai.']
  },
  {
    title: 'Baci Fantasma', artist: 'Luis Fader', file: 'assets/music/baci-fantasma.mp3', image: 'assets/images/baci-fantasma.jpg',
    mood: 'Память о поцелуе, тоска и романтическое эхо.',
    description: 'Это песня о прикосновении, которое исчезло, но осталось жить внутри.',
    quote: 'Есть поцелуи, которые уходят только из времени, но не из тела.',
    tags: ['поцелуй', 'память', 'эхо', 'ностальгия'], accent: ['#bac7ff', '#f1d0c1'],
    lyrics: ['Fu un attimo, senza avviso,\ncome un fulmine sulla pelle.\nLe sue labbra, un dolce incantesimo,\nora vivono dentro a me.','Non seppi il nome, né la storia,\nsolo il calore di quel lampo.\nE ora vivo in quella gloria\nche svanisce piano piano.','Baci fantasma, sulla bocca,\norme che il tempo non cancellò.\nOmbre di un fuoco che mi tocca,\nanche se lei se ne andò.','Cerco il suo sguardo tra la gente,\nin ogni risata, in ogni voce.\nMa il suo ricordo è solo un niente\nche torna sempre senza foce.','Fu vero o solo il destino\nche giocò a farmi sognare?\nUn’illusione, un dolce vino\nche non mi fa andare avanti.','Baci fantasma, sulla bocca,\norme che il tempo non cancellò.\nOmbre di un fuoco che mi tocca,\nanche se lei se ne andò.','E se un giorno il vento torna\na portarmi il suo respiro,\nnon lascerò che ancora…\nsfugga senza un nuovo delirio.']
  }
];

const els = {
  audio: document.getElementById('audio'),
  playlist: document.getElementById('playlist'),
  currentCover: document.getElementById('currentCover'),
  trackTitle: document.getElementById('trackTitle'),
  trackMood: document.getElementById('trackMood'),
  trackDescription: document.getElementById('trackDescription'),
  trackTags: document.getElementById('trackTags'),
  lyricsContent: document.getElementById('lyricsContent'),
  heroQuote: document.getElementById('heroQuote'),
  heroImageA: document.querySelector('.hero-image-a'),
  heroImageB: document.querySelector('.hero-image-b'),
  heroPlayBtn: document.getElementById('heroPlayBtn'),
  playBtn: document.getElementById('playBtn'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  progressBar: document.getElementById('progressBar'),
  currentTime: document.getElementById('currentTime'),
  duration: document.getElementById('duration'),
  volumeBar: document.getElementById('volumeBar'),
  miniTrackTitle: document.getElementById('miniTrackTitle'),
  miniTrackArtist: document.getElementById('miniTrackArtist'),
  floatingPlayer: document.getElementById('floatingPlayer'),
  minimizeBtn: document.getElementById('minimizeBtn'),
  expandPlayerBtn: document.getElementById('expandPlayerBtn'),
  dragHandle: document.getElementById('dragHandle'),
  spectrumCanvas: document.getElementById('spectrumCanvas'),
  focusToggle: document.getElementById('focusToggle'),
  lyricsModeBtn: document.getElementById('lyricsModeBtn')
};

const STORAGE_KEY = 'italian-mood-state-v2';
const state = { currentIndex: 0, currentImageLayer: 'a', analyser: null, audioCtx: null, sourceNode: null, dataArray: null, rafId: null, saved: null };

function formatTime(time) {
  if (!Number.isFinite(time)) return '0:00';
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function saveState() {
  const payload = {
    currentIndex: state.currentIndex,
    currentTime: els.audio.currentTime || 0,
    isPlaying: !els.audio.paused,
    volume: els.audio.volume,
    playerMinimized: els.floatingPlayer.classList.contains('minimized'),
    playerPosition: {
      left: els.floatingPlayer.style.left || '',
      top: els.floatingPlayer.style.top || '',
      right: els.floatingPlayer.style.right || '',
      bottom: els.floatingPlayer.style.bottom || ''
    }
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadState() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!data) return;
    state.saved = data;
    if (typeof data.currentIndex === 'number' && data.currentIndex >= 0 && data.currentIndex < tracks.length) state.currentIndex = data.currentIndex;
    if (typeof data.volume === 'number') {
      els.audio.volume = data.volume;
      els.volumeBar.value = data.volume;
    }
    if (data.playerMinimized) {
      els.floatingPlayer.classList.add('minimized');
      els.expandPlayerBtn.classList.add('visible');
    }
    if (data.playerPosition) Object.assign(els.floatingPlayer.style, data.playerPosition);
  } catch {}
}

function renderPlaylist() {
  els.playlist.innerHTML = '';
  tracks.forEach((track, index) => {
    const li = document.createElement('li');
    if (index === state.currentIndex) li.classList.add('active');
    li.innerHTML = `
      <button class="playlist-entry" type="button" data-index="${index}">
        <span class="track-index">${String(index + 1).padStart(2, '0')}</span>
        <span>
          <span class="track-name">${track.title}</span>
          <span class="track-sub">${track.mood}</span>
        </span>
        <span class="track-duration" data-duration-for="${index}">—</span>
      </button>
    `;
    li.querySelector('button').addEventListener('click', () => {
      if (index === state.currentIndex) {
        togglePlayback();
      } else {
        loadTrack(index, true);
      }
    });
    els.playlist.appendChild(li);
  });
}

function renderDurations() {
  tracks.forEach((track, index) => {
    const a = new Audio();
    a.preload = 'metadata';
    a.src = track.file;
    a.addEventListener('loadedmetadata', () => {
      const t = document.querySelector(`[data-duration-for="${index}"]`);
      if (t) t.textContent = formatTime(a.duration);
    }, { once: true });
  });
}

function updatePlaylistState() {
  document.querySelectorAll('#playlist li').forEach((li, idx) => li.classList.toggle('active', idx === state.currentIndex));
}

function setHeroImage(image) {
  const nextLayer = state.currentImageLayer === 'a' ? 'b' : 'a';
  const show = nextLayer === 'a' ? els.heroImageA : els.heroImageB;
  const hide = nextLayer === 'a' ? els.heroImageB : els.heroImageA;
  show.style.backgroundImage = `url('${image}')`;
  show.style.opacity = '1';
  hide.style.opacity = '0';
  state.currentImageLayer = nextLayer;
}

function setThemeColors(accent) {
  if (!accent) return;
  document.documentElement.style.setProperty('--accent', accent[0]);
  document.documentElement.style.setProperty('--accent-2', accent[1]);
}

function renderLyrics(track) {
  els.lyricsContent.innerHTML = '';
  track.lyrics.forEach((block, i) => {
    const p = document.createElement('p');
    p.textContent = block;
    p.style.animationDelay = `${i * 0.04}s`;
    els.lyricsContent.appendChild(p);
  });
}

function updateTrackUI(track) {
  els.currentCover.src = track.image;
  els.currentCover.alt = `Обложка песни ${track.title}`;
  els.trackTitle.textContent = track.title;
  els.trackMood.textContent = track.mood;
  els.trackDescription.textContent = track.description;
  els.heroQuote.textContent = track.quote;
  els.miniTrackTitle.textContent = track.title;
  els.miniTrackArtist.textContent = track.artist;
  els.trackTags.innerHTML = '';
  track.tags.forEach(tag => {
    const s = document.createElement('span');
    s.className = 'tag-pill';
    s.textContent = tag;
    els.trackTags.appendChild(s);
  });
  setHeroImage(track.image);
  setThemeColors(track.accent);
  renderLyrics(track);
  updatePlaylistState();
}

function loadTrack(index, autoplay = false) {
  state.currentIndex = index;
  const track = tracks[index];
  els.audio.src = track.file;
  updateTrackUI(track);
  saveState();
  if (autoplay) playAudio();
}

async function setupAudioContext() {
  if (state.audioCtx) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  state.audioCtx = new AudioCtx();
  state.analyser = state.audioCtx.createAnalyser();
  state.analyser.fftSize = 256;
  state.dataArray = new Uint8Array(state.analyser.frequencyBinCount);
  state.sourceNode = state.audioCtx.createMediaElementSource(els.audio);
  state.sourceNode.connect(state.analyser);
  state.analyser.connect(state.audioCtx.destination);
}

async function playAudio() {
  await setupAudioContext();
  if (state.audioCtx && state.audioCtx.state === 'suspended') await state.audioCtx.resume();
  await els.audio.play();
}

function pauseAudio() { els.audio.pause(); }
function togglePlayback() { els.audio.paused ? playAudio() : pauseAudio(); }
function updatePlayButtons() {
  const icon = els.audio.paused ? '▶' : '❚❚';
  els.playBtn.textContent = icon;
  els.heroPlayBtn.textContent = els.audio.paused ? 'Слушать' : 'Пауза';
}

function drawSpectrum() {
  const canvas = els.spectrumCanvas;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const render = () => {
    ctx.clearRect(0, 0, rect.width, rect.height);
    if (!state.analyser) {
      state.rafId = requestAnimationFrame(render);
      return;
    }
    state.analyser.getByteFrequencyData(state.dataArray);
    const centerY = rect.height * 0.62;
    const width = rect.width;

    ctx.lineWidth = 2;
    const gradient = ctx.createLinearGradient(0, centerY - 80, width, centerY + 80);
    gradient.addColorStop(0, 'rgba(180, 236, 240, 0.10)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.42)');
    gradient.addColorStop(1, 'rgba(250, 215, 228, 0.12)');
    ctx.strokeStyle = gradient;
    ctx.beginPath();
    for (let x = 0; x < width; x += 6) {
      const idx = Math.floor((x / width) * state.dataArray.length);
      const amp = (state.dataArray[idx] / 255) * 42;
      const y = centerY + Math.sin(x * 0.016 + performance.now() * 0.0025) * amp;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(255,255,255,0.24)';
    ctx.beginPath();
    for (let x = 0; x < width; x += 8) {
      const idx = Math.floor((x / width) * state.dataArray.length);
      const amp = (state.dataArray[idx] / 255) * 22;
      const y = centerY + 18 + Math.cos(x * 0.012 + performance.now() * 0.0018) * amp;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    state.rafId = requestAnimationFrame(render);
  };

  cancelAnimationFrame(state.rafId);
  render();
}

function attachAudioEvents() {
  els.audio.addEventListener('timeupdate', () => {
    els.currentTime.textContent = formatTime(els.audio.currentTime);
    const progress = els.audio.duration ? (els.audio.currentTime / els.audio.duration) * 100 : 0;
    els.progressBar.value = progress;
    saveState();
  });
  els.audio.addEventListener('loadedmetadata', () => {
    els.duration.textContent = formatTime(els.audio.duration);
    if (state.saved && state.saved.currentIndex === state.currentIndex && typeof state.saved.currentTime === 'number') {
      els.audio.currentTime = state.saved.currentTime;
      state.saved.currentTime = null;
    }
  });
  els.audio.addEventListener('play', () => { updatePlayButtons(); saveState(); });
  els.audio.addEventListener('pause', () => { updatePlayButtons(); saveState(); });
  els.audio.addEventListener('ended', () => loadTrack((state.currentIndex + 1) % tracks.length, true));
}

function setupControls() {
  els.playBtn.addEventListener('click', togglePlayback);
  els.heroPlayBtn.addEventListener('click', togglePlayback);
  els.prevBtn.addEventListener('click', () => loadTrack((state.currentIndex - 1 + tracks.length) % tracks.length, true));
  els.nextBtn.addEventListener('click', () => loadTrack((state.currentIndex + 1) % tracks.length, true));
  els.progressBar.addEventListener('input', () => {
    if (els.audio.duration) els.audio.currentTime = (Number(els.progressBar.value) / 100) * els.audio.duration;
  });
  els.volumeBar.addEventListener('input', () => {
    els.audio.volume = Number(els.volumeBar.value);
    saveState();
  });
  els.minimizeBtn.addEventListener('click', () => {
    els.floatingPlayer.classList.add('minimized');
    els.expandPlayerBtn.classList.add('visible');
    saveState();
  });
  els.expandPlayerBtn.addEventListener('click', () => {
    els.floatingPlayer.classList.remove('minimized');
    els.expandPlayerBtn.classList.remove('visible');
    saveState();
  });
  els.focusToggle.addEventListener('click', () => document.body.classList.toggle('focus-mode'));
  els.lyricsModeBtn.addEventListener('click', () => document.body.classList.toggle('lyrics-only'));
}

function setupDrag() {
  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;
  const start = (x, y) => {
    const rect = els.floatingPlayer.getBoundingClientRect();
    dragging = true;
    offsetX = x - rect.left;
    offsetY = y - rect.top;
    els.floatingPlayer.style.left = `${rect.left}px`;
    els.floatingPlayer.style.top = `${rect.top}px`;
    els.floatingPlayer.style.right = 'auto';
    els.floatingPlayer.style.bottom = 'auto';
  };
  const move = (x, y) => {
    if (!dragging) return;
    els.floatingPlayer.style.left = `${Math.max(8, x - offsetX)}px`;
    els.floatingPlayer.style.top = `${Math.max(8, y - offsetY)}px`;
  };
  const end = () => { if (dragging) { dragging = false; saveState(); } };
  els.dragHandle.addEventListener('mousedown', e => start(e.clientX, e.clientY));
  window.addEventListener('mousemove', e => move(e.clientX, e.clientY));
  window.addEventListener('mouseup', end);
  els.dragHandle.addEventListener('touchstart', e => {
    const t = e.touches[0]; start(t.clientX, t.clientY);
  }, { passive: true });
  window.addEventListener('touchmove', e => {
    const t = e.touches[0]; if (t) move(t.clientX, t.clientY);
  }, { passive: true });
  window.addEventListener('touchend', end);
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function init() {
  loadState();
  renderPlaylist();
  renderDurations();
  attachAudioEvents();
  setupControls();
  setupDrag();
  setupReveal();
  loadTrack(state.currentIndex, false);
  updatePlayButtons();
  drawSpectrum();
  if (state.saved?.isPlaying) playAudio().catch(() => {});
  window.addEventListener('beforeunload', saveState);
  window.addEventListener('resize', drawSpectrum);
}

init();
