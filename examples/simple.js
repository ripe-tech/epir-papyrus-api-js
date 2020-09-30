const epirPapyrus = require("..");
const mockOrder = require("../mocks/hermes/bastia.json");

const baseUrl = "http://localhost:3000/";

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
