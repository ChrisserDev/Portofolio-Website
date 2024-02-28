/* eslint-disable no-undef */
require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const ProjectsModel = require('./projectModel.js')
// const ContactModel = require('./contactModel.js')


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

// Get a single project
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

//Post the contact details from the form.
// app.post('/contactdata', async (req, res) => {
//     try {
//       const newData = new ContactModel(req.body);
//       const savedData = await newData.save();
//       res.status(201).json(savedData);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   });

    
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
    