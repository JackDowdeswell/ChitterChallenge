import express from 'express';

const router = express.Router();

import User from '../models/userSchema.js';

router.route(`/`)
    .post((req, res) => {
        console.log(req.body)
        const user = new User(req.body);

        user.save(err => {
            if (err) {
                res.send(err);
            }
            else {
                res.send("Peep has been stored");
            }
        });
    });

export { router as peep };