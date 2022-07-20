const Pageres = require('pageres');
const fs = require('fs');
const url = require("url");

const URL = "http://localhost:9000/";

// If the "screenshots" folder does exist, delete it (unless KEEP_SCREENSHOTS is set to true)
if (process.env.KEEP_SCREENSHOTS !== "true") {
    if (fs.existsSync('./screenshots')) {
        fs.rmdirSync('./screenshots', {recursive: true});
    }
}

// Make the "screenshots" folder if it doesn't exist
if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
}

async function make_desktop_screenshots() {
    console.log("Making desktop screenshots...");
    await new Pageres()
        .src(URL, ["1280x720", "1366x768", "1440x900", "1536x864", "1600x900", "1920x1080", "1920x1200", "2560x1440", "2560x1600", "3840x2160"])
        .dest('./screenshots/desktop')
        .run();
    console.log("Done making desktop screenshots.");
}

async function make_tablet_screenshots() {
    console.log("Making tablet screenshots...");
    await new Pageres()
        // Make portrait screenshots
        .src(URL, ["768x1024", "800x1280", "800x1280", "810x1080", "600x1024", "728x912", "601x962"])
        // Make landscape screenshots
        .src(URL, ["1024x768", "1280x800", "1280x800", "1080x810", "1024x600", "912x728", "962x601"])
        .dest('./screenshots/tablet')
        .run();
    console.log("Done making tablet screenshots.");
}

async function make_mobile_screenshots() {
    console.log("Making mobile screenshots...");
    await new Pageres()
        // Make portrait screenshots
        .src(URL, ["360x800", "414x896", "360x640", "390x844", "412x915", "360x780"])
        // Make landscape screenshots
        .src(URL, ["800x360", "896x414", "640x360", "844x390", "915x412", "780x360"])
        .dest('./screenshots/mobile')
        .run();
    console.log("Done making mobile screenshots.");
}


async function main() {
    await make_desktop_screenshots();
    await make_tablet_screenshots();
    await make_mobile_screenshots();
}

(async () => {
    await main();
})();