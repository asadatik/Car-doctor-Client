import { useContext } from 'react';

import {Navigate,useLocation} from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';

const PrivetRoute = ({children}) => {
    const location =  useLocation();
    console.log(location.pathname)
        const {user, loading} = useContext(AuthContext);
              
        if(loading) {
            return <progress className="progress w-56"></progress>
        }
    
        if(user?.email){
            return children;
        }
    
        return <Navigate  state={location.pathname}   to="/login"></Navigate>;
    };
    




export default PrivetRoute;
