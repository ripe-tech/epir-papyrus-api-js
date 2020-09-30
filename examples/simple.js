const epirPapyrus = require("..");
const mockOrder = require("./mocks/hermes/bastia.json");

const baseUrl = "https://epir-papyrus-now.platforme.com/";

async function run() {
    await epirPapyrus.API.load();
    const api = new epirPapyrus.API({ baseUrl: baseUrl });
    try {
        console.info(await api.getReport("hermes-silk", mockOrder));
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }
}

run();
