import {Component} from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import './index.css'

class AboutUs extends Component{
    render(){
        return(
            <div>
                <div className='about'>
                    <h1>About Us</h1>
                </div>
                <div className='sec'>
                    <div className='content-cont'>
                        <button type="button" className='about-btn'>Our Story</button>
                        <p>The StudentHelpline commenced its journey in 2010, boasting a small yet profoundly knowledgable team of experts.Driven by the conviction that every student should have the chance to soar to great heights ,our dedicated staff pooled their expertise  and experience to disseminate knowledge and empower aspiring learners.</p>
                        <p>Sinece then, we continually expanded our horizons and refined our services.Our Commitment to educational excellence remains unwavering.With a focus on student success, we have evolved into a trusted resouces for academic support and guidance.Our journey is marked by the growth of our team,the satisfaction of countless students, and a dedication to providing  oppurtunities for learning and growth  </p>
                    </div>
                    <div className='image-cont'>
                        <img src="https://res.cloudinary.com/dft95zegd/image/upload/v1716285550/study-1_itvzyt.jpg" alt="study" />
                        <img src="https://res.cloudinary.com/dft95zegd/image/upload/v1716285823/study-2_v2hnpw.jpg" alt="study"/>
                    </div>
                </div>
                <div className='mission-cont'>
                <button type="button" className='about-btn mission-btn'>Our Mission</button>
                <h5>Our Story</h5>
                <p>The StudentHelpline was born from its founder's personal experience .The Company began its endeavours back in 2010 with a slender but highly knowledgable team of experts .with a belief that every student deservers an oppurtunity to expand their wings in an enormous way, the staff with their collective effort began to spread their knowledge and share their experience. </p>
                <p>working day and night with utmost dedication, helping students achieve their dream goal of studying abroad; we did not take much time to reach the top! Today ,we are India's most preferred overseas education consultants possessing rich information and experience that is useful to help unlock a students's potential to a fullest.</p>
                <p></p>

                </div>
                <div className='vision-cont'>
                    <div>
                        <img src="https://res.cloudinary.com/dft95zegd/image/upload/v1716291342/study-4_cczicu.jpg" alt="team" className='team-image'/>
                    </div>
                    <div className='vision-mini-cont'>
                        <h3>Our Vision</h3>
                        <p>All the members working at the StudentHelpline work with a clear vision and that is to provide exemplary study abroad experience to all those with big dreams in their eyes .We ensure to empower this dream with the help of guidance from some of the best industry experts, the latest tools and technology along with unlimited oppurtunities so that students get a chance to be what they want! </p>
                        <p>we aim to become a compass in a students's life and navigate them in  the right direction especially when it comes to the best universities,accomodations and more.Our commitmemt to providing personalised support is what makes us a stand out player in the industry that aims to create a world.where education and knowledge have no boundaries.</p>
                        <button type="button" className='about-btn'>Get Started</button>
                    </div>
                </div>
                <div className='footer-cont'>
                    <div className='footer-row'>
                    <div className='foot-first-cont'>
                        <p>The StudentHelp</p>
                        <div className='icon-cont'>
                            <div className='icon'>
                            <FaTwitter />
                            </div>
                            <div className='icon'>
                            <FaFacebookF />
                            </div>
                            <div className='icon'>
                            <FaInstagram />
                            </div>
                            <div className='icon'>
                            <FaLinkedinIn />
                            </div>
                        

                        </div>
                        <div className='about-foot'>
                            < HiOutlinePhone className='phone' />
                            
                            <p>9381236598</p>


                        
                        </div>
                        <div className='about-foot'>
                        
                            <MdEmail className='phone' />
                            
                            <p>help@learnwith.com</p>


                        
                        </div>
                            
                            


                        
                        
                    </div>
                    <div className='foot-second-cont'>
                        <h2>Quick links</h2>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='foot-third-cont'>
                    <h2>Address</h2>

                    <p> <FaLocationDot /> INDIA <span>D-62,Noida,sector-2</span></p>
                    

                    </div>
                    </div>
                    <hr />
                    <p className='foot-last'> @2024 Learn with Fraternity ALL RIGHTS RESERVED</p>


                </div>
            </div>
        )
    }
}

export default AboutUs