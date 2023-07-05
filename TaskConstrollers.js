const TaskModel = require("../models/TaskModel")

//Listar Tasks
module.exports.getTasks = async(req, res) => {
    const tasks = await TaskModel.find()
    res.send(tasks)
}

//Adicionar nova Task
module.exports.saveTask = (req, res) => {
    const  {task} =req.body
    TaskModel.create({task})
    .then((data) => {
        console.log("Salvo com sucesso....")
        re.status(201).send(data)
    }).catch((err)=> {
        console.log(err)
        res.send({error: err, msg: "Algo deu errado..."})
    })

}

//Atualizar Task
module.exports.updateTask = (req, res) => {
    const {id} = req.params
    const  {task} =req.body
    TaskModel.findByIdAndUpdate(id, {task})
    .then(() => res.send("Atualizado com sucesso!"))
    .catch((err)=> {
        console.log(err)
        res.send({error: err, msg: "Algo deu errado..."})
    })

}

//Excluir Task
module.exports.deleteTask = (req, res) => {
    const {id} = req.params
    TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Excluído com sucesso!"))
    .catch((err)=> {
        console.log(err)
        res.send({error: err, msg: "Algo deu errado..."})
    })

}