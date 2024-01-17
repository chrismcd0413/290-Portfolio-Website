import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveriesTable from '../components/DeliveriesTable';

function LogPage({ setDelivery }) {
    const navRedirect = useNavigate();

    const [deliveries, setDeliveries] = useState([]);

    const loadDeliveries = async () => {
        const resp = await fetch('/deliveries');
        const deliveries = await resp.json();
        setDeliveries(deliveries);
    }

    const updateDelivery = async (delivery) => {
        setDelivery(delivery);
        navRedirect('/update-delivery');
    }

    const deleteDelivery = async _id => {
        const resp = await fetch(`/deliveries/${_id}`, { method: 'DELETE' });
        if (resp.status === 204) {
            const fetchUpdatedDeliveries = await fetch('/deliveries');
            const deliveries = await fetchUpdatedDeliveries.json();
            setDeliveries(deliveries);
        } else {
            console.error(`Sorry. I couldn't delete the following delivery: ${_id}. STATUS: ${resp.status}`);
        }
    }

    useEffect(() => {
        loadDeliveries();
    }, []);

    return (
        <>
            <h2>Current Scheduled Deliveries</h2>
            <article>
                <p>
                    This table contains our scheduled deliveries by date. It includes the delivery address and delivery fee. 
                </p>
            <DeliveriesTable
                deliveries={deliveries}
                funcDelete={deleteDelivery}
                funcEdit={updateDelivery}
            />
            </article>
        </>
    );
}

export default LogPage;