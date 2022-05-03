import React from "react";
import '../Styles/home.css';


class Home extends React.Component {
    
    handleNavigate =() =>{
        this.props.history.push(`/contact`);
   }
   handleNavigatehome =()=>{
       this.props.history.push(`/`);
   }
   handleNavigateBook=()=>{
       this.props.history.push(`/book`);
   }
   handleNavigateParts=()=>{
       this.props.history.push('/quicksar');
   }
   handleNavigateabout=()=>{
       this.props.history.push('/about');
   }
    render() {
        
        return (
            <html>
                <div className="container">
                    <div className="margin">
                        <div>Welcome to Rorar Bicycles </div>
                    </div>
                    <header>
                        <div className="logo">
                            <a onClick={this.handleNavigatehome}><img src="./Assets/logo-roar-bikes.png" alt="logo supposed" /></a>
                        </div>
                        <nav className='disp' style={{ float: "right" }}>
                            <div className="navbutton1">
                                <a >BookOnline</a>
                                <div className="dropdown">

                                    <div className="navbutton1"><a onClick={this.handleNavigateBook}>Onsite Service</a></div>
                                    <div className="navbutton1"><a onClick={this.handleNavigateParts}>Parts Delivery</a></div>
                                    <div className="navbutton1"><a onClick={this.handleNavigate}>Request Callback</a></div>
                                </div>

                            </div>
                            <div className="navbutton1">
                                <a onClick={this.handleNavigateabout}>About</a>
                            </div>
                            <div className="navbutton1">
                                <a onClick={this.handleNavigate}>Contact</a>
                            </div>
                        </nav>
                    </header>
                    <main>
                        <div className="herobox1">
                            <h1>Mobile bike repairs.</h1>
                            <p>Many people have difficulty getting their bikes to a bike shop. We call to your office or home
                                anywhere in greater Dublin.</p>
                            <p>Fast, convenient bike servicing with up-front pricing. All without the hassle of taking your bike
                                into a shop.</p>
                            <a onClick={this.handleNavigateBook} className="button1">Book Online</a>
                            {/* <!-- we can add pseudo className to apply the hovering effect --> */}
                        </div>
                        <div className="herobox2">
                            <img src="./Assets/image-bike-repair-service.jpg" alt="Bike reapir suppoed." />
                        </div>
                    </main>
                    <div className="cards">
                        <div className="card1">
                            <a href="#">
                                <i className="fa-solid fa-tractor"></i>
                                <h2>Book Online</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus ratione iusto quas
                                    alias. </p>
                            </a>
                        </div>
                        <div className="card2">
                            <a href="#">
                                <i className="fa-solid fa-tractor"></i>
                                <h2>Service Type</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis perspiciatis</p>
                            </a>
                        </div>
                        {/* <!-- .cards p means i want a to apply cards if it has a p tag inside it -->
                    <!-- a.buton1 means a anchor tag with a button1 className --> */}
                        <div className="card3">
                            <a href="#"><i className="fa-solid fa-tractor"></i>
                                <h2>Call for Advice</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente delectus repellendus </p>
                            </a>
                        </div>
                    </div>
                    <div className="testimonials">
                        <div className="tbox">
                            <p>I would like to personally thank you for your outstanding product. You guys rock! It's all good. I
                                can't say enough about Roar Cycles.</p>
                            <p>- Tammara I.</p>
                        </div>

                        <div className="tbox">
                            <p>Roar Cycles is the most valuable business resource we have EVER purchased. I will let my mum know
                                about this, she could really make use of Roar Cycles! Roar Cycles has completely surpassed our
                                expectations.</p>
                            <p>- Floris V.</p>
                        </div>

                        <div className="tbox">
                            <p>I'm good to go. Roar Cycles is both attractive and highly adaptable. I will refer everyone I know.
                            </p>
                            <p>- Carlin B.</p>
                        </div>

                        <div className="tbox">
                            <p>Roar Cycles impressed me on multiple levels. I would gladly pay over 600 dollars for Roar Cycles. We
                                can't understand how we've been living without Roar Cycles.</p>
                            <p>- Eve V.</p>
                        </div>
                    </div>
                </div>
                
            </html>
        )
    }
}
export default Home;