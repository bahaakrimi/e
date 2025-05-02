const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
        
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address']
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            match: [
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
                "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character.",
            ],
        },
        role:     { type: String, default: "client" },
        user_image: {
            type: String,
            default: "client.png",
            required: false,
        },
        age : {type : Number},
        count: {
            type: Number,
          
        },
    },
    { timestamps: true } 
);

// Hash password before saving
userSchema.pre("save", async function ( next) {
    try {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
        this.count = (this.count || 0) + 1;
        next();
    } catch (error) {
        next(error);
    }
});

// Log when user is created
userSchema.post("save", function () {
    console.log("User Created & Saved successfully");
});

const user = mongoose.model("User", userSchema);
module.exports = user;