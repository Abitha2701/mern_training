const task=require('../models/Task');
exports.createTask=async(req,res)=>{
    try{
        const {title,description,status,user}=req.body;
        const newTask=await task.create({
            title,
            description,
            status,
            user
        });
        res.status(201).json({message:"Task created successfully",newTask});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}
