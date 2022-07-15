import React, { useState } from'react';
import Login from './Login';

function LoginForm({Login1, error}){

        const[details, setDetails]= useState({name:"", email:"", password:""});
        const submitHandler = (e) =>{
            e.preventDefault();
            >
                 </div>
                 <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
    }

export default LoginForm;