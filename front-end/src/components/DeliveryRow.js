import React from "react";
import {MdDelete, MdModeEdit} from "react-icons/md";

function Delivery({ delivery, funcDelete, funcEdit }) {
    console.log('1st delivery:', delivery);
    return (
            <tr>
                <td>{delivery.date.slice(0, 10)}</td>
                <td>{delivery.address}</td>
                <td>{delivery.fee.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'symbol',
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2})}</td>
                <td className="options_data_left"><MdModeEdit onClick={() => funcEdit(delivery)} /></td>
                <td className="options_data_right"><MdDelete onClick={() => funcDelete(delivery._id)}/></td>
            </tr>
    );
}

export default Delivery;