const {db, Student} = require('./model')

const task = async () => {
try {
    await db.sync()

    const Student = await Student.findAll()
    students.forEach(s => console.log(`
     name: ${s.dataValues.name} \t\t age: ${s.dataValues.age}`))
    

} catch(g) {
    console.log(g);
}
}