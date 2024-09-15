import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";



const Registers = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {createUser, user} = useAuth();
    console.log(user)
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(email,password)

        try{
            await createUser(email, password);
           navigate("/")
        }catch(err){
            console.log(err)
        }
    };



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                 type="email"
                                 placeholder="email" 
                                 className="input input-bordered" required
                                 onChange={(e)=>setEmail(e.target.value)}
                                  />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                type="password"
                                 placeholder="password" 
                                 className="input input-bordered" required 
                                 onChange={(e)=>setPassword(e.target.value)}
                                 />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registers;