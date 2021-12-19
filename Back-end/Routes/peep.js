import express from 'express';

const router = express.Router();

import User from '../models/userSchema.js';

router.route(`/`)
    .post((req, res) => {
        const user = new User(req.body);

        user.save(err => {
            if (err) {
                res.send(err);
            }
            else {
                res.send("Peep has been stored");
            }
        });
    })

    .get((req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                res.send(err);
                next();
            }
            res.send({ users });
        })
    })

export { router as peep };