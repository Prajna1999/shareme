import React from 'react'
import GoogleLogin from "react-google-login";
import {json, Navigate, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import {client} from "../client.js";
import logo from "../assets/logoWhite.png";
const Login = () => {

    const responseGoogle=(response)=>{
       localStorage.setItem('user', JSON.stringify(response.profileObj));

       const {name, googleId, imageUrl}=response.profileObj;
        const navigate=useNavigate();
       const doc={
        _id:googleId,
        _type:'user',
        userName:name,
        Image:imageUrl
       }
       
       client.createIfNotExists(doc)
        .then(()=>{
            navigate('/', {replace:true})
        })
    }
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
            <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
            />

            <div className='absolute flex flex-col justify-center
             items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay' >
                <div className='p-5 z-40'>
                    <img src={logo} width="130px" alt="logo" />

                    <div className='shadow 2-xl'>
                        <GoogleLogin
                            // clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                            clientId='122004741888-ev0kv8qhktr6jevig8a8at43kclho2mk.apps.googleusercontent.com'
                            render={(renderProps)=>{
                                <button
                                    type='button'
                                    
                                    className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'

                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    <FcGoogle className='mr-4' />
                                    Sign in with Google
                                </button>
                            }}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy="single_host_origin"
                        />
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Login