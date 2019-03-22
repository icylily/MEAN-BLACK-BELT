const Task = require('./models');

module.exports = {

    getAllTasks: (req, res) => {
        Task.find().sort('type')
            .then(data => res.json(data))
            .catch(err => res.json(err));
        // .then(data => console.log(data) || res.json(data))
        // .catch(err => console.log(err) || res.json(err));
    },

    getOneTask: (req, res) => {
        const ID = req.params.id;
        Task.findOne({ _id: ID })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },


    createTask: (req, res) => {
        const DATA = req.body;
        Task.create(DATA)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateTask: (req, res) => {
        const DATA = req.body;
        const ID = req.params.id;
        Task.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, context: 'query' })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteTask: (req, res) => {
        const ID = req.params.id;
        Task.findOneAndDelete({ _id: ID })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}