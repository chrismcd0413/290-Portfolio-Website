import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.MONGODB_CONNECT_STRING, {useNewUrlParser: true});

const database = mongoose.connection;

database.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500: Something happened and we couldn\'t connect to the server. Please try again.' });
    } else  {
        console.log('Would you looky there... We\'re in! Let\'s check out these delivery requests!');
    }
});

const deliverySchema = mongoose.Schema({
    address: { type: String, required: true },
    fee: { type: Number, required: true },
    date: { type: Date, required: true, default: Date.now }
});

const Delivery = mongoose.model('Delivery', deliverySchema);

// Creates a new delivery
const createDelivery = async (address, fee, date) => {
    const delivery = new Delivery({
        address: address,
        fee: fee,
        date: date
    });
    return delivery.save();
}

// Finds deliveries and returns a promise
const retrieveDeliveries = async () => {
    const query = Delivery.find().sort([['date', 1]]);
    return query.exec();
}

// Finds a delivery by delivery id and returns a promise
const retrieveDeliveryById = async (_id) => {
    const query = Delivery.findById({_id: _id});
    return query.exec();
}

// Updates a delivery 
const updateDelivery = async (_id, address, fee, date) => {
    const updatedDelivery = await Delivery.replaceOne({_id: _id}, {
        address: address,
        fee: fee,
        date: date
    });
    return {
        _id: _id,
        address: address,
        fee: fee,
        date: date
    }
}

// Deletes a delivery by id
const deleteDelivery = async(_id) => {
    const deletedDelivery = await Delivery.deleteOne({_id: _id});
    return deletedDelivery.deletedCount;
}

// Export variables to use in our backend functions
export { createDelivery, retrieveDeliveries, retrieveDeliveryById, updateDelivery, deleteDelivery }