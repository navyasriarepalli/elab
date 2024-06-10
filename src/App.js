import {BrowserRouter , Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs  from './components/AboutUs'
import Universities from './components/UniveristiesPage'
import ContactUsPage from './components/ContactUsPage'
//import Header from './components/Header'
const App=()=>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={AboutUs}/>
        <Route exact path="/universities" component={Universities}/>
        <Route exact path="/contactUs-page" component={ContactUsPage}/>

    </Switch>
    </BrowserRouter>
)


export default App