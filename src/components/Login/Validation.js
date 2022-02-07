import React from 'react';
import {useGlobalContext} from '../../Context';
import { useForm } from "react-hook-form";
import {FaEye,FaEyeSlash} from 'react-icons/fa';

function Validation(){
    const {hidePassword,setHidePassword}=useGlobalContext()
    const {register,handleSubmit,watch,formState:{errors}} =useForm()

    const handleOnClick =()=>{
        setHidePassword(!hidePassword)
    }


    return(
        <form id="form-login" onSubmit={handleSubmit((data) =>{
            console.log(data);
        })}>
            <div className={`material-textfield ${errors.email ? 'invalid' :''}`}>
            <input
                placeholder="Email"
                type="text"
                id="email"
                name="email"

                {...register("email",{
                    required:true,
                    pattern:{
                       value: /^\S+@\S+$/i,
                        message: "This field must be email"
                    }
                })}
            />
            <span className="message">
                {   (errors.email?.type === 'required' && 'Please enter this field') || 
                    (errors.email?.type === 'pattern' && errors.email?.message)
                }
            </span>
            </div>
            <div className={`material-textfield ${errors.password ? 'invalid' :''}`}>
            <input
                placeholder="Password"
                type={hidePassword ? 'text' : 'password'}
                id="password"
                name="password"
                {...register("password",{
                    required:true, 
                    minLength:{
                        value:6,
                        message:"Please enter at least 6 characters"
                    }
                })}
            />

            <span className="message">
                { (errors.password?.type === 'required' && 'Please enter this field') || 
                    (errors.password?.type === 'minLength' && errors.password?.message)
                }
            </span>
            <div className="show-password" onClick={handleOnClick}>
                {hidePassword ? <FaEye /> :<FaEyeSlash />}
            </div>
            </div>
            <div className="form-check">
            <label className="main-check">
                <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                />
                <span className="geekmark"></span>
                <label className="form-check-label" for="rememberMe">
                Remember me
                </label>
            </label>
            <a href="">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-success">
            Login
            </button>
      </form>
    )
}

export default Validation