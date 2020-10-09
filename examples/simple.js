const epirPapyrus = require("..");
const mockOrder = require("./mocks/hermes/bastia.json");

async function run() {
    await epirPapyrus.API.load();
    const api = new epirPapyrus.API();
    try {
        console.info(await api.getReport("hermes-leather", mockOrder));
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }
}

run();
