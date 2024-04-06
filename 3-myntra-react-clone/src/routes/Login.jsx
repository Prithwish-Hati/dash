// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import { auth } from '../firebase/setup'


const Login = () => {
    const [state, setState] = useState("")
    // const [user, setUser] = useState(null)

    // const sendOtp = () => {
    //     const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
    //     const confirmation = signInWithPhoneNumber(auth, phone, recaptcha)
    //     setUser(confirmation)
    // }

    return (
        <main className='bg-login bg-top bg-cover bg-no-repeat w-full h-screen flex items-center justify-center'>
            <div className='login-glass max-w-[999px] p-10 font-bold'>
                <h1 className='text-white text-3xl mb-4 text-center'>Login <span className='font-normal'>or</span> Signup</h1>
                <PhoneInput
                    country={'us'}
                    value={state.phone}
                    onChange={phone => setState({ phone })}
                    containerStyle={{ background: 'transparent' }}
                    inputStyle={{ background: 'transparent', borderRadius: '20px', color: 'white' }}
                    buttonStyle={{ background: 'transparent', borderRadius: '20px 0 0 20px' }}
                />
                <div id='recaptcha'></div>
                <button className='bg-white p-2 w-full rounded-full mt-6'>Continue</button>
            </div>
        </main>
    )
}

export default Login