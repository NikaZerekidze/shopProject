import React, {useEffect, useState} from 'react'

import './registration.css';
export default function Register(props) {


    const [value, setValue] = useState({userName: "", password: ""});
    const [isStored, setStored] = useState();

 
    const  handleFormSubmit = (event) => {
        
        localStorage.setItem('username', value.userName);
        localStorage.setItem('password', value.password);
        
        setStored(1);
        event.preventDefault();
        props.history.push("/");

      };
      

    return (


        <div>
           
            <div className="login-page">
                
                <div className="form" onSubmit={handleFormSubmit}>
                
                   
                    <form className="login-form">
                        <input type="text" placeholder="username" value={value.userName} onChange={ event => setValue({...value, userName: event.target.value})}/>
                        <input type="password" placeholder="password" value={value.password} onChange={  event => setValue({...value, password: event.target.value})} />
                        <button type="submit">register</button>
                   
                    </form>    
                    
                  
                </div>
               
                </div>
        </div>
        
    )
}
