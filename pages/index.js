import AccordionImg from "@/components/AccordeonImg";
import Button from "@/components/Button";
import { createUser, loginWithEmailAndPassword, loginWithGitHub, loginWithGoogle, recoverUserPassword } from "@/firebase/client";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const status = {
    UNDEFINED:undefined,
    LOGIN: true,
    NOTLOGIN: null
}

export default function HomePage(){
    const user = useUser()
    const router = useRouter()
    const [message, setMessage] = useState()
    const [showNotification, setShowNotification] = useState()
    const [statusLogin, setStatusLogin] = useState(status.LOGIN)
    const [statusRegister, setStatusRegister] = useState(status.NOTLOGIN)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleGoogleButton = () => {
        loginWithGoogle()
    }

    const handleButtonGitHubLogin = () => {
        loginWithGitHub()
    }

    const loginForm = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        console.log(email, password)
        loginWithEmailAndPassword(email, password, setMessage)
    }

    const registerForm = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        console.log(email, password)
        createUser(email, password, setMessage)
    }

    const changeFormCardToRegister = () => {
        setStatusLogin(status.NOTLOGIN)
        setStatusRegister(status.LOGIN)
        setMessage(null)
        setEmail('')
        setPassword('')
    }

    const changeFormCardToLogin = () => {
        setStatusLogin(status.LOGIN)
        setStatusRegister(status.NOTLOGIN)
        setMessage(null)
        setEmail('')
        setPassword('')
    }

    const handleEmailForm = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordForm = (event) => {
        setPassword(event.target.value)
    }

    useEffect(() => {
        console.log(message)
    },[message])

    useEffect(() => {
        user && router.replace('/home')
    },[user])

    return(
    <>
        <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Belanosima"></link>
        <div className="content">
            <div className="leftContent"><AccordionImg></AccordionImg></div>
            {user === null && statusLogin && <div className="rightContent">
                <div className="cardLoginContent">
                    <div className="titleLogin"><h1>POKEDEX</h1></div>
                    <div className="messageError">{message && <span>{message}</span>}</div>
                    <div className="imputsContainer">
                    <form onSubmit={loginForm}>
                        <div className="labelsForm">
                            {email.length > 0 && <label htmlFor="email">Email</label>}
                            <input onChange={handleEmailForm} type="email" id="email" name="email" placeholder="Email" required></input>
                        </div>
                        <div className="labelsForm">
                            {password.length > 0 && <label htmlFor="password">Contraseña</label>}
                            <input onChange={handlePasswordForm} type="password" id="password"  name="password" placeholder="Contraseña" required></input>
                        </div>
                        
                        <button className="submitButton" type="submit">INICIAR SESIÓN</button>
                    </form>

                    </div>
                    <div className="containOtherButtons">
                        <div className="loginWith"><span>Iniciar sesión con:</span></div>
                        <div className="otherLoginButtons">
                            <Button onClick={handleGoogleButton} width={40} height={40} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'}></Button>
                            <Button onClick={handleButtonGitHubLogin} width={40} height={40} src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}></Button>
                        </div>
                    </div>
                </div>
                <div className="createAccountContent">
                    <span>¿No tienes una cuenta? </span><button className="registerButton" style={{ color: 'red'}}  onClick={changeFormCardToRegister}>Regístrate</button>
                </div>
            </div>}

            {user === null && statusRegister && <div className="rightContent">
                <div className="cardLoginContent">
                    <div className="titleLogin"><h1>POKEDEX</h1></div>
                    <div className="messageError">{message && <span>{message}</span>}</div>
                    <div className="imputsContainer">
                    <form onSubmit={registerForm}>
                    <div className="labelsForm">
                            {email.length > 0 && <label htmlFor="email">Email</label>}
                            <input onChange={handleEmailForm} type="email" id="email" name="email" placeholder="Email" required></input>
                        </div>
                        <div className="labelsForm">
                            {password.length > 0 && <label htmlFor="password">Contraseña</label>}
                            <input onChange={handlePasswordForm} type="password" id="password"  name="password" placeholder="Contraseña" required></input>
                        </div>
                        <button className="submitButton" type="submit">REGISTRARSE</button>
                    </form>

                    </div>
                </div>
                <div className="createAccountContent">
                    <span>¿Ya tienes una cuenta? </span><button className="registerButton" style={{ color: 'red'}} onClick={changeFormCardToLogin}>Iniciar sesión</button>
                </div>
            </div>}
        </div>

        <style jsx>{`
            .content {
                display: flex;
                height: 100vh;
                justify-content:center;
                align-items:center;
                font-family: 'Belanosima';
                flex-direction: row;
                flex-wrap: wrap;
                gap: 11em;
            }
            .cardLoginContent {
                border: 1px solid grey;
                display: flex;
                border-radius: 6px;
                flex-direction: column;
                flex-wrap: wrap;
                width: 28em;
                min-height: 27em;
                box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
                align-items: center;
            }
            .titleLogin {
                display: flex;
                height: fit-content;
                width: 100%;
                justify-content: center;
                align-items:center;
                padding-top: 50px;
                background-color: yellow;
            }
            .imputsContainer {
                display: flex;
                justify-content: center;
                align-items:center;
                margin-top: 10px;
                flex-direction: column;
                gap: 50px;
            }
            input {
                border: none;
                border-bottom: 0.5px solid grey;
                width: 250px;
                font-size: 13px;
                outline: none;
                padding: 6px;
            }
            .submitButton {
                width: fit-content;
                border: 0.5px solid grey;
                border-radius: 10px;
                padding:  8px 20px;
                font-family: 'Belanosima';
                font-size: 15px;
                cursor: pointer;
            }
            .submitButton:hover {
                background: red;
                opacity: 0.90;
            }
            .containOtherButtons{
                display: flex;
                align-items: center;
                justify-conent: center;
                flex-direction: column;
                margin-top: 50px;
                gap: 10px;
            }
            .otherLoginButtons {
                display: flex;
                gap: 10px;
                margin-bottom: 60px;
            }
            form {
                display: flex;
                flex-direction: column;
                gap: 20px;
                justify-content:center;
                align-items:center;
            }
            .messageError {
                display: flex;
                width: 80%;
                text-align: justify;
                margin-top: 10px;
                color:red;
            }
            .rightContent {
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .createAccountContent{
                margin-top: 15px;
            }
            .registerButton {
                background: none;
                border: none;
                font-family: 'Belanosima';
                font-size: 16px;
                cursor: pointer;
            }
            .registerButton:hover {
                text-decoration: underline;
            }
            .labelsForm{
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 50px;
                justify-content: flex-end;
            }
            .loginWith{
                font-size: 18px;
                font-weight: lighter;
            }
            .leftContent {
                width: 680px;
            }
        `}
        </style>
    </>)
}