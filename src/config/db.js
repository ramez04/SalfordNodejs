const mangos = require('mongoose');

const configuration = async () => {
    try {
        const connection = await mangos.connect(process.env.MangoConnectionString,)
        console.log("yesss");

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = configuration;