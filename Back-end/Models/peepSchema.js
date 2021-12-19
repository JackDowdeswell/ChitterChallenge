import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    username: String,
    message: String,
    dateCreated: Date
});

const Peep = new mongoose.model("Peep", peepSchema);

export default Peep;