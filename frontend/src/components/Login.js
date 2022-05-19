import React, {useState, useContext} from 'react';
import AuthService from '../services/AuthService';
import Message from '../components/message';
import {AuthContext} from '../context/AuthContext'


const Login = props =>{
    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e =>{
        e.preventDefault();
        setUser({...user,[e.target.name] : e.target.value});
        console.log(user);
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            const{
                isAuthenticated,user,message
            } = data;
            if(isAuthenticated){
               authContext.setUser(user);
               authContext.setIsAuthenticated(isAuthenticated); 
               props.history.push('/home')
            }else
               setMessage(message);
        })
    }

    return(
        <div className="container" style={{marginTop:"-150px"}} >
            <form onSubmit={onSubmit}>
                <h3>Sign In</h3>
                <label htmlFor="username" className ="sr-only">Username: </label>
                <input type = "text"
                       name = "username"
                       Onchange = {onChange}
                       className = "form-control"
                       placeholder = "Enter Username"/>
                <label htmlFor="password" classname="sr-only">Password: </label>  
                <input type = "text"
                       name = "password"
                       Onchange = {onChange}
                       className = "form-control"
                       placeholder = "Enter Password"/>     
                <button className="btn btn-lg btn-primary btn-block"
                        type = "submit">Log In</button>      
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )
}

export default Login;