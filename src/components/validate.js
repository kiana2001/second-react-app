 export const validate = data =>{
    const errors = {};
    if(!data.name.trim()){
errors.name= "username required "
    } 
    else{
        delete errors.name
    }
    if(!data.email.trim()){
        errors.email= "email required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
 errors.email="email invalid"
    }else{
       delete errors.email
    }
    if(!data.password){
        errors.password= "password required"

    }
    else if(data.password.length <6){
        errors.password="password needs at least 6 characters"
    }
    else{
        delete errors.password
    }
    if(!data.confirmPassword){
        errors.confirmPassword= "confirmPassword"
    }
    else if(data.confirmPassword !== data.password){
errors.confirmPassword= "password do not match"
    }
    else{
        delete errors.confirmPassword
    }
    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted="accept please "
    }
    return errors;
}
