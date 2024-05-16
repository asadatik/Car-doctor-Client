import { useEffect, useState } from "react";


const UseService = () => {
   
      const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-v1-green.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return services;
   
};

export default UseService;