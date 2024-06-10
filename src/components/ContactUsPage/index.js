import {Component} from 'react'
import { FiPhone } from "react-icons/fi";
import { Ri24HoursFill } from "react-icons/ri";
import { GiWhiteBook } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import './index.css'

class ContactUsPage extends Component{
    state={name:"",email:"",phoneNumber:"",subject:""}
    onChangeName=(event)=>{
        this.setState({name:event.target.value})
    }
    onChangeEmail=(event)=>{
        this.setState({email:event.target.value})
    }
    onChangePhone=(event)=>{
        this.setState({phoneNumber:event.target.value})
    }
    onChangeSubject=(event)=>{
        this.setState({subject:event.value})


    }       
    onClickDemo=()=>{
        const {name,email,phoneNumber,subject}=this.state
        if(name==="" || email==="" || phoneNumber===""){
            alert("Enter a valid Input")
        }
        console.log(subject)
        
        
    }
    render(){
        return(
            <div className='contact'>
                <h1 className='contact-head'>Contact Us Page</h1>
                <div className='contact-mini-cont' >
                    <div className='contact-first-cont'>
                
                    <span>Get In Touch</span>
                    <p>You can also get in touch with our company through phone or email to get your assignment help login.</p>
                    <p>Phone</p>
                    <div className='contact-cont-mob'>
                        

                        <div className='contact-phone-details'>
                            <FiPhone className='contact-icon' />
                            <div>
                                <p>Australia</p>
                                <p>+61 4888 96 118</p>
                            </div>
                        </div>
                        <div className='contact-phone-details'>
                            <FiPhone className='contact-icon' />
                            <div>
                                <p>Singapore</p>
                                <p>+65 8417 1433</p>
                            </div>
                        </div>
                        <div className='contact-phone-details'>
                            <FiPhone className='contact-icon' />
                            <div>
                                <p>United Kingdom</p>
                                <p>+44 7418 343403</p>
                            </div>
                        </div>
                        <div className='contact-phone-details'>
                            <FiPhone className='contact-icon' />
                            <div>
                                <p>Canada</p>
                                <p>+1 916 533 9620</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact-email'>
                        <p  >Email Id's</p>
                        <a href="/contactUs-page" target='/blank'>info@helpassignment.com.au</a>
                        <a href="/contactUs-page" target='/blank'>info@thestudenthelpline.com</a>
                        <a href="/contactUs-page" target='/blank'>help@learnwithfraternity.com</a>
                    </div>
                    <div>
                        <p className='none'>Locations</p>
                        <div className='contact-location'>
                            <p className='contact-location-name'>Canada</p>
                            <p>90 Park Lawn Rd, Etobicoke - Ontario, Canada PO Box:M8Y 0B6</p>
                        </div>
                        <div className='contact-location'>
                            <p className='contact-location-name'>United Kingdom</p>
                            <p>148 Broadhurst Gardens, London, UK-NW63BH.</p>
                        </div>
                        <div className='contact-location'>
                            <p className='contact-location-name'>Singapore</p>
                            <p>08-1518 Block,467 Hougang Ave 8,Singapore-530467</p>
                        </div>3
                        
                    </div>
                </div>
                <div>
                <form>
                    <div className='form-cont'>
                        <p className='contact-para'>High Grades guaranteed or Your Money back! <br /> It's Time You Sought Help From</p>
                        <input type="text" onChange={this.onChangeName} placeholder="Name" className='input-cont'/>
                        <input type="text" onChange={this.onChangeEmail} placeholder='Email' className='input-cont'/>
                        <input type="text" onChange={this.onChangePhone} placeholder='Phone Number' className='input-cont'/>
                        <select className='input-cont' onChange={this.onChangeSubject}>
                            <option value="IT">IT</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Science">Science</option>
                            <option value="Mathematics"> Mathematics</option>
                            
                        </select>
                        <div>
                        <input type="checkbox" id="myCheckBox"  className='check' />
                        <label htmlFor="myCheckBox">I agree with the terms</label>
                        </div>
                        <button type="button" className='contact-button' onClick={this.onClickDemo}>Request for Free Demo</button>
                        
                    </div>
                </form>
                <div className='contact-finale'>
                    <div className='contact-trio-cont'>
                        <Ri24HoursFill className='contact-24-icon'/>
                        <p className='contact-24-para'>24 * 7</p>
                        <p>Support</p>

                    </div>
                    <div className='contact-trio-cont'>
                        <GiWhiteBook className='contact-24-icon'/>
                        <p className='contact-24-para'>100+</p>
                        <p >Subjects Covered</p>

                    </div>
                    <div className='contact-trio-cont'>
                        <FaPeopleGroup className='contact-24-icon' />
                        <p className='contact-24-para'>2000+</p>
                        <p >ph.D Experts</p>

                    </div>
                
                </div>
                </div>
                </div>
                
            </div>
        )
    }
}
export default ContactUsPage