import React, {useState, useEffect} from 'react';
import {validate} from "./validate.js";
import styles from './SignUp.module.css';

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
        notify("you have sign up successfully")
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
        <div className={styles.container}>
        <form onSubmit={submitHandler} className={styles.formContainer}>
            <h2 className={styles.header}>Sign Up</h2>
            <div className={styles.formField}>
                <label >name</label>
                <input className={(errors.name && touched.name ) ? styles.uncompleted : styles.formInput }type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.name && touched.name && <span>{errors.name}</span>} 
            </div>
            <div className={styles.formField}>
                <label>email</label>
                <input  className={(errors.email && touched.email ) ? styles.uncompleted : styles.formInput }
                type="text" name="email" value={data.email} onChange={changeHandler}onFocus={focusHandler}/>
                {errors.email  && touched.email&& <span>{errors.email}</span>} 
            </div>
            <div className={styles.formField}>
                <label>Password</label>
                <input className={(errors.password && touched.password ) ? styles.uncompleted : styles.formInput }
                 type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.password && touched.password && <span>{errors.password}</span>}  
            </div>
            <div className={styles.formField}>
                <label>confirm password</label>
                <input className={(errors.confirmPassword && touched.confirmPassword ) ? styles.uncompleted : styles.formInput }
                type="password" name="confirmpassword " value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}  />
                {errors.confirmPassword  && touched.confirmPassword&& <span>{errors.confirmPassword}</span>} 
            </div>
            <div className={styles.formField}> 
            <div className= {styles.checkboxContainer}>
                <label >i accept</label>
                <input 
                 type="checkbox" name="isAccepted" value={data.isAccepted} />
                 </div>
                {errors.isAccepted && <span>{errors.isAccepted}</span>} 
            </div>
            <div className={styles.formButtons}>
                <a href="KJFKF" >login</a>
                <button type="submit" >sign up</button>
            
                </div>
        </form>
        <ToastContainer />
        </div>
    );
};

export default SignUp;
