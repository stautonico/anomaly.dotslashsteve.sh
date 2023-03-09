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
CONTAINER.appendChild(generate_button("OMFG", "OMFG.mp3", "Anomaly Tries Surströmming", "https://www.youtube.com/watch?v=nCCvctadPD8&t=222s", false));
CONTAINER.appendChild(generate_button("HÅLL KÄFTEN", "SHUT_UP.mp3", "TWITCH HIGHLIGHTS 31 - GIGACHAD CSGO MOMENTS", "https://www.youtube.com/watch?v=-_UarirZstg&t=262s", false));
CONTAINER.appendChild(generate_button("Anomaly Drinks Alot", "anomaly_drinks_alot.mp3", "ANOMALY AND PAPANOMALY Q&A", "https://www.youtube.com/watch?v=mK3aN03ABe4&t=591s", false));
CONTAINER.appendChild(generate_button("Anomaly Eats 🍑", "anomaly_eats_cake.mp3", "ANOMALY AND PAPANOMALY Q&A", "https://www.youtube.com/watch?v=mK3aN03ABe4&t=481s", false));
CONTAINER.appendChild(generate_button("Anomaly Eats 💩", "anomaly_eats_shit.mp3", "MAKING THE BIGGEST BIRTHDAY CAKE EVER (90.000 CALORIES)", "https://www.youtube.com/watch?v=KisAeJsus4s&t=252s", false));
CONTAINER.appendChild(generate_button("OMG Anomaly GFYS", "anomaly_gfys.mp3", "THE TRUST FACTOR EXPERIENCE 5", "https://www.youtube.com/watch?v=suIcm3T1b9E&t=699s", false));
CONTAINER.appendChild(generate_button("Anomaly's Huge Package", "anomalys_huge_package.mp3", "OPENING A $1500 POKEMON MYSTERY BOX", "https://www.youtube.com/watch?v=XKfKM4Uq7W0&t=3s", false));
CONTAINER.appendChild(generate_button("Because he's hung over", "because_hes_hung_over.mp3", "Halloween with Anomaly", "https://www.youtube.com/watch?v=poB_G0tHRrs&t=10s", false));
CONTAINER.appendChild(generate_button("Papa's Breakfast", "breakfast.mp3", "CANADIAN BEER REVIEW (EH?)", "https://www.youtube.com/watch?v=2ksXESdzt6I&t=98s", false));
CONTAINER.appendChild(generate_button("CallMeCarson", "callmecarson.mp3", "SO WE FOUND THIS NEW SITE 1", "https://www.youtube.com/watch?v=bN6XP2yRphA&t=454s", false));
CONTAINER.appendChild(generate_button("Can I Put Fuck On You?", "can_i_put_fuck_on_you.mp3", "RUSSIAN MATCHMAKING EXPERIENCE (RUSSIA SERVERS)", "https://www.youtube.com/watch?v=vOS-X3COxzY&t=333s", false));
CONTAINER.appendChild(generate_button("Carlson Drowns", "carlson_drowns.mp3", "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)", "https://www.youtube.com/watch?v=E7kacgom97s&t=417s", false));
CONTAINER.appendChild(generate_button("🚨 Cringe Apple User 🚨", "cringe_apple_user.mp3", "ANOMALY AND PAPA WOULD YOU RATHER..?", "https://www.youtube.com/watch?v=wUohb2oRu4U&t=133s", false));
CONTAINER.appendChild(generate_button("Deez Nuts", "deez_nuts.mp3", "ANOMALY AND PAPA TRIES DOG FOOD (PIG INTESTINES)", "https://www.youtube.com/watch?v=W97CkZwagwE&t=371s", false));
CONTAINER.appendChild(generate_button("Der Anal Zerstörer", "der_anal_zerstorer.mp3", "SO WE FOUND THIS NEW SITE 1", "https://www.youtube.com/watch?v=bN6XP2yRphA&t=199s", false));
CONTAINER.appendChild(generate_button("Don't Burn Down The House", "dont_burn_down_the_house.mp3", "Anomaly Tries Surströmming", "https://www.youtube.com/watch?v=nCCvctadPD8&t=199s", false));
CONTAINER.appendChild(generate_button("Dr. Anomaly", "dr_anomaly.mp3", "UNBOXING 500 OPERATION BROKEN FANG CASES (INSANE GLOVES)", "https://www.youtube.com/watch?v=PV8lre2SJqg&t=154s", false));
CONTAINER.appendChild(generate_button("F1's Favorite BTS Member", "f1s_favorite_bts_member.mp3", "TWITCH HIGHLIGHTS 27 - PLAYING WITH A MICROWAVE", "https://www.youtube.com/watch?v=O22t8hmd2Iw&t=98s", false));
CONTAINER.appendChild(generate_button("Face Reveal Laughs", "face_reveal_laugh.mp3", "24-Hour 4000 Case Opening Stream (VOD no longer available)", "#", false));
CONTAINER.appendChild(generate_button("Fat Stupid Virgin", "fat_stupid_virgin.mp3", "ANOMALY BUILDS A GINGERBREAD HOUSE!", "https://www.youtube.com/watch?v=FHzSwe0lceY&t=238s", false));
CONTAINER.appendChild(generate_button("ебанить фармер блять", "fucking_farmer.mp3", "LAN PARTY WITH ANOMALY AND FRIENDS (PART 1)", "https://www.youtube.com/watch?v=cpGwQTAZpBE&t=134s", false));
CONTAINER.appendChild(generate_button("гармошка блять", "garmoshka_blyat.mp3", "RUSSIAN MATCHMAKING EXPERIENCE (RUSSIA SERVERS)", "https://www.youtube.com/watch?v=vOS-X3COxzY&t=297s", false));
CONTAINER.appendChild(generate_button("Fußgewas Ja", "german_feet.mp3", "OUR WORST VIDEO EVER (BEER REVIEW 3)", "https://www.youtube.com/watch?v=N9_fgO4H0Hs&t=48s", false));
CONTAINER.appendChild(generate_button("F1's Gloves", "gloves.mp3", "GLOVE CASE OPENING (NEW CSGO UPDATE)", "https://www.youtube.com/watch?v=GLyeyiTbQBE&t=121s", false));
CONTAINER.appendChild(generate_button("Gotta Catch 'em All!", "gotta_catch_em_all.mp3", "Pokemon GO with Anomaly (Highlights)", "https://www.youtube.com/watch?v=TKU-daPcu18&t=81s", false));
CONTAINER.appendChild(generate_button("Hitman (kill my son)", "hitman_kill_my_son.mp3", "WE ALMOST GOT SHOT BY THE MALTA MILITARY (ALMOST DIED XD)", "https://www.youtube.com/watch?v=_jqkuWTRhRg&t=354s", false));
CONTAINER.appendChild(generate_button("Se c'è AiA, c'è gioia", "hotdog_ad.mp3", "GOOGLING MYSELF (FACE EXPOSED BY FAN?)", "https://www.youtube.com/watch?v=0597gJaYlP4&t=419s", false));
CONTAINER.appendChild(generate_button("How Many Points?", "how_many_points.mp3", "TRYING HIPSTER BEER (GONE WRONG)", "https://www.youtube.com/watch?v=ksR7kNDRQ2Q&t=289s", false));
CONTAINER.appendChild(generate_button("I Am Retarded Addict Please Help", "i_am_retarded_addict_please_help.mp3", "SO WE FOUND THIS NEW SITE 1", "https://www.youtube.com/watch?v=bN6XP2yRphA&t=285s", false));
CONTAINER.appendChild(generate_button("I Hate You, Don't Moan Again", "i_hate_you_dont_moan_again.mp3", "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)", "https://www.youtube.com/watch?v=E7kacgom97s&t=387s", false));
CONTAINER.appendChild(generate_button("Iceland Smells Like Fart", "iceland_smells_like_fart.mp3", "Anomaly goes to Iceland (PART 1)", "https://www.youtube.com/watch?v=vOsp2ctKgw8&t=48s", false));
CONTAINER.appendChild(generate_button("If Doctor", "if_doctor.mp3", "Halloween with Anomaly", "https://www.youtube.com/watch?v=poB_G0tHRrs&t=39s", false));
CONTAINER.appendChild(generate_button("💦 In My Ass", "in_my_ass.mp3", "TRY NOT TO LAUGH CHALLENGE 4", "https://www.youtube.com/watch?v=mtdhXhvuRoA&t=506s", false));
CONTAINER.appendChild(generate_button("I Want Fuck", "iwantfuck.mp3", "DRAWING WORLD FLAGS FROM MEMORY (GONE WRONG)", "https://www.youtube.com/watch?v=3AnKvz9welM&t=546s", false));
CONTAINER.appendChild(generate_button("Let Me Hit A Bullet", "let_me_hit_a_bullet.mp3", "TWITCH HIGHLIGHTS 30 - OBAMA MOMENT", "https://www.youtube.com/watch?v=JmonvSPRhnY&t=536s", false));
CONTAINER.appendChild(generate_button("Matchmaking In The Zoo", "matchmaking_in_the_zoo.mp3", "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)", "https://www.youtube.com/watch?v=E7kacgom97s&t=441s", false));
CONTAINER.appendChild(generate_button("🍉", "melons.mp3", "FREE TO PLAY \"COUNTER-STRIKE\" GAMES 2", "https://www.youtube.com/watch?v=LiDmJ3UuItM&t=589s", false));
CONTAINER.appendChild(generate_button("MIN TELEFON", "min_telefon.mp3", "PAPANOMALY OPENING FAN MAIL 9", "https://www.youtube.com/watch?v=nZ1W6NBp9iU&t=211s", false));
CONTAINER.appendChild(generate_button("Obama Moment", "obama_moment.mp3", "TWITCH HIGHLIGHTS 30 - OBAMA MOMENT", "https://www.youtube.com/watch?v=JmonvSPRhnY&t=403s", false));
CONTAINER.appendChild(generate_button("Oh, Anomaly", "oh_anomaly.mp3", "ANOMALY GOES TO AFRICA", "https://www.youtube.com/watch?v=FDWrgsmj2wg&t=430s", false));
CONTAINER.appendChild(generate_button("Oolong Tea", "oolong_tea.mp3", "ANOMALY TRIES CHINESE FOOD AND SNACKS (PART 1)", "https://www.youtube.com/watch?v=nYifBSnd9SU&t=615s", false));
CONTAINER.appendChild(generate_button("Papa Drowning in West Indies Porter", "papa_drowning_in_west_indies_porter.mp3", "PAPA TRIES THE MOST DISGUSTING BEERS", "https://www.youtube.com/watch?v=--jSourmyQ0&t=582s", false));
CONTAINER.appendChild(generate_button("Papa Is Depressed", "papa_is_depressed.mp3", "Anomaly Tries Surströmming", "https://www.youtube.com/watch?v=nCCvctadPD8&t=31s", false));
CONTAINER.appendChild(generate_button("PEPPARKAKSHUS", "pepparkakshus.mp3", "ANOMALY BUILDS A GINGERBREAD HOUSE!", "https://www.youtube.com/watch?v=FHzSwe0lceY&t=35s", false));
CONTAINER.appendChild(generate_button("Pull A PhantomL0rd", "pull_a_phantomlord.mp3", "Anomaly Tries Surströmming", "https://www.youtube.com/watch?v=nCCvctadPD8&t=249s", false));
CONTAINER.appendChild(generate_button("Real Life Auto-Tune", "real_life_autotune.mp3", "ALEX MOVING TO MALTA", "https://youtu.be/nU29VZzjGB4?t=186", false));
CONTAINER.appendChild(generate_button("RIP Rapacen's Mother", "rip_rapacens_mother.mp3", "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)", "https://www.youtube.com/watch?v=E7kacgom97s&t=377s", false));
CONTAINER.appendChild(generate_button("Губка Боб Квадратные Штаны", "russian_spongebob.mp3", "TWITCH HIGHLIGHTS 26 - F1 IS IN PRISON", "https://www.youtube.com/watch?v=HqshLvSQWyU&t=588s", false));
CONTAINER.appendChild(generate_button("Ёбаньlй в рот", "russian_swears.mp3", "ANOMALY EXPOSED", "https://www.youtube.com/watch?v=gHumZkhUqT4&t=334s", false));
CONTAINER.appendChild(generate_button("Samz is a Crackhead", "samz_is_a_crackhead.mp3", "MY EDITOR MOVING TO MALTA", "https://www.youtube.com/watch?v=r4ojxa0CugU&t=914s", true));
CONTAINER.appendChild(generate_button("Sauce Vindaloo", "sauce_vindaloo.mp3", "Opening 2 NEW Shining Fates Elite Trainer Boxes!", "https://www.youtube.com/watch?v=tNpNxOpjPMk&t=185s", false));
CONTAINER.appendChild(generate_button("7$", "seven_dollars.mp3", "SO WE FOUND THIS NEW SITE 1", "https://www.youtube.com/watch?v=bN6XP2yRphA&t=243s", false));
CONTAINER.appendChild(generate_button("💩", "shit_hard.mp3", "OPENING FAN MAIL 27 (CSGO PINS)", "https://www.youtube.com/watch?v=dfKZ24DW3e0&t=240s", false));
CONTAINER.appendChild(generate_button("\"Sleeping Bag\"", "sleeping_bag.mp3", "Anomaly Tries Surströmming", "https://www.youtube.com/watch?v=nCCvctadPD8&t=92s", false));
CONTAINER.appendChild(generate_button("LV Belt Smells Good", "smell_good.mp3", "ANOMALY'S COLLECTION OF FAKE CLOUT", "https://www.youtube.com/watch?v=KK0kbCArtFY&t=421s", false));
CONTAINER.appendChild(generate_button("Sound Check", "sound_check.mp3", "THE TRUST FACTOR EXPERIENCE 5", "https://www.youtube.com/watch?v=suIcm3T1b9E", false));
CONTAINER.appendChild(generate_button("Spray in the 🐔", "spray_in_the_cock.mp3", "Anomaly goes to Japan (PART 1)", "https://www.youtube.com/watch?v=GKqWButuYk0&t=233s", false));
CONTAINER.appendChild(generate_button("Thank You For Give Me The Knife", "thank_you_for_give_me_the_knife.mp3", "GIVING PAPANOMALY HIS DREAM GIFT (CHRISTMAS PART 1)", "https://www.youtube.com/watch?v=QEqJo8MYQqk&t=54s", false));
CONTAINER.appendChild(generate_button("That Disgusting Damn Pedophile", "that_disgusting_damn_pedophile.mp3", "Halloween with Papanomaly", "https://www.youtube.com/watch?v=yckbAFrHgdM&t=487s", false));
CONTAINER.appendChild(generate_button("The M4A1-S Has a What?", "the_shell_casing_ejaculation_port_hole_thing.mp3", "GLOVE CASE OPENING (NEW CSGO UPDATE)", "https://www.youtube.com/watch?v=GLyeyiTbQBE&t=348s", false));
CONTAINER.appendChild(generate_button("УКРАИНА", "ukraina.mp3", "HILARIOUS MATCHMAKING HIGHLIGHTS", "https://www.youtube.com/watch?v=Jt4x7s6ieGI&t=436s", false));
CONTAINER.appendChild(generate_button("𝖂𝖍𝖔𝖒𝖘𝖙 𝕰𝖆𝖙 𝕬𝖘𝖘", "whomst_eat_ass.mp3", "Anomaly goes to Malta", "https://www.youtube.com/watch?v=Yfyh9G7zkhY&t=190s", false));
CONTAINER.appendChild(generate_button("Why You Drink More Öl?", "why_you_drink_more_ol.mp3", "Halloween with Anomaly", "https://www.youtube.com/watch?v=poB_G0tHRrs&t=17s", false));
CONTAINER.appendChild(generate_button("You Make A Many Fuck?", "you_make_a_many_fuck.mp3", "ANOMALY GOES TO AFRICA", "https://www.youtube.com/watch?v=FDWrgsmj2wg&t=577s", false));
CONTAINER.appendChild(generate_button("youlikeityouslut", "youlikeityouslut.mp3", "VERY EXPENSIVE BEER TESTING FOR PAPA'S BIRTHDAY (GONE WRONG)", "https://www.youtube.com/watch?v=ZCmH0Vsmr-M&t=214s", false));
