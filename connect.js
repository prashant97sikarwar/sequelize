const Sequelize = require('sequelize');

const db = new Sequelize('sampledb1', 'sampleuser1', '@Samplepass1', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
.then(() => console.log('connection worked'))
.catch((err) => console.error(err))
