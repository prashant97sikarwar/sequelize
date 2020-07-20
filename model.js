const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('sampledb1', 'sampleuser1', '@Samplepass1', {
    host: 'localhost',
    dialect: 'mysql'
});

const Student = db.define('student', {
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    age: {
        types: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue:-1
    },
    })

    module.exports = {
        db, Student
    }
    
