const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) {
        res.status(400).send({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user=await User.create({
        name,
        email,
        password:hashedPassword

    });
    res.status(201).json({message:"User created Successfully",user});

}
exports.login=async(req,res)=>{
    try{
    const{email,password}=req.body;
    const existingUser=await User.findOne({email});
    if(!existingUser){
        return res.status(400).send({message:"Email does not exist"});
    }
    const isPasswordCorrect=await bcrypt.compare(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).send({"message":"Invalid or incorrect password"});
    }
    const token=jwt.sign(
    {userId:existingUser._id},
    process.env.JWT_SECRET,
    {expiresIn:"1h"}
);
    return res.status(200).json({message:"Login successful",token});
   

}


catch(err){
    return res.status(500).json({message:"Internal server error"});
}
}