const express = require('express')
const Student = require('../models/student')
const router = new express.Router()

router.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE,OPTIONS"
    );
    next();
})

router.post('/createstudent', async (req,res)=>{
    const student = new Student(req.body)

    try{
        await student.save()
        res.status(201).send(student)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/getstudent',async (req,res)=>{
    try{
        const student = await Student.find({})
        res.send(student)
    }catch(e){
        res.status(500).send(e)
    }
})
router.delete('/deletestudent',async (req,res)=>{
    try{
        const user = await user.findByIdAndDelete(req.params.id)
        if(!user){
           return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})
router.get('/getstudentbyid',async (req,res)=>{
    const _id = req.params.id
    try{
        const student = await Student.findById(_id)
        if(!student){
            return res.status(404).send()
        }
        res.send(student)  
    }catch(e){
        res.status(500).send()
    }
})
router.patch('/student/:id', async(req,res)=>{
    
})

module.exports = router