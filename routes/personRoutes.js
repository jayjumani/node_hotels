const express = require('express');
const router = express.Router();
const Person = require('./../models/person');


//get method to get the person
router.get('/', async(req,res) =>{
    try{
      const data = await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
      console.log('Error details:',err);
      res.status(500).json({error: 'Internal server Error'});
    }
})


//post route to add a person
router.post('/', async (req,res) =>{
    try{
      const data = req.body //assuming the request body contains the person data
  
    //create a new person document using the mongoose model
    const newPerson = new Person(data);
  
    //save the new person to the database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }
    catch(err){
      console.log('Error details:',err);
      res.status(500).json({error: 'Internal server Error'});
    }
})



router.get('//:workType', async(req,res)=>{
    try{
      const workType = req.params.workType; //extract the worktype from the url parameter
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
      }else{
        res.status(404).json({error: 'Invalid work type'});
      }
    }catch(err){
      console.log('Error details:',err);
      res.status(500).json({error: 'Internal server Error'});
    }
})


router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id; //extract the id from the url parameter
        const updatedPersonData = req.body;//updated data for the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, //return the updated document
            runValidators: true, //run mongoose validation
        })

        if(!response){
            return res.status(404).json({error: 'person not found'})
        }
        
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log('Error details:',err);
      res.status(500).json({error: 'Internal server Error'});
    }
})


router.delete('/:id', async (req,res) => {
    try{
        const peersonId = req.params.id; //extract the person's id from the url parameter

        //assuming you have a person model
        const response = await Person.findByIdAndRemove(personId);
        if (!response){
            return res.status(404).json({error: 'person not found'});
        }
        console.log('data delete');
        res.status(200).json({message: 'person deleted successfully'});
    }catch(err){
        console.log('Error details:',err);
      res.status(500).json({error: 'Internal server Error'});
    }
})

module.exports = router;