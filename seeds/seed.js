const connection = require('../config/connection');
const { User, Thought } = require('../models')
const userData = require('./userData.json');
const thoughtData = require('./thoughtData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await User.create(userData);
    await Thought.deleteMany({});
    await Thought.create(thoughtData);

    console.table(userData);
    console.table(thoughtData);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
