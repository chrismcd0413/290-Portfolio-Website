import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateDeliveryPage(){
    const [address, setAddress] = useState('');
    const [fee, setFee] = useState('0');
    const [date, setDate] = useState(Date.now());

    const navRedirect = useNavigate();

    const addNewDelivery = async () => {
        const newDelivery = {address, fee, date};
        const resp = await fetch('/deliveries', {
            method: 'post',
            body: JSON.stringify(newDelivery),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (resp.status === 201){
            alert('Okay. So... We got that delivery added to our system. I\'m going to send you back to the list of deliveries.');
            navRedirect('/deliveries');
        } else {
            alert(`Awkward! Something went wront and I was unable to add the delivery. STATUS: ${resp.status}`);
            navRedirect('/deliveries');
        }
    }
    return(
        <>
        <h2>Add New Delivery</h2>
        <article>
            <p>Use this form to add a new delivery to our system.</p>

            <table>
                <thead>
                    <th>Date</th>
                    <th>Full Address</th>
                    <th>Fee ($)</th>
                    <th></th>
                </thead>
                <tbody id='newtablebody'>
                    <tr>
                        <td><input type='date' value={date} onChange={e => setDate(e.target.value)} /></td>
                        <td><input type='address' value={address} onChange={e => setAddress(e.target.value)} /></td>
                        <td><input type='number' value={fee} onChange={e => setFee(e.target.value)} /></td>
                        <td><button onClick={addNewDelivery}>Save</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    );
}

export default CreateDeliveryPage;