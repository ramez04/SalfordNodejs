const User = require("../models/User");
const by = require("bcrypt")


const register = async(req,res)=>{
    const {
        password,email
    } = req.body;
    try {
        const hashedPassword =await  by.hash(password,10);
        
        const user = new User(
            {
                email,password : hashedPassword
            }
        );
        await user.save();
        res.status (201).json({
        message : "Created new user",
        user: {
            id: user._id,
            email: user.email
        }
        });
    } catch (error) {
        res.status(500).json(
            {
                message : "Sorry error 500 fe tezak"
            }
        );
        console.log(error.message);
    }
}
const login =async (req,res)=>{
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare password
        const isMatch = await by.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // If successful
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                image: user.image,
            },
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
    

}
const loginWithId =async (req,res)=>{

    try {
        const user = await User.findById(req.body._id);

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        
            res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                image: user.image,
            },
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
    

}

const update = async (req,res)=>{
    const { name, image ,id ,paymentMethod} = req.body;

    try {
        const user = await User.findById(req.body._id);
        console.log(user);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update fields if provided
        if (name) user.name = name;
        if (image) user.image = image;
        if (paymentMethod) user.paymentMethod = paymentMethod;
        await user.save();

        res.status(200).json({ message: 'User updated successfully',user:user });
    } catch (error) {
        console.error('Update error:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }

};
module.exports = {
    register,login,update,loginWithId
}
