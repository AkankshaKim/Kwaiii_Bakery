import express from "express";
import admin from "firebase-admin";

const router = express.Router();
// const auth = admin.auth();


router.route('/create_user').post(async (req, res) => {
    const { email, password } = req.body;

    // try {
    //     const userstatus = await auth.createUser({
    //         email,
    //         password
    //     });

    //     res.status(201).json({ message: "user-succefully created", userstatus: userstatus.uid })
    // }
    // catch
    // {
    //     res.status(400).json({ error: "user creation problem" })
    // }
});

router.route('/login').post((req, res) => {
    res.send("user_loggedin");
});

export default router;