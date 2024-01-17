import React from 'react';
import { MdAddBox } from "react-icons/md";
import Delivery from './DeliveryRow';
import { Link } from 'react-router-dom';

function DeliveriesTable({ deliveries, funcDelete, funcEdit }) {
    
    return (
        <>
        <table id='deliveries'>
            <caption>This table contains all our current deliveries. You can add new ones or edit/delete existing deliveries</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Address</th>
                    <th>Fee</th>
                    <th> </th>
                    <th>
                        <Link to='/create-delivery'>
                            <MdAddBox className='add_delivery_button' />
                        </Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {deliveries.map((delivery, i) =>
                    <Delivery 
                    key={i}
                    delivery={delivery}
                    funcDelete={funcDelete}
                    funcEdit={funcEdit}
                />                
                )}
            </tbody>
        </table>
        </>
    );
}

export default DeliveriesTable;