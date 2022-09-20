const CONTAINER = document.querySelector('#container');
const AUDIO = document.querySelector('#audio');
const VOLUME = document.querySelector('#volume');
const VOLUME_VALUE = document.querySelector('#volume-value');
const ANOMALY_POG = document.querySelector('#anomaly-pog');
const ANOMALY_TITLE = document.querySelector('#anomaly');
const AUTOPLAY_BLOCKER = document.querySelector('#autoplay-blocker');
const ANOMALY_MEME = document.querySelector('#anomaly-meme');
const TOAST = document.querySelector('#toast');


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

    if (is_new) button.dataset.ribbon = "New";

    button.textContent = title;
    button_container.onclick = (e) => {
        if (e.target.classList.contains('button'))
            play_sound("/audio/" + audio_file);
    }
    button_container.appendChild(button);


    // Generate a random id for the copy button
    let copy_button_id = `span-${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`;

    let tooltip = `
    <span>
        <span class="download">
            <img class="icon" src="/img/svg/info.svg" alt="Info" height="24em" width="24em" />
            <span class="tooltip">
                From <a href="${youtube_video_url}" target="_blank">${youtube_video_title}</a>
             </span>
            </span>
            
        <a href="audio/${audio_file}" download="${audio_file}" class="download-url">
            <img class="icon download-icon" src="/img/svg/download.svg" alt="Download" height="24em" width="24em" />
        </a>
        
        <!-- Copy the autoplay link -->
        <span class="autoplay-link" id="${copy_button_id}">
            <img class="icon autoplay-link-icon" src="/img/svg/copy.svg" alt="Copy" height="24em" width="24em" />
        </span>
    </span>
    `;

    button_container.innerHTML += tooltip;
    let copy_button = button_container.querySelector(`#${copy_button_id}`);

    copy_button.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.origin + `/?play=${audio_file.replace('.mp3', '')}`);
        show_toast('Copied link to clipboard!')
    });

    return button_container;
}

function stop_playing() {
    AUDIO.pause();
}

function show_toast(message) {
    TOAST.textContent = message;
    TOAST.className = 'show';

    setTimeout(() => {
        TOAST.className = "hide";
    }, 3500);

}

function main() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    if (params.volume) {
        VOLUME.value = params.volume;
        VOLUME_VALUE.textContent = `${VOLUME.value}%`;
        AUDIO.volume = VOLUME.value / 100;
    }

    if (params.play && !params.fat) {
        /*
           This will enable the autoplay blocker.
           If the user has autoplay enabled, the audio will play and the blocker will be hidden.
           If the user has autoplay disabled, the audio will not play and the blocker will be shown.
           Once the user clicks on the screen (on the invisible blocker), the audio will play and the blocker will be hidden.
        */
        AUTOPLAY_BLOCKER.style.display = "block";
        let click_disable_blocker = false;
        AUDIO.src = `/audio/${params.play}.mp3`;
        AUDIO.addEventListener("canplaythrough", () => {
            AUDIO.play().catch(() => {
                click_disable_blocker = true;
                show_toast("Click to continue");
                window.addEventListener('click', (e) => {
                    e.preventDefault();
                    AUDIO.play();
                    AUTOPLAY_BLOCKER.style.display = "none";
                }, {once: true})
            }).finally(() => {
                if (!click_disable_blocker) AUTOPLAY_BLOCKER.style.display = "none";
            });
        });
    }

    if (params.fat) {
        document.querySelector("#not-meme").style.display = "none";
        let audio = ANOMALY_MEME.querySelector('audio');
        audio.play().catch(() => {
            show_toast("Click to have fun");
            window.addEventListener('click', (e) => {
                e.preventDefault();
                audio.play();
            }, {once: true});
        });
        ANOMALY_MEME.style.display = "block";
    }

}

main();
