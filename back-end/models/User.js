const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            trim: true,
            required: [true, "Name must be required"],
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            required: [true, "Email must be required"],
        },
        password: {
            type: String,
            trim: true,
            required: [true, "Password must be required"],
            minLength: [6, "Password must be at least 6 characters"],
        },
    },
    {
        timestamps: true,
    }
);
// userSchema.pre("save", async (next) => {
//     try {
//         let user = this;
//         if (user.password) {
//             const salt = await bcrypt.genSalt(10);
//             user.password = await bcrypt.hash(user.password, salt);
//             console.log(this);
//             next();
//         } else {
//             let error = new Error(`Occur error in login process!`);
//             next(error);
//         }
//     } catch (err) {
//         return next(err);
//     }
// });
userSchema.pre("save", async function (next) {
    let user = this;
    if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        console.log(this);
        return next();
    }
    let error = new Error(`Occur error in login process`);
    return next(error);
});
const User = mongoose.model("User", userSchema);

module.exports = User;
