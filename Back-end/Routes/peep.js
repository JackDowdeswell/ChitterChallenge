import express from 'express';

const router = express.Router();

import Peep from '../models/peepSchema.js';

router.route(`/`)
    .post((req, res) => {
        const peep = new Peep(req.body);

        peep.save(err => {
            if (err) {
                res.send(err);
            }
            else {
                res.send("Peep has been stored");
            }
        });
    });

export { router as peep };