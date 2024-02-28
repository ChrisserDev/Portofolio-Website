const mongoose = require('mongoose')

const ProjectsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    liveapp: {
        type: String,
        required: true
    },
    stack: {
        type: Array,
        required: true
    },  
    description: {
        type: String,
        required: true
    },
    features: {
        type: Array,
        required: true
    }
})

const ProjectsModel = mongoose.model('Projects', ProjectsSchema);
module.exports = ProjectsModel;