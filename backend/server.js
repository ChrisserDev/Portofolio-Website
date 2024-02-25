require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const ProjectsModel = require('./projectModel.js')


//Using cors
app.use(cors())

// Body parsing middleware
app.use(express.json());


//Get all projects
app.get('/allprojects', async (req, res) => {
    try {
        const projects = await ProjectsModel.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a single vehicle
app.get('/allprojects/:id', async (req, res) => {
    const { id } = req.params
        
    if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(404).json({error: "Invalid id"})
        }
        const project = await ProjectsModel.findById(id)
    
    if(!project){
            return res.status(404).json({error: 'No such project'})
        }
            res.status(200).json(project)
    })
    
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after MongoDB connection is established
        app.listen(process.env.PORT, () => {
            console.log('App listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        
});
    