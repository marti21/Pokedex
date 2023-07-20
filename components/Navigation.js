import { userLogout } from "@/firebase/client";
import useUser from "@/hooks/useUser"
import Link from "next/link";

export default function Navigation() {
    const user = useUser()

    const logoutUser = () => {
        userLogout()
    }       

    return(
    <>
        <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Belanosima"></link>
        <header>
            <div className="navContent">
                <nav>
                    <ul>
                        <li><Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima' }} href={'/home'}>INICIO</Link></li>  
                        <li><Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima' }} href={'/profile'}>PERFIL</Link></li>  
                        <li><Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima' }} href={'/favoritos'}>FAVORITOS</Link></li>
                        <li style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima'}} onClick={logoutUser}><a>LOGOUT</a></li>
                    </ul>
                </nav>
            </div>
            <div className="titleUser">
                <span style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima'}}>{user ? (user.username ? user.username : user.email) : ''}</span>
                {user?.avatar && <img className="userImgNav" src={user.avatar}></img>}
            </div>
        </header>
    </>
    )
}
