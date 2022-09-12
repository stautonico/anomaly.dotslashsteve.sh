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


function generate_button(title, audio_file, youtube_video_title, youtube_video_url) {
    let button_container = document.createElement('div');
    button_container.classList.add('button-container');
    let button = document.createElement('button');
    button.classList.add('button');
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
CONTAINER.appendChild(generate_button("OMFG", "OMFG.mp3", "Anomaly Tries Surströmming", "https://www.youtube.com/watch?v=nCCvctadPD8&t=222s"));
CONTAINER.appendChild(generate_button("Anomaly's Huge Package", "anomalys_huge_package.mp3", "OPENING A $1500 POKEMON MYSTERY BOX", "https://www.youtube.com/watch?v=XKfKM4Uq7W0&t=3s"));
CONTAINER.appendChild(generate_button("Because he's hung over", "because_hes_hung_over.mp3", "Halloween with Anomaly", "https://www.youtube.com/watch?v=poB_G0tHRrs&t=10s"));
CONTAINER.appendChild(generate_button("Papa's Breakfast", "breakfast.mp3", "CANADIAN BEER REVIEW (EH?)", "https://www.youtube.com/watch?v=2ksXESdzt6I&t=98s"));
CONTAINER.appendChild(generate_button("CallMeCarson", "callmecarson.mp3", "SO WE FOUND THIS NEW SITE 1", "https://www.youtube.com/watch?v=bN6XP2yRphA&t=454s"));
CONTAINER.appendChild(generate_button("Carlson Drowns", "carlson_drowns.mp3", "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)", "https://www.youtube.com/watch?v=E7kacgom97s&t=417s"));
CONTAINER.appendChild(generate_button("🚨 Cringe Apple User 🚨", "cringe_apple_user.mp3", "ANOMALY AND PAPA WOULD YOU RATHER..?", "https://www.youtube.com/watch?v=wUohb2oRu4U&t=133s"));
CONTAINER.appendChild(generate_button("Deez Nuts", "deez_nuts.mp3", "ANOMALY AND PAPA TRIES DOG FOOD (PIG INTESTINES)", "https://www.youtube.com/watch?v=W97CkZwagwE&t=371s"));
CONTAINER.appendChild(generate_button("Der Anal Zerstörer", "der_anal_zerstorer.mp3", "SO WE FOUND THIS NEW SITE 1", "https://www.youtube.com/watch?v=bN6XP2yRphA&t=199s"));
CONTAINER.appendChild(generate_button("Don't Burn Down The House", "dont_burn_down_the_house.mp3", "Anomaly Tries Surströmming", "https://www.youtube.com/watch?v=nCCvctadPD8&t=199s"));
CONTAINER.appendChild(generate_button("Dr. Anomaly", "dr_anomaly.mp3", "UNBOXING 500 OPERATION BROKEN FANG CASES (INSANE GLOVES)", "https://www.youtube.com/watch?v=PV8lre2SJqg&t=154s"));
CONTAINER.appendChild(generate_button("Face Reveal Laughs", "face_reveal_laugh.mp3", "24-Hour 4000 Case Opening Stream (VOD no longer available)", "#"));
CONTAINER.appendChild(generate_button("ебанить фармер блять", "fucking_farmer.mp3", "LAN PARTY WITH ANOMALY AND FRIENDS (PART 1)", "https://www.youtube.com/watch?v=cpGwQTAZpBE&t=134s"));
CONTAINER.appendChild(generate_button("F1's Gloves", "gloves.mp3", "GLOVE CASE OPENING (NEW CSGO UPDATE)", "https://www.youtube.com/watch?v=GLyeyiTbQBE&t=121s"));
CONTAINER.appendChild(generate_button("Gotta Catch 'em All!", "gotta_catch_em_all.mp3", "Pokemon GO with Anomaly (Highlights)", "https://www.youtube.com/watch?v=TKU-daPcu18&t=81s"));
CONTAINER.appendChild(generate_button("Hitman (kill my son)", "hitman_kill_my_son.mp3", "WE ALMOST GOT SHOT BY THE MALTA MILITARY (ALMOST DIED XD)", "https://www.youtube.com/watch?v=_jqkuWTRhRg&t=354s"));
CONTAINER.appendChild(generate_button("Se c'è AiA, c'è gioia", "hotdog_ad.mp3", "GOOGLING MYSELF (FACE EXPOSED BY FAN?)", "https://www.youtube.com/watch?v=0597gJaYlP4&t=419s"));
CONTAINER.appendChild(generate_button("I Am Retarded Addict Please Help", "i_am_retarded_addict_please_help.mp3", "SO WE FOUND THIS NEW SITE 1", "https://www.youtube.com/watch?v=bN6XP2yRphA&t=285s"));
CONTAINER.appendChild(generate_button("I Hate You, Don't Moan Again", "i_hate_you_dont_moan_again.mp3", "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)", "https://www.youtube.com/watch?v=E7kacgom97s&t=387s"));
CONTAINER.appendChild(generate_button("If Doctor", "if_doctor.mp3", "Halloween with Anomaly", "https://www.youtube.com/watch?v=poB_G0tHRrs&t=39s"));
CONTAINER.appendChild(generate_button("Let Me Hit A Bullet", "let_me_hit_a_bullet.mp3", "TWITCH HIGHLIGHTS 30 - OBAMA MOMENT", "https://www.youtube.com/watch?v=JmonvSPRhnY&t=536s"));
CONTAINER.appendChild(generate_button("Matchmaking In The Zoo", "matchmaking_in_the_zoo.mp3", "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)", "https://www.youtube.com/watch?v=E7kacgom97s&t=441s"));
CONTAINER.appendChild(generate_button("🍉", "melons.mp3", "FREE TO PLAY \"COUNTER-STRIKE\" GAMES 2", "https://www.youtube.com/watch?v=LiDmJ3UuItM&t=589s"));
CONTAINER.appendChild(generate_button("Obama Moment", "obama_moment.mp3", "TWITCH HIGHLIGHTS 30 - OBAMA MOMENT", "https://www.youtube.com/watch?v=JmonvSPRhnY&t=403s"));
CONTAINER.appendChild(generate_button("Oh, Anomaly", "oh_anomaly.mp3", "ANOMALY GOES TO AFRICA", "https://www.youtube.com/watch?v=FDWrgsmj2wg&t=430s"));
CONTAINER.appendChild(generate_button("Papa Drowning in West Indies Porter", "papa_drowning_in_west_indies_porter.mp3", "PAPA TRIES THE MOST DISGUSTING BEERS", "https://www.youtube.com/watch?v=--jSourmyQ0&t=582s"));
CONTAINER.appendChild(generate_button("Papa Is Depressed", "papa_is_depressed.mp3", "Anomaly Tries Surströmming", "https://www.youtube.com/watch?v=nCCvctadPD8&t=31s"));
CONTAINER.appendChild(generate_button("Pull A PhantomL0rd", "pull_a_phantomlord.mp3", "Anomaly Tries Surströmming", "https://www.youtube.com/watch?v=nCCvctadPD8&t=249s"));
CONTAINER.appendChild(generate_button("RIP Rapacen's Mother", "rip_rapacens_mother.mp3", "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)", "https://www.youtube.com/watch?v=E7kacgom97s&t=377s"));
CONTAINER.appendChild(generate_button("Ёбаньlй в рот", "russian_swears.mp3", "ANOMALY EXPOSED", "https://www.youtube.com/watch?v=gHumZkhUqT4&t=334s"));
CONTAINER.appendChild(generate_button("Sauce Vindaloo", "sauce_vindaloo.mp3", "Opening 2 NEW Shining Fates Elite Trainer Boxes!", "https://www.youtube.com/watch?v=tNpNxOpjPMk&t=185s"));
CONTAINER.appendChild(generate_button("💩", "shit_hard.mp3", "OPENING FAN MAIL 27 (CSGO PINS)", "https://www.youtube.com/watch?v=dfKZ24DW3e0&t=240s"));
CONTAINER.appendChild(generate_button("\"Sleeping Bag\"", "sleeping_bag.mp3", "Anomaly Tries Surströmming", "https://www.youtube.com/watch?v=nCCvctadPD8&t=92s"));
CONTAINER.appendChild(generate_button("LV Belt Smells Good", "smell_good.mp3", "ANOMALY'S COLLECTION OF FAKE CLOUT", "https://www.youtube.com/watch?v=KK0kbCArtFY&t=421s"));
CONTAINER.appendChild(generate_button("Sound Check", "sound_check.mp3", "THE TRUST FACTOR EXPERIENCE 5", "https://www.youtube.com/watch?v=suIcm3T1b9E"));
CONTAINER.appendChild(generate_button("That Disgusting Damn Pedophile", "that_disgusting_damn_pedophile.mp3", "Halloween with Papanomaly", "https://www.youtube.com/watch?v=yckbAFrHgdM&t=487s"));
CONTAINER.appendChild(generate_button("The M4A1-S Has a What?", "the_shell_casing_ejaculation_port_hole_thing.mp3", "GLOVE CASE OPENING (NEW CSGO UPDATE)", "https://www.youtube.com/watch?v=GLyeyiTbQBE&t=348s"));
CONTAINER.appendChild(generate_button("УКРАИНА", "ukraina.mp3", "HILARIOUS MATCHMAKING HIGHLIGHTS", "https://www.youtube.com/watch?v=Jt4x7s6ieGI&t=436s"));
CONTAINER.appendChild(generate_button("Why You Drink More Öl?", "why_you_drink_more_ol.mp3", "Halloween with Anomaly", "https://www.youtube.com/watch?v=poB_G0tHRrs&t=17s"));
CONTAINER.appendChild(generate_button("You Make A Many Fuck?", "you_make_a_many_fuck.mp3", "ANOMALY GOES TO AFRICA", "https://www.youtube.com/watch?v=FDWrgsmj2wg&t=577s"));
CONTAINER.appendChild(generate_button("youlikeityouslut", "youlikeityouslut.mp3", "VERY EXPENSIVE BEER TESTING FOR PAPA'S BIRTHDAY (GONE WRONG)", "https://www.youtube.com/watch?v=ZCmH0Vsmr-M&t=214s"));
