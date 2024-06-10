import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'

import { FaArrowRight } from "react-icons/fa6";
import './index.css'

class Home extends Component{

    onClickBtn=()=>{
        const {history}=this.props
        history.push("/about") 

    }
    render(){
        return(
            <div className='bg'>
                <div className='mid-container'>
                    <Header />
                    <div className='mid'>
                        <div>
                        <h1>Portiamo il business <br />nell'era del <span className='spaning'>Phygital</span></h1>
                        <p className='mid-p'>Accompagniamo le aziende nel realizzare progetti phygital su misura, rivokuzionando i propril peocessi di business</p>
                        <button  type ="button" className='btn' onClick={this.onClickBtn}> MANIFESTO  <FaArrowRight />
</button>

                        </div>
                        
                    </div>
                    <div className='last'>
                        <p>SCORRI GIU</p>
                        <p className='last-para'>TRANQUELLO, ABBIAMO SINTETIZZATO AL MASSIMO.</p>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }

}

export default Home