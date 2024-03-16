// Importing required modules
import mongoose, { Schema } from "mongoose"; // MongoDB ORM
import Jwt from "jsonwebtoken"; // JSON Web Token library
import bcrpt from "bcrypt"; // Library for hashing passwords

// Defining the user schema
const userSchema = new Schema(
    {
        // Username field
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        // Email field
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        // Full name field
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        // Avatar field (cloudinary URL)
        avatar: {
            type: String,
            required: true
        },
        // Cover image field
        coverImage: {
            type: String
        },
        // Watch history field referencing Video model
        watchHistory: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },
        // Password field
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        // Refresh token field
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true // Adding timestamps to track creation and modification dates
    }
);

// Pre-save hook to hash the password before saving to the database
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    // Hashing the password with bcrypt
    this.password = await bcrpt.hash(this.password, 10);
    next();
});

// Method to check if the provided password is correct
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrpt.compare(password, this.password);
};

// Method to generate access token for user
userSchema.methods.generateAccessToken = function () {
    return Jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName 
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    );
};

// Method to generate refresh token for user
userSchema.methods.generateRefreshToken = function () {
    return Jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    );
};

// Exporting the User model
export const User = mongoose.model("User", userSchema);
