import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    message: String
});

const Peep = new mongoose.model("Peep", peepSchema);

export default Peep;