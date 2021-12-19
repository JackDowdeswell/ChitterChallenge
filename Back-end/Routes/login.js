import express from 'express';

const router = express.Router();

import User from '../models/userSchema.js';

router.route(`/`)
    .post((req, res) => {
        const { username, password } = req.body;

        User.findOne({ username }, (err, user) => {
            if (user && password === user.password) {
                res.send({ message: `Login was successful`, user });
            }
            else {
                res.send({ message: `Details are incorrect` });
            }
        });
    });

export { router as login };