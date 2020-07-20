const {db, Student} = require('./model')
const task = async () => {
    try {
        await db.sync()

        //Insert a student
        for (let i=0;i<30;i++){
            await Student.create({
                name: (['Tom', 'Dick', 'Harry', 'Ram', 'Shyam','Nancy','sally','neha','Shalini','Thomas'])[parseInt(Math.random)],
                age: 10 + parseInt(Math.random() * 10)
            }) 
        } 
    } catch(g) {
        console.error(g);
    }

}

task();