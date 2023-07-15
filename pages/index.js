import Button from "@/components/Button";
import { createUser, loginWithGitHub, loginWithGoogle } from "@/firebase/client";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function HomePage(){
    const user = useUser()
    const router = useRouter()
    const [message, setMessage] = useState()
    const [showNotification, setShowNotification] = useState()

    const handleGoogleButton = () => {
        loginWithGoogle()
    }

    const handleButtonGitHubLogin = () => {
        loginWithGitHub()
    }

    const hola = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        console.log(email, password)
        createUser(email, password, setMessage)
    }

    useEffect(() => {
        console.log(message)
    },[message])

    useEffect(() => {
        user && router.replace('/home')
    },[user])

    return(
    <>
        <div className="content">
            <div className="loginContent">
                <div className="titleLogin"><h1>INICIAR SESSION</h1></div>
                <div className="imputsContainer">
                {message && <span>{message}</span>} 
                <form onSubmit={hola}>
                    <input type="text" id="email" placeholder="Email" required></input>
                    <input type="password" id="password" placeholder="Password" required></input>
                    <button type="submit">Submit</button>
                </form>

                </div>
                <div className="containOtherButtons">
                    <h1>Iniciar session con:</h1>
                    <div className="otherLoginButtons">
                        <Button onClick={handleGoogleButton} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'}></Button>
                        <Button onClick={handleButtonGitHubLogin} src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}></Button>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            .content {
                display: flex;
                height: 100vh;
                margin 0;
                justify-content:center;
                align-items:center;
            }

            .loginContent {
                border: 0.5px solid;
                display: flex;
                border-radius: 12px;
                flex-direction: column;
                flex-wrap: wrap;
                width: 30em;
                height: 40em;
            }
            .titleLogin {
                display: flex;
                height: fit-content;
                width: 100%;
                justify-content: center;
                align-items:center;
                padding-top: 50px;
            }
            .imputsContainer {
                display: flex;
                justify-content: center;
                align-items:center;
                margin-top: 80px;
                flex-direction: column;
                gap: 50px;
            }
            input {
                border-radius: 0.3px;
            }
            button {
                width: fit-content;
            }
            .containOtherButtons{
                display: flex;
                align-items: center;
                justify-conent: center;
                flex-direction: column;
                margin-top: 50px;
            }
            .otherLoginButtons {
                display: flex;
            }
            form {
                display: flex;
                flex-direction: column;
                gap: 35px;
                justify-content: center;
                align-items:center;
            }
        `}
        </style>
    </>)
}