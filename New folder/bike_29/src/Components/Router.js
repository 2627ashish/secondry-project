import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import Book from './Book';
import About from './About';
import Quicksearch from './Quicksearch';
function Router() {
        return (
            <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/book" component={Book}/>
            <Route path="/quicksar" component={Quicksearch}/>
            <Route path="/about" component={About}/>
            </BrowserRouter>
        )
    
}

export default Router;