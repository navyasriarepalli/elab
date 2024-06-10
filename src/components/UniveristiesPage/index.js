import { Component } from "react";
import './index.css'

const universityList=[["UnitedStates","Columbia University","Stanford University","Harvard University","Yale University","Princeton University"],["UnitedKingdom","Cambridge University","Oxford University","Monash Univerity","University of Leads","University of Manchester"],["Australia","Monash University","Curtin University","RMIT University","Deaken University","Bond University"],["Germany","University of Hamburg","Technical University of Munich","University of Freiburg","University of Bonne","University of Cologne"],["Canada","Western University", "York University","University of Alberta","University of Toronto","Brock University"],["Italy","University of Bologna","University of Pisa","University of siena" ,"University of Florence","University of padau"],["Ireland","University of Galway","University of Limerick","TU Shannon","Maynooth University","University college Cork"],["Japan","University of Tokyo","Kyoto University","Osaka University","Tohoku University","Nagoya University"],["Malaysia","University of Malaya","SEGi University","Curtin University Malaysia","MAHSA University","Universiti putra Malaysia"],["France","Sciences Po","Montpellier University","Sorbonne University","University of Lorraine","University of Bordeaux"]]
class Universities extends Component{
    state={
        list:universityList,
        country:"UnitedKingdom"
    }

    onClickUs=()=>{
        this.setState({country:"UnitedStates"})
        
        
    }
    onClickUk=()=>{
        this.setState({country:"UnitedKingdom"})
    }
    onClickAustralia=()=>{
        this.setState({country:"Australia"})
    }
    onClickGermany=()=>{
        this.setState({country:"Germany"})
    }
    onClickKorea=()=>{
        this.setState({country:"Canada"})
        
    }
    onClickUkItaly=()=>{
        this.setState({country:"Italy"})
    }
    onClickIreland=()=>{
        this.setState({country:"Ireland"})
    }
    onClickJapan=()=>{
        this.setState({country:"Japan"})
    }
    onClickMalaysia=()=>{
        this.setState({country:"Malaysia"})
    }
    onClickFrance=()=>{
        this.setState({country:"France"})
    }
    render(){
        const {list,country}=this.state
        const fil=list.filter(eac=>eac[0]===country)
        const title=fil[0][0]
        const final=fil[0].filter(eachu=>eachu!==country)
        const us=(country==="UnitedStates" ? "us":"")
        const uk=(country==="UnitedKingdom" ? "us":"")
        const fr=(country==="Australia" ? "us":"")
        const ger=(country==="Germany" ? "us":"")
        const kor=(country==="Canada" ? "us":"")
        const ita=(country==="Italy" ? "us":"")
        const ire=(country==="Ireland" ? "us":"")
        const jap=(country==="Japan" ? "us":"")
        const mal=(country==="Malaysia" ? "us":"")
        const fra=(country==="France" ? "us":"")
        
        return(
        <div className="university">
            <p className="university-head">Where Do You Want To Study?</p>
            <div className="university-mini-cont">
            <button type="button" className={`university-btn ${us}`} onClick={this.onClickUs}>United States</button>
            <button type="button" className={`university-btn ${uk}`} onClick={this.onClickUk}>United Kingdom</button>
            <button type="button" className={`university-btn ${fr}`} onClick={this.onClickAustralia}>Australia</button>
            <button type="button" className={`university-btn ${ger}`} onClick={this.onClickGermany}>Germany</button>
            <button type="button" className={`university-btn ${kor}`} onClick={this.onClickKorea}>Canada</button>
            <button type="button" className={`university-btn ${ita}`} onClick={this.onClickUkItaly}>Italy</button>
            <button type="button" className={`university-btn ${ire}`} onClick={this.onClickIreland}>Ireland</button>
            <button type="button" className={`university-btn ${jap}`} onClick={this.onClickJapan}>Japan</button>
            <button type="button" className={`university-btn ${mal}`} onClick={this.onClickMalaysia}>Malaysia</button>
            <button type="button" className={`university-btn ${fra}`} onClick={this.onClickFrance}>France</button>

            
            </div>
            <div className="universities-second-cont">
                <h1 className="university-title">{title}</h1>
                <p className="university-para">University Names are Listed below</p>
                <div className="university-names-cont">
                {final.map(each=>{
                    
                        return (
                            <ol className="list-items">
                                <li key={each}>{each}</li>

                            </ol>

                        )
                    

                    
                    
                        
                    
                    
                     
                        
            
                })}
                </div>
                

            </div>
        </div>
        )
    }
}

export default Universities