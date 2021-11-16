import React, {useState, useEffect} from 'react';
import {validate} from "./validate.js";

import {notify} from "./toast"
  import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
   
    const [data,setData] =  useState({
        name:"",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted :false,
    });
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});


    const focusHandler = (event) => {
    setTouched({...touched , [event.target.name] : true})
    }
    useEffect(() => {
setErrors(validate(data))

    } , [data , touched])

const changeHandler = event =>{
    if(event.target.name==="isAccepted"){
        setData({...data, [event.target.name]:event.target.checked})

    }else{
        setData({...data, [event.target.name]:event.target.value})
    }
    console.log(data)
}
const submitHandler = event =>{
    event.preventDefault();
    notify();
    if(!Object.keys(errors).length){
        notify("you have sign successfully")
    }else{
        notify("you are not signed in")
        setTouched({
            name:true,
            email:true,
            password:true,
            confirmPassword:true,
            isAccepted:true
        })
    }
}
    return (
        <div>
        <form onSubmit={submitHandler}>
            <h2>Sign Up</h2>
            <div>
                <label>name</label>
                <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.name && touched.name && <span>{errors.name}</span>} 
            </div>
            <div>
                <label>email</label>
                <input type="text" name="email" value={data.email} onChange={changeHandler}onFocus={focusHandler}/>
                {errors.email  && touched.email&& <span>{errors.email}</span>} 
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.password && touched.password && <span>{errors.password}</span>}  
            </div>
            <div>
                <label>confirm password</label>
                <input type="password" name="confirmpassword " value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}  />
                {errors.confirmPassword  && touched.confirmPassword&& <span>{errors.confirmPassword}</span>} 
            </div>
            <div>
                <label>i accept</label>
                <input type="checkbox" name="isAccepted" value={data.isAccepted} />
                {errors.isAccepted && <span>{errors.isAccepted}</span>} 
            </div>
            <div>
                <a href="KJFKF" >login</a>
                <button type="submit" >sign up</button>
            
                </div>
        </form>
        <ToastContainer />
        </div>
    );
};

export default SignUp;
