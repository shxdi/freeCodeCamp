const allSurah = [
  {
    id: '78',
    name: 'Surah an-Naba',
    duration: '4:15',
    src: 'https://download.quranicaudio.com/quran/abu_bakr_ash-shatri_tarawee7/078.mp3',
  },
  {
    id: '79',
    name: `Surah an-Nazi'at`,
    duration: '4:01',
    src: 'https://download.quranicaudio.com/quran/abu_bakr_ash-shatri_tarawee7/079.mp3',
  },
  {
    id: '80',
    name: 'Surah Abasa',
    duration: '3:04',
    src: 'https://download.quranicaudio.com/quran/abu_bakr_ash-shatri_tarawee7/080.mp3',
  },
  {
    id: '81',
    name: 'Surah at-Takwir',
    duration: '2:08',
    src: 'https://download.quranicaudio.com/quran/abu_bakr_ash-shatri_tarawee7/081.mp3',
  },
];

const play = document.getElementById('play');
const pause = document.getElementById('pause');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const surahs = document.querySelectorAll('.surah');

const audio = new Audio();

let currentPlaying;

// Event Listeners

surahs.forEach((ele) => {
  ele.addEventListener('click', () => {
    playSurah(ele.id);
  });
});

play.addEventListener('click', () => {
  if (currentPlaying === undefined) {
    playSurah('78');
  }
  audio.play();
});

pause.addEventListener('click', () => {
  audio.pause();
});

previous.addEventListener('click', () => {
  let newCurrent = Number(currentPlaying) - 1;

  if (currentPlaying === undefined || newCurrent < 78) {
    return;
  }

  playSurah(newCurrent.toString());
});

next.addEventListener('click', () => {
  let newCurrent = Number(currentPlaying) + 1;

  if (currentPlaying === undefined || newCurrent > 81) {
    return;
  }

  playSurah(newCurrent.toString());
});

// Functions

function playSurah(id) {
  displayName(id);
  hightlightSurah(id);
  currentPlaying = id;

  for (let surah of allSurah) {
    if (surah.id === id) {
      audio.src = surah.src;
    }
  }

  audio.play();
}

function displayName(id) {
  const currentName = document.getElementById('current-name');
  let surahObj;

  for (let surah of allSurah) {
    if (surah.id === id) {
      surahObj = surah;
    }
  }

  currentName.textContent = surahObj.name;
}

function hightlightSurah(id) {
  surahs.forEach((ele) => {
    ele.classList.remove('highlight');

    if (ele.id === id) {
      ele.classList.add('highlight');
    }
  });
}
