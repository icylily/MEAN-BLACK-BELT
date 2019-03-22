const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.connect('mongodb://localhost/petdb', { useNewUrlParser: true })
    .catch(err => console.log(err));

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pet name must exist'],
        minlength: [3, 'Pet name is at least 3 letters'],
        unique: [true ,'pet name has to be unique']
    },
    type: {
        type: String,
        required: [true, 'Pet type must exist'],
        minlength: [3, 'Pet type is at least 3 letters']
    },
    description: {
        type: String,
        required: [true, 'Pet description must exist'],
        minlength: [3, 'Pet description is at least 3 letters']
    },
    skills: [String],
    likes:{type:Number,default:0}
}, { versionKey: false }, { timestamps: true });

TaskSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Task', TaskSchema);