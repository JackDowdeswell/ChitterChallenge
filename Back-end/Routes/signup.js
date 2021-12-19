import express from 'express';

const router = express.Router();

import User from '../models/userSchema.js';

router.route(`/`)
    .post((req, res) => {
        const { username } = req.body;

        User.findOne({ username }, (err, user) => {
            if (user) {
                res.send("user already exists");
            }
            else {
                const user = new User(req.body);
                user.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send("Sign up successful!");
                    }
                });
            }
        });
    });

export { router as signUp };