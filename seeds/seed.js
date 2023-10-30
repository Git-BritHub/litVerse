const connection = require('../config/connection');
const { User } = require('../models')
const userData = require('./userData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await User.create(userData);

    console.table(userData);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
