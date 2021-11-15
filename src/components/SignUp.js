import React, {useState, useEffect} from 'react';
import {validate} from "./validate.js";

const SignUp = () => {
    const [data,setData] =   useState({
        name:"",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted :false,
    })
    const [errors,setErrors] = useState({});

    useEffect(() => {
setErrors(validate(data))
console.log(errors)
    } , [data])

const changeHandler = event =>{
    if(event.target.name==="isAccepted"){
        setData({...data, [event.target.name]:event.target.checked})

    }else{
        setData({...data, [event.target.name]:event.target.value})
    }
    console.log(data)
}
    return (
        <div>
        <form>
            <h2>Sign Up</h2>
            <div>
                <label>name</label>
                <input type="text" name="name" value={data.name} onChange={changeHandler}/>
                {errors.name && <span>{errors.name}</span>} 
            </div>
            <div>
                <label>email</label>
                <input type="text" name="email" value={data.email} onChange={changeHandler}/>
                {errors.email && <span>{errors.name}</span>} 
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="Password" value={data.password} onChange={changeHandler}/>
                {errors.password && <span>{errors.name}</span>} 
            </div>
            <div>
                <label>confirm password</label>
                <input type="text" name="confirm " value={data.confirmPassword}onChange={changeHandler}   />
                {errors.confirmPassword && <span>{errors.name}</span>} 
            </div>
            <div>
                <label>i accept</label>
                <input type="checkbox" name="isAccepted" value={data.isAccepted} />
                {errors.isAccepted && <span>{errors.name}</span>} 
            </div>
            <div>
                <a href="KJFKF" >login</a>
                <button type="submit" >sign up</button>
            
                </div>
        </form>
        </div>
    );
};

export default SignUp;
