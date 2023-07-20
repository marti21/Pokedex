import Navigation from "@/components/Navigation"
import { updateUser } from "@/firebase/client"
import useUser from "@/hooks/useUser"

export default function Profile() {
    const user = useUser()

    const submitUserUpdate = (event) => {
        event.preventDefault()
        const username = event.target[0].value
        console.log(username)
        updateUser(username)
    }

    return(
    <>
        <Navigation></Navigation>
        
        <main>
            <div className="clear"></div>
            <div className="formUserContent">
                <form onSubmit={submitUserUpdate}>
                    {user && <img src={user.avatar}></img>}
                    <h1>{user && user.email}</h1>
                
                    <input id="username" name="username" type="text" defaultValue={user && user.username} required></input>
                    <button type="submit">SAVE</button>
                </form>
            </div>
        </main>


        <style jsx>
        {`
        .clear {
            height: 1px;
        }
        main{
            display:flex;
            justify-content: center;
            height: 100vh;
            align-items:center;
        }
        .formUserContent{
            display: flex;
            border: 1px solid grey;
            box-shadow: 2px 2px 3px grey;
            border-radius: 5px;
            height: 450px;
            width: 370px;
            justify-content: center;
        }
        form {
            display:flex;
            flex-direction: column;
            gap: 20px;
        }
        img{
            width: 120px;
            height: auto;
            align-self: center;
            margin-top: 4em;
        }
        h1{
            align-self: center;
            font-size: 25px;
            margin-top: 2em;
        }
        input{
            width: 80%;
            align-self: center;
        }
        button{
            align-self: center;
            width: 30%;
        }
        `}
        </style>
    </>)
}