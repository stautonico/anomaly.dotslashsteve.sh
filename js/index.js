const CONTAINER = document.querySelector('#container');
const AUDIO = document.querySelector('#audio');
const VOLUME = document.querySelector('#volume');
const VOLUME_VALUE = document.querySelector('#volume-value');
const ANOMALY_POG = document.querySelector('#anomaly-pog');
const ANOMALY_TITLE = document.querySelector('#anomaly');

let last_POG_number = null;

let correctTitle = true;

VOLUME.addEventListener('input', () => {
    VOLUME_VALUE.textContent = `${VOLUME.value}%`;
    AUDIO.volume = VOLUME.value / 100;
});

ANOMALY_POG.addEventListener("click", (e) => {
    // Pick a random number between 0 and 2
    let random = Math.floor(Math.random() * 3);
    while (random === last_POG_number) {
        random = Math.floor(Math.random() * 3);
    }
    last_POG_number = random;
    let toPlay;
    switch (random) {
        case 0:
            toPlay = "audio/hey_guys_anomaly_here_INTRO.mp3";
            break;
        case 1:
            toPlay = "audio/hellopapa_INTRO.mp3";
            break;
        case 2: {
            toPlay = "audio/hellogais_INTRO.mp3";
            ANOMALY_POG.classList.add("shake");
            setTimeout(() => {
                ANOMALY_POG.classList.remove("shake");
            }, 1141);
            break;
        }
    }
    play_sound(toPlay);
});

ANOMALY_TITLE.addEventListener('click', (e) => {
    if (correctTitle) {
        ANOMALY_TITLE.textContent = "Analmaly";
        correctTitle = false;
        setTimeout(() => {
            ANOMALY_TITLE.textContent = "Anomaly";
            correctTitle = true;
        }, 10000);
    } else {
        ANOMALY_TITLE.textContent = "Anomaly";
        correctTitle = true;
    }
});


function play_sound(sound) {
    AUDIO.src = sound;
    AUDIO.play();
}


function generate_button(title, audio_file, youtube_video_title, youtube_video_url, is_new) {
    let button_container = document.createElement('div');
    button_container.classList.add('button-container');
    let button = document.createElement('button');
    button.classList.add('button');

    if (is_new) button.dataset.ribbon="New";

    button.textContent = title;
    button_container.onclick = (e) => {
        if (e.target.classList.contains('button'))
            play_sound("/audio/" + audio_file);
    }
    button_container.appendChild(button);

    let tooltip = `
    <span>
        <span class="download">
            <img class="icon" src="/img/svg/info.svg" alt="Info" height="24em" width="24em" />
            <span class="tooltip">
                From <a href="${youtube_video_url}" target="_blank">${youtube_video_title}</a>
             </span>
            </span>
            
        <a href="audio/${audio_file}" download="${audio_file}">
            <img class="icon download-icon" src="/img/svg/download.svg" alt="Download" height="24em" width="24em" />
        </a>
    </span>
    `;

    button_container.innerHTML += tooltip;
    return button_container;
}

function stop_playing() {
    AUDIO.pause();
}
