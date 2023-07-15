import { userLogout } from "@/firebase/client";
import useUser from "@/hooks/useUser"
import Link from "next/link";

export default function Navigation() {
    const user = useUser()

    const logoutUser = () => {
        userLogout()
    }       

    console.log(user)

    return(
    <>
        <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Belanosima"></link>
        <header>
            <nav>
                <ul>
                    <li><Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima' }} href={'/home'}>INICIO</Link></li>  
                    <li><Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima' }} href={'/profile'}>{user && user.username ? user.username : user && user.email}</Link></li>  
                    <li><Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima' }} href={'/favoritos'}>FAVORITOS</Link></li>
                    <li onClick={logoutUser}><a>LOGOUT</a></li>
                </ul>  
            </nav>
        </header>
    </>
    )
}
