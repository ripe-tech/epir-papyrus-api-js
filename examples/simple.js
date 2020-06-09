const epirPapyrus = require("..");

async function run() {
    await epirPapyrus.API.load();
    const api = new epirPapyrus.API();
    try {
        console.info(await api.info());
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }
}

run();
