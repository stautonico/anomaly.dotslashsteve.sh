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
    }
}

# Re-organize the dict into alphabetical order by key
AUDIO_FILES = {k: v for k, v in sorted(AUDIO_FILES.items(), key=lambda item: item[0])}


def build():
#     # Remove the existing build directory if it exists
#     if os.path.exists("dist"):
#         shutil.rmtree("dist")
#     os.mkdir("dist")
#
#     # Copy all the static assets into the build directory
#     shutil.copytree("audio", "dist/audio")
#     shutil.copytree("css", "dist/css")
#     shutil.copytree("img", "dist/img")
#     shutil.copytree("js", "dist/js")
#     shutil.copy("index.html", "dist/index.html")
#
#     # Open up the js/index.js and apply the button scripts
#     with open("dist/js/index.js", "a") as f:
    for audio_file, data in AUDIO_FILES.items():
        print(f"""CONTAINER.appendChild(generate_button("{data['title']}", "{audio_file}", "{data['youtube_title']}", "{data['youtube_url']}"));\n""")
#         f.write(
#             f"""CONTAINER.appendChild(generate_button("{data['title']}", "{audio_file}", "{data['youtube_title']}", "{data['youtube_url']}"));\n""")


if __name__ == '__main__':
    build()
