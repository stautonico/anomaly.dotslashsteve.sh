import os
import shutil

AUDIO_FILES = {
    "because_hes_hung_over.mp3": {
        "title": "Because he's hung over",
        "youtube_title": "Halloween with Anomaly",
        "youtube_url": "https://www.youtube.com/watch?v=poB_G0tHRrs&t=10s"
    },
    "breakfast.mp3": {
        "title": "Papa's Breakfast",
        "youtube_title": "CANADIAN BEER REVIEW (EH?)",
        "youtube_url": "https://www.youtube.com/watch?v=2ksXESdzt6I&t=98s"
    },
    "gloves.mp3": {
        "title": "F1's Gloves",
        "youtube_title": "GLOVE CASE OPENING (NEW CSGO UPDATE)",
        "youtube_url": "https://www.youtube.com/watch?v=GLyeyiTbQBE&t=121s"
    },
    "if_doctor.mp3": {
        "title": "If Doctor",
        "youtube_title": "Halloween with Anomaly",
        "youtube_url": "https://www.youtube.com/watch?v=poB_G0tHRrs&t=39s"
    },
    "papa_drowning_in_west_indies_porter.mp3": {
        "title": "Papa Drowning in West Indies Porter",
        "youtube_title": "PAPA TRIES THE MOST DISGUSTING BEERS",
        "youtube_url": "https://www.youtube.com/watch?v=--jSourmyQ0&t=582s"
    },
    "the_shell_casing_ejaculation_port_hole_thing.mp3": {
        "title": "The M4A1-S Has a What?",
        "youtube_title": "GLOVE CASE OPENING (NEW CSGO UPDATE)",
        "youtube_url": "https://www.youtube.com/watch?v=GLyeyiTbQBE&t=348s"
    },
    "why_you_drink_more_ol.mp3": {
        "title": "Why You Drink More Öl?",
        "youtube_title": "Halloween with Anomaly",
        "youtube_url": "https://www.youtube.com/watch?v=poB_G0tHRrs&t=17s"
    },
    "you_make_a_many_fuck.mp3": {
        "title": "You Make A Many Fuck?",
        "youtube_title": "ANOMALY GOES TO AFRICA",
        "youtube_url": "https://www.youtube.com/watch?v=FDWrgsmj2wg&t=577s"
    },
    "youlikeityouslut.mp3": {
        "title": "youlikeityouslut",
        "youtube_title": "VERY EXPENSIVE BEER TESTING FOR PAPA'S BIRTHDAY (GONE WRONG)",
        "youtube_url": "https://www.youtube.com/watch?v=ZCmH0Vsmr-M&t=214s"
    },
    "ukraina.mp3": {
        "title": "УКРАИНА",
        "youtube_title": "HILARIOUS MATCHMAKING HIGHLIGHTS",
        "youtube_url": "https://www.youtube.com/watch?v=Jt4x7s6ieGI&t=436s"
    },
    "russian_swears.mp3": {
        "title": "Ёбаньlй в рот",
        "youtube_title": "ANOMALY EXPOSED",
        "youtube_url": "https://www.youtube.com/watch?v=gHumZkhUqT4&t=334s"
    },
    "smell_good.mp3": {
        "title": "LV Belt Smells Good",
        "youtube_title": "ANOMALY'S COLLECTION OF FAKE CLOUT",
        "youtube_url": "https://www.youtube.com/watch?v=KK0kbCArtFY&t=421s"
    },
    "der_anal_zerstorer.mp3": {
        "title": "Der Anal Zerstörer",
        "youtube_title": "SO WE FOUND THIS NEW SITE 1",
        "youtube_url": "https://www.youtube.com/watch?v=bN6XP2yRphA&t=199s"
    },
    "i_am_retarded_addict_please_help.mp3": {
        "title": "I Am Retarded Addict Please Help",
        "youtube_title": "SO WE FOUND THIS NEW SITE 1",
        "youtube_url": "https://www.youtube.com/watch?v=bN6XP2yRphA&t=285s"
    },
    "callmecarson.mp3": {
        "title": "CallMeCarson",
        "youtube_title": "SO WE FOUND THIS NEW SITE 1",
        "youtube_url": "https://www.youtube.com/watch?v=bN6XP2yRphA&t=454s"
    },
    "hitman_kill_my_son.mp3": {
        "title": "Hitman (kill my son)",
        "youtube_title": "WE ALMOST GOT SHOT BY THE MALTA MILITARY (ALMOST DIED XD)",
        "youtube_url": "https://www.youtube.com/watch?v=_jqkuWTRhRg&t=354s"
    },
    "fucking_farmer.mp3": {
        "title": "ебанить фармер блять",
        "youtube_title": "LAN PARTY WITH ANOMALY AND FRIENDS (PART 1)",
        "youtube_url": "https://www.youtube.com/watch?v=cpGwQTAZpBE&t=134s"
    },
    "oh_anomaly.mp3": {
        "title": "Oh, Anomaly",
        "youtube_title": "ANOMALY GOES TO AFRICA",
        "youtube_url": "https://www.youtube.com/watch?v=FDWrgsmj2wg&t=430s"
    },
    "gotta_catch_em_all.mp3": {
        "title": "Gotta Catch 'em All!",
        "youtube_title": "Pokemon GO with Anomaly (Highlights)",
        "youtube_url": "https://www.youtube.com/watch?v=TKU-daPcu18&t=81s"
    },
    "obama_moment.mp3": {
        "title": "Obama Moment",
        "youtube_title": "TWITCH HIGHLIGHTS 30 - OBAMA MOMENT",
        "youtube_url": "https://www.youtube.com/watch?v=JmonvSPRhnY&t=403s"
    },
    "let_me_hit_a_bullet.mp3": {
        "title": "Let Me Hit A Bullet",
        "youtube_title": "TWITCH HIGHLIGHTS 30 - OBAMA MOMENT",
        "youtube_url": "https://www.youtube.com/watch?v=JmonvSPRhnY&t=536s"
    },
    "that_disgusting_damn_pedophile.mp3": {
        "title": "That Disgusting Damn Pedophile",
        "youtube_title": "Halloween with Papanomaly",
        "youtube_url": "https://www.youtube.com/watch?v=yckbAFrHgdM&t=487s"
    },
    "rip_rapacens_mother.mp3": {
        "title": "RIP Rapacen's Mother",
        "youtube_title": "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)",
        "youtube_url": "https://www.youtube.com/watch?v=E7kacgom97s&t=377s"
    },
    "i_hate_you_dont_moan_again.mp3": {
        "title": "I Hate You, Don't Moan Again",
        "youtube_title": "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)",
        "youtube_url": "https://www.youtube.com/watch?v=E7kacgom97s&t=387s"
    },
    "matchmaking_in_the_zoo.mp3": {
        "title": "Matchmaking In The Zoo",
        "youtube_title": "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)",
        "youtube_url": "https://www.youtube.com/watch?v=E7kacgom97s&t=441s"
    },
    "carlson_drowns.mp3": {
        "title": "Carlson Drowns",
        "youtube_title": "TWITCH HIGHLIGHTS 25 - 6480° TRICKSHOT (18 SPINS)",
        "youtube_url": "https://www.youtube.com/watch?v=E7kacgom97s&t=417s"
    },
    "papa_is_depressed.mp3": {
        "title": "Papa Is Depressed",
        "youtube_title": "Anomaly Tries Surströmming",
        "youtube_url": "https://www.youtube.com/watch?v=nCCvctadPD8&t=31s"
    },
    "sleeping_bag.mp3": {
        "title": "\\\"Sleeping Bag\\\"",
        "youtube_title": "Anomaly Tries Surströmming",
        "youtube_url": "https://www.youtube.com/watch?v=nCCvctadPD8&t=92s"
    },
    "dont_burn_down_the_house.mp3": {
        "title": "Don't Burn Down The House",
        "youtube_title": "Anomaly Tries Surströmming",
        "youtube_url": "https://www.youtube.com/watch?v=nCCvctadPD8&t=199s"
    },
    "OMFG.mp3": {
        "title": "OMFG",
        "youtube_title": "Anomaly Tries Surströmming",
        "youtube_url": "https://www.youtube.com/watch?v=nCCvctadPD8&t=222s"
    },
    "pull_a_phantomlord.mp3": {
        "title": "Pull A PhantomL0rd",
        "youtube_title": "Anomaly Tries Surströmming",
        "youtube_url": "https://www.youtube.com/watch?v=nCCvctadPD8&t=249s"
    },
    "melons.mp3": {
        "title": "🍉",
        "youtube_title": "FREE TO PLAY \\\"COUNTER-STRIKE\\\" GAMES 2",
        "youtube_url": "https://www.youtube.com/watch?v=LiDmJ3UuItM&t=589s"
    },
    "face_reveal_laugh.mp3": {
        "title": "Face Reveal Laughs",
        "youtube_title": "24-Hour 4000 Case Opening Stream (VOD no longer available)",
        "youtube_url": "#"
    },
    "hotdog_ad.mp3": {
        "title": "Se c'è AiA, c'è gioia",
        "youtube_title": "GOOGLING MYSELF (FACE EXPOSED BY FAN?)",
        "youtube_url": "https://www.youtube.com/watch?v=0597gJaYlP4&t=419s"
    },
    "sauce_vindaloo.mp3": {
        "title": "Sauce Vindaloo",
        "youtube_title": "Opening 2 NEW Shining Fates Elite Trainer Boxes!",
        "youtube_url": "https://www.youtube.com/watch?v=tNpNxOpjPMk&t=185s"
    },
    "dr_anomaly.mp3": {
        "title": "Dr. Anomaly",
        "youtube_title": "UNBOXING 500 OPERATION BROKEN FANG CASES (INSANE GLOVES)",
        "youtube_url": "https://www.youtube.com/watch?v=PV8lre2SJqg&t=154s"
    },
    "deez_nuts.mp3": {
        "title": "Deez Nuts",
        "youtube_title": "ANOMALY AND PAPA TRIES DOG FOOD (PIG INTESTINES)",
        "youtube_url": "https://www.youtube.com/watch?v=W97CkZwagwE&t=371s"
    },
    "anomalys_huge_package.mp3": {
        "title": "Anomaly's Huge Package",
        "youtube_title": "OPENING A $1500 POKEMON MYSTERY BOX",
        "youtube_url": "https://www.youtube.com/watch?v=XKfKM4Uq7W0&t=3s"
    },
    "sound_check.mp3": {
        "title": "Sound Check",
        "youtube_title": "THE TRUST FACTOR EXPERIENCE 5",
        "youtube_url": "https://www.youtube.com/watch?v=suIcm3T1b9E"
    },
    "cringe_apple_user.mp3": {
        "title": "🚨 Cringe Apple User 🚨",
        "youtube_title": "ANOMALY AND PAPA WOULD YOU RATHER..?",
        "youtube_url": "https://www.youtube.com/watch?v=wUohb2oRu4U&t=133s"
    },
    "shit_hard.mp3": {
        "title": "💩",
        "youtube_title": "OPENING FAN MAIL 27 (CSGO PINS)",
        "youtube_url": "https://www.youtube.com/watch?v=dfKZ24DW3e0&t=240s"
    },
    "iwantfuck.mp3": {
        "title": "I Want Fuck",
        "youtube_title": "DRAWING WORLD FLAGS FROM MEMORY (GONE WRONG)",
        "youtube_url": "https://www.youtube.com/watch?v=3AnKvz9welM&t=546s"
    },
    "SHUT_UP.mp3": {
        "title": "HÅLL KÄFTEN",
        "youtube_title": "TWITCH HIGHLIGHTS 31 - GIGACHAD CSGO MOMENTS",
        "youtube_url": "https://www.youtube.com/watch?v=-_UarirZstg&t=262s"
    },
    "seven_dollars.mp3": {
        "title": "7$",
        "youtube_title": "SO WE FOUND THIS NEW SITE 1",
        "youtube_url": "https://www.youtube.com/watch?v=bN6XP2yRphA&t=243s"
    },
    "anomaly_eats_cake.mp3": {
        "title": "Anomaly Eats 🍑",
        "youtube_title": "ANOMALY AND PAPANOMALY Q&A",
        "youtube_url": "https://www.youtube.com/watch?v=mK3aN03ABe4&t=481s"
    },
    "anomaly_drinks_alot.mp3": {
        "title": "Anomaly Drinks Alot",
        "youtube_title": "ANOMALY AND PAPANOMALY Q&A",
        "youtube_url": "https://www.youtube.com/watch?v=mK3aN03ABe4&t=591s"
    },
    "anomaly_eats_shit.mp3": {
        "title": "Anomaly Eats 💩",
        "youtube_title": "MAKING THE BIGGEST BIRTHDAY CAKE EVER (90.000 CALORIES)",
        "youtube_url": "https://www.youtube.com/watch?v=KisAeJsus4s&t=252s"
    },
    "whomst_eat_ass.mp3": {
        "title": "𝖂𝖍𝖔𝖒𝖘𝖙 𝕰𝖆𝖙 𝕬𝖘𝖘",
        "youtube_title": "Anomaly goes to Malta",
        "youtube_url": "https://www.youtube.com/watch?v=Yfyh9G7zkhY&t=190s"
    },
    "f1s_favorite_bts_member.mp3": {
        "title": "F1's Favorite BTS Member",
        "youtube_title": "TWITCH HIGHLIGHTS 27 - PLAYING WITH A MICROWAVE",
        "youtube_url": "https://www.youtube.com/watch?v=O22t8hmd2Iw&t=98s"
    },
    "iceland_smells_like_fart.mp3": {
        "title": "Iceland Smells Like Fart",
        "youtube_title": "Anomaly goes to Iceland (PART 1)",
        "youtube_url": "https://www.youtube.com/watch?v=vOsp2ctKgw8&t=48s"
    },
    "real_life_autotune.mp3": {
        "title": "Real Life Auto-Tune",
        "youtube_title": "ALEX MOVING TO MALTA",
        "youtube_url": "https://youtu.be/nU29VZzjGB4?t=186"
    },
    "garmoshka_blyat.mp3": {
        "title": "гармошка блять",
        "youtube_title": "RUSSIAN MATCHMAKING EXPERIENCE (RUSSIA SERVERS)",
        "youtube_url": "https://www.youtube.com/watch?v=vOS-X3COxzY&t=297s"
    },
    "can_i_put_fuck_on_you.mp3": {
        "title": "Can I Put Fuck On You?",
        "youtube_title": "RUSSIAN MATCHMAKING EXPERIENCE (RUSSIA SERVERS)",
        "youtube_url": "https://www.youtube.com/watch?v=vOS-X3COxzY&t=333s"
    },
    "min_telefon.mp3": {
        "title": "MIN TELEFON",
        "youtube_title": "PAPANOMALY OPENING FAN MAIL 9",
        "youtube_url": "https://www.youtube.com/watch?v=nZ1W6NBp9iU&t=211s"
    },
    "anomaly_gfys.mp3": {
        "title": "OMG Anomaly GFYS",
        "youtube_title": "THE TRUST FACTOR EXPERIENCE 5",
        "youtube_url": "https://www.youtube.com/watch?v=suIcm3T1b9E&t=699s"
    },
    "oolong_tea.mp3": {
        "title": "Oolong Tea",
        "youtube_title": "ANOMALY TRIES CHINESE FOOD AND SNACKS (PART 1)",
        "youtube_url": "https://www.youtube.com/watch?v=nYifBSnd9SU&t=615s"
    },
    "in_my_ass.mp3": {
        "title": "💦 In My Ass",
        "youtube_title": "TRY NOT TO LAUGH CHALLENGE 4",
        "youtube_url": "https://www.youtube.com/watch?v=mtdhXhvuRoA&t=506s"
    },
    "pepparkakshus.mp3": {
        "title": "PEPPARKAKSHUS",
        "youtube_title": "ANOMALY BUILDS A GINGERBREAD HOUSE!",
        "youtube_url": "https://www.youtube.com/watch?v=FHzSwe0lceY&t=35s"
    },
    "fat_stupid_virgin.mp3": {
        "title": "Fat Stupid Virgin",
        "youtube_title": "ANOMALY BUILDS A GINGERBREAD HOUSE!",
        "youtube_url": "https://www.youtube.com/watch?v=FHzSwe0lceY&t=238s"
    },
    "thank_you_for_give_me_the_knife.mp3": {
        "title": "Thank You For Give Me The Knife",
        "youtube_title": "GIVING PAPANOMALY HIS DREAM GIFT (CHRISTMAS PART 1)",
        "youtube_url": "https://www.youtube.com/watch?v=QEqJo8MYQqk&t=54s"
    },
    "spray_in_the_cock.mp3": {
        "title": "Spray in the 🐔",
        "youtube_title": "Anomaly goes to Japan (PART 1)",
        "youtube_url": "https://www.youtube.com/watch?v=GKqWButuYk0&t=233s"
    },
    "german_feet.mp3": {
        "title": "Fußgewas Ja",
        "youtube_title": "OUR WORST VIDEO EVER (BEER REVIEW 3)",
        "youtube_url": "https://www.youtube.com/watch?v=N9_fgO4H0Hs&t=48s"
    },
    "how_many_points.mp3": {
        "title": "How Many Points?",
        "youtube_title": "TRYING HIPSTER BEER (GONE WRONG)",
        "youtube_url": "https://www.youtube.com/watch?v=ksR7kNDRQ2Q&t=289s"
    },
    "russian_spongebob.mp3": {
        "title": "Губка Боб Квадратные Штаны",
        "youtube_title": "TWITCH HIGHLIGHTS 26 - F1 IS IN PRISON",
        "youtube_url": "https://www.youtube.com/watch?v=HqshLvSQWyU&t=588s"
    },
    "samz_is_a_crackhead.mp3": {
        "title": "Samz is a Crackhead",
        "youtube_title": "MY EDITOR MOVING TO MALTA",
        "youtube_url": "https://www.youtube.com/watch?v=r4ojxa0CugU&t=914s"
    },
    "check_your_garash.mp3": {
        "title": "Check Your Garash",
        "youtube_title": "Anomaly goes to Åland (Finland)",
        "youtube_url": "https://www.youtube.com/watch?v=ttkq-7fleo0&t=559s"
    },
    "boat_garash.mp3": {
        "title": "Boat Garash",
        "youtube_title": "Anomaly goes to Åland (Finland)",
        "youtube_url": "https://www.youtube.com/watch?v=ttkq-7fleo0&t=574s"
    },
    "corporal_is_good_wan.mp3": {
        "title": "Corporal is Good Wan",
        "youtube_title": "CS:GO CASE OPENING HIGHLIGHT 1",
        "youtube_url": "https://www.youtube.com/watch?v=hoRUpMIk0Qw&t=93s"
    },
    "milk_cartridge.mp3": {
        "title": "Milk Cartridge",
        "youtube_title": "RATING DISGUSTING VIEWER SETUPS WITH PAPA",
        "youtube_url": "https://youtu.be/bXAvy5rBlDI?t=51"
    }
}

# The last N ones will be given the "NEW" tag
NEW_COUNT = 1

new_elements = [key for key in list(reversed(list(AUDIO_FILES)))[0:NEW_COUNT]]

# Re-organize the dict into alphabetical order by key
AUDIO_FILES = {k: v for k, v in sorted(AUDIO_FILES.items(), key=lambda item: item[0])}


# Add the new tag to each of the elements
for ele in new_elements:
    AUDIO_FILES[ele]["new"] = "true" # This needs to be a string because javascript treats it as lowercase

def build():
    # Remove the existing build directory if it exists
    if os.path.exists("dist"):
        shutil.rmtree("dist")
    os.mkdir("dist")

    # Copy all the static assets into the build directory
    shutil.copytree("audio", "dist/audio")
    shutil.copytree("css", "dist/css")
    shutil.copytree("img", "dist/img")
    shutil.copytree("js", "dist/js")
    shutil.copytree("fonts", "dist/fonts")
    shutil.copytree(".well-known", "dist/.well-known")
    shutil.copy("browserconfig.xml", "dist/")
    shutil.copy("manifest.json", "dist/")
    shutil.copy("robots.txt", "dist/robots.txt")
    shutil.copy("sitemap.xml", "dist/sitemap.xml")

    shutil.copy("index.html", "dist/index.html")

    # Open up the js/index.js and apply the button scripts
    with open("dist/js/index.js", "a") as f:
        for audio_file, data in AUDIO_FILES.items():
            f.write(
                f"""CONTAINER.appendChild(generate_button("{data['title']}", "{audio_file}", "{data['youtube_title']}", "{data['youtube_url']}", {data.get('new', 'false')}));\n""")


if __name__ == '__main__':
    build()
