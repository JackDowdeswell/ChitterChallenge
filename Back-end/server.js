import express from 'express';
// import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(`/login`, login);
// app.use(`/register`, register);

app.get('/', (req, res) => {
    res.send("Test");
})

// const main = async () => {
//     console.log(`Connecting to DB @ mongodb://localhost:27017/chitter`);
//     await mongoose.connect(`mongodb://localhost:27017/chitter`);
// };

// main().then(() => console.log(`Connected to DB`)).catch(err => console.log(err));

app.listen(4000, () => console.log("Server started"));