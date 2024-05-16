import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";




const Mybookings = () => {

    const { user } = useContext(AuthContext);
     console.log(user)

    const [bookings, setBookings] = useState([]);
        console.log(bookings)
    const url = `https://car-doctor-server-v1-green.vercel.app/booking?email=${user?.email}`;
    useEffect(() => {
        // fetching with Axios
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url]);

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setBookings(data))
    // }, [url]);




// delete operation//
    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://car-doctor-server-v1-green.vercel.app/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }





    return (
        <div>
        <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                        ></BookingRow>)
                    }
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default Mybookings;