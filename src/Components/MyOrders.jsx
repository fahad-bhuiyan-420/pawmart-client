import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const MyOrders = () => {
    const {user} = use(AuthContext);
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/orders?email=${user.email}`).then(res => {
            console.log(res.data);
            setData(res.data);
        })
    }, [])
    return (
           <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                { }
                            </th>
                            <th>Product Name</th>
                            <th>Buyer Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Date</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    {data.map((item, index) => <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-bold text-xl">{item.product}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='text-xl'>
                                {item.name}
                            </td>
                            <td className='text-xl'>{item.price}</td>
                            <td className='text-xl'>
                                {item.quantity}
                            </td>
                            <td className='text-xl'>{item.address}</td>
                            <td className='text-xl'>{item.date}</td>
                            <td className='text-xl'>{item.phone}</td>
                        </tr>
                    </tbody>)}

                    {/* foot */}

                </table>
            </div>
        </div>
   
    );
};

export default MyOrders;