import express from 'express';
import 'dotenv/config';
import * as deliveries from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.post('/deliveries', (req, res) => {
    deliveries.createDelivery(
        req.body.address,
        req.body.fee,
        req.body.date
    )
    .then(delivery => {
        res.status(201).json(delivery);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({error: 'Sorry bud. We couldn\'t create the delivery. Check everything and please try again.'});
    });

});
app.get('/deliveries', (req, res) => {
    deliveries.retrieveDeliveries()
        .then(delivery => {
            if (delivery != null) {
                res.json(delivery);
            } else {
                res.status(404).json({ error: 'I couldn\'t find any deliveries. Try adjusting your parameters and trying again.'})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Well... This is embarassing! Something happened and I wasn\'t able to retrieve the deliveries. Please try again.' })
        });
});
app.put('/deliveries/:_id', (req, res) => {
    deliveries.updateDelivery(req.params._id, req.body.address, req.body.fee, req.body.date)
        .then(delivery => {
            res.json(delivery);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'I tried and I failed. Sorry, not sure what happened but I wasn\'t able to update the delivery. Check everything and try again.' })
        });
});
app.delete('/deliveries/:_id', (req, res) => {
    deliveries.deleteDelivery(req.params._id)
        .then(deleteCount => {
            if (deleteCount == 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Unable to find the document you wanted to delete. It no longer exists.'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ error: 'Whoops! Not sure what happened but we were unable to delete the requested delivery. Check everything and please try again.'});
        });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});