import Navigation from "@/components/Navigation"
import { updateUser } from "@/firebase/client"
import useUser from "@/hooks/useUser"

export default function Profile() {
    const user = useUser()
    console.log(user)

    const handkeUp = () => {
        updateUser()
    }

    return(
    <>
        <Navigation></Navigation>
        
        <main>
            <div className="clear"></div>
            <h1>{user && user.email}</h1>
            {user && <img src={user.avatar}></img>}
            <input defaultValue={user && user.username}></input>
        </main>

        <button onClick={handkeUp}>SAVE</button>

        <style jsx>
        {`
        .clear {
            height: 1px;
        }
        h1 {
            margin-top: 200px;
        }
        `}
        </style>
    </>)
}