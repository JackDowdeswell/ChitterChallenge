import express from 'express';

const router = express.Router();

import Peep from '../models/peepSchema.js';

router.route(`/`)
    .post((req, res) => {
        console.log(req.body)
        const peep = new Peep(req.body);

        peep.save(err => {
            if (err) {
                res.send(err);
            }
            else {
                res.send("Peep has been stored");
            }
        });
    })

    .get((req, res) => {
        Peep.find({}, (err, peeps) => {
            if (err) {
                res.send(err);
                next();
            }
            res.send({ peeps });
        })
    })

export { router as getPeeps };