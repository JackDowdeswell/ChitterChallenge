import express from 'express';
import mongoose from 'mongoose';

import { getPeeps } from './Routes/peep.js';
import { signUp } from './Routes/signup.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/peep`, getPeeps);
app.use(`/signup`, signUp);
// app.use(`/register`, register);

// app.post('/', (req, res) => {
//     res.send("Your Peep has been posted");
// })

const main = async () => {
    console.log(`Connecting to DB @ mongodb://localhost:27017/chitter`);
    await mongoose.connect(`mongodb://localhost:27017/chitter`);
};

main().then(() => console.log(`Connected to DB`)).catch(err => console.log(err));

app.listen(4000, () => console.log("Server started"));