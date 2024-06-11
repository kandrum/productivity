import React from "react";
import { useNavigate } from "react-router-dom";

const Login =() =>{
    const navigate = useNavigate();
    const [isRegistering , setIsRegistering]= useState(false);

    const handleSubmit = async(event) =>{
        event.preventDefault();

        const data ={username,
        email,password };

        const url = isRegistering ? 
    }

    return(
        <div className={styles.loginContainer}> 
            <div className={styles.heading}>
                <h1>{isRegistering? 'Register' : 'Welcome !'}</h1>
            </div>
            <form onSubmit={handleSubmit}>
                {

                }
            </form>
        </div>
    );
};
 export default Login;