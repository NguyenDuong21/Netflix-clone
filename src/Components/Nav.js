import React,{useState,useEffect} from 'react'
import './Nav.css';
function Nav() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) setShow(true)
            else setShow(false)
        })
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav_bg_black'}`}>
            <img className="nav-logo" src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png' />
            <img className="nav-avatar" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFtZWxDBeORvBoc7pjiX2xVbeNEJqfl0_HA&usqp=CAU' />
        </div>
    )
}

export default Nav
