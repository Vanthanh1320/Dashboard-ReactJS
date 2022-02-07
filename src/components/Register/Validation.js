import React from 'react';
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../../Context';
import { useForm } from "react-hook-form";
import {FaEye,FaEyeSlash} from 'react-icons/fa';

function Validation(){
    const {hidePassword,setHidePassword}=useGlobalContext()
    const {register,handleSubmit,watch,formState:{errors}} =useForm({
      defaultValues:{
        firstname:'',
        lastname:'',
        email:'',
      }
    })

    const handleOnClick =()=>{
        setHidePassword(!hidePassword)
    }

    return(
        <form id="form-login" onSubmit={handleSubmit((data) =>{
            console.log(data);
        })}>
        <div class=" row">
          <div class="col l-6">
            <div class={`material-textfield ${errors.firstname ? 'invalid' :''}`}>
              <input
                placeholder="Firstname"
                type="text"
                id="firstname"
                name="firstname"
                {...register('firstname',{
                  required:true
                })}
              />
              <span class="message">
                {(errors.firstname?.type === 'required' && 'Please enter this field')}
              </span>
            </div>
          </div>
          <div class="col l-6">
            <div class={`material-textfield ${errors.lastname ? 'invalid' :''}`}>
              <input
                placeholder="Lastname"
                type="text"
                id="lastname"
                name="lastname"
                {...register('lastname',{
                  required: true
                })}
              />
              <span class="message">
                {(errors.lastname?.type === 'required' && 'Please enter this field')}
              </span>
            </div>
          </div>
        </div>
        <div class={`material-textfield ${errors.email ? 'invalid' :''}`}>
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
          <span class="message">
          {   (errors.email?.type === 'required' && 'Please enter this field') || 
                    (errors.email?.type === 'pattern' && errors.email?.message)
                }
          </span>
        </div>
        <div class={`material-textfield ${errors.password ? 'invalid' :''}`}>
          <input
            placeholder="Password"
            type="password"
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
          <span class="message">
          { (errors.password?.type === 'required' && 'Please enter this field') || 
                    (errors.password?.type === 'minLength' && errors.password?.message)
                }
          </span>
          <div class="show-password" onClick={handleOnClick}>
            {hidePassword ? <FaEye /> :<FaEyeSlash />}

          </div>
        </div>
          <div className="form-check"></div>
        <button type="submit" class="btn btn-success mt-5">
          Register
        </button>

        <div class="policy">
          By registering, I agree to Minimal
          <Link to="/register"> Terms of Service</Link> and
          <Link to="/register"> Privacy Policy</Link>.
        </div>
      </form>
    )
}

export default Validation