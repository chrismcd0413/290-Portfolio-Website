import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateDeliveryPage({delivery}){
    console.log('Delivery:', delivery);
    const [address, setAddress] = useState(delivery.address);
    const [fee, setFee] = useState(delivery.fee);
    const [date, setDate] = useState(delivery.date);

    const navRedirect = useNavigate();

    const updateDelivery = async () => {
        const updatedDelivery = {
            address: address,
            fee: fee,
            date: date
        };
        console.log('updatedDelivery:', updatedDelivery);
        const resp = await fetch(`/deliveries/${delivery._id}`, {
            method: 'put',
            body: JSON.stringify(updatedDelivery),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (resp.status === 200 || resp.status === 204){
            alert('Okay. So... We got that delivery updated in our system. I\'m going to send you back to the list of deliveries.');
            navRedirect('/deliveries');
        } else {
            alert(`Awkward! Something went wront and I was unable to update the delivery. STATUS: ${resp.status}`);
            navRedirect('/deliveries');
        }
    }
    return(
        <>
        <h2>Add New Delivery</h2>
        <article>
            <p>Use this form to add a update a delivery in our system.</p>

            <table>
                <thead>
                    <th>Date</th>
                    <th>Full Address</th>
                    <th>Fee ($)</th>
                    <th></th>
                </thead>
                <tbody id='newtablebody'>
                    <tr>
                        <td><input type='date' value={date.slice(0,10)} onChange={e => setDate(e.target.value)} /></td>
                        <td><input type='address' value={address} onChange={e => setAddress(e.target.value)} /></td>
                        <td><input type='number' value={fee} onChange={e => setFee(e.target.value)} /></td>
                        <td><button onClick={updateDelivery}>Save</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    );
}

export default UpdateDeliveryPage;