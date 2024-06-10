import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component{
    state={}

    

    render(){
        return(
            <div className='header'>
                <div className='logo-cont'>
                    <img src="https://res.cloudinary.com/dujs7naih/image/upload/v1716196615/sec_vfp8b9.jpg" className='logo' alt="logo" />
                    <p>system management</p>
                </div>
                <div className='names-cont'>
                    <p>INTERNSHIP</p>
                    <p>CAREER</p>
                    <p>JOB OPPURTUNITIES</p>
                    <Link to="/universities" className="item"><p>UNIVERSITIES</p></Link>
                    <Link to="/about" className="item"><p >ABOUT</p></Link>

                </div>
                <div className='btn-cont'>
                    <Link to="contactUs-page" className='round item'><p>CONTACT US</p></Link>
                    <div className='round-2'><p>LOGIN</p></div>
                </div>
            </div>
        )
    }
}
export default Header