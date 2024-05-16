
import { Link,useLocation, useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';




const Login = () => {
    const { signIn } = useContext(AuthContext);
    const Location = useLocation();
        const navigate = useNavigate()
  console.log(Location)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        signIn(email, password)
            .then(result => {
                const LoggedInUser = result.user;
                console.log(LoggedInUser);
                
                   const user ={email}
              axios.post('https://car-doctor-server-v1-green.vercel.app/jwt',user,
              {withCredentials:true})
              .then( res => {
                 console.log(res.data)
              if(res.data.success){
                navigate(Location?.state? Location.state : '/' )
            }
            
             } )
                   
            })
            .catch(error => console.log(error));
    }





     
    return (
        <div className="hero"  style={{backgroundImage: 'url(https://i.ibb.co/7Nntrwf/user-typing-login-and-password-cyber-security-concept-1.jpg)'}}  > 
            <div className="hero-content  flex-col lg:flex-row">
                <div className='w-3/6'>
                    <img src={`https://i.ibb.co/7Nntrwf/user-typing-login-and-password-cyber-security-concept-1.jpg`} alt="" />
                </div>
                <div className="card  max-w-sm  w-3/6  bg-slate-500">  
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form  onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;