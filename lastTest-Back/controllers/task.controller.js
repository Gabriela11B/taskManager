const task = require('../models/taskModel')


const taskControl = {}







taskControl.generateTask = async (req, res) =>{
    console.log(req.body)
    const {titleTask} = req.body;
  const task1 = new task({titleTask});        
    
   task1.save();
    res.json({status: "La tarea fue creada"})
    console.log(res.json)
}


taskControl.getAllTask = async (req, res) =>{
    try{
        const allTask = await allTask.find()
        res.json(allTask)
    }catch{
        return res.status(400).json({
            ok: false,
            message: 'Tarea Agregada previamente'
        })
    }
}


taskControl.getTask = async (req, res) =>{
    const task = new task(req.body)

    res.json(task)
}




taskControl.deleteTask = async (req, res) =>{
    
}
taskControl.updateTask = async (req, res) =>{
    const tasks = new task(req.body)
}

module.exports = taskControl