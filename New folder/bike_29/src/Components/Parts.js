import React from 'react';
import '../Styles/parts.css';
import { withRouter } from "react-router-dom";
import Modal from 'react-modal';
import axios from 'axios';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'lightbrown',
        color: 'grey',
        border: 'solid 1px brown',
        borderRadius: '6px'
    },
};
class Parts extends React.Component {
    constructor() {
        super();
        this.state = {
            saveModalIsOpen: false,
            firstName: '',
            lastName: '',
            email: '',
            phNumber: '',
            address: ''
        }
    }
    handlebooking = () => {
        this.setState({ saveModalIsOpen: true });
    }
    handleModal = (state, value) => {
        this.setState({ [state]: value });
    }
    handleInputChange = (event, state) => {
        this.setState({ [state]: event.target.value });
    }
    handleOrder = () => {
        const { firstName, email, address, lastName, phNumber } = this.state;
        const Orders = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            phNumber: phNumber,
            address: address
        };
        axios({
            method: 'POST',
            url: 'http://localhost:9992/saveOrder',
            headers: { 'Content-Type': 'application/json' },
            data: Orders
        })
            .then(response => {
                this.setState({
                    email: email,
                    firstName: firstName,
                    address: address,
                    lastName: lastName,
                    phNumber: phNumber
                }); alert(response.data.message);
            })
            .catch(err => console.log(err))
        this.handleModal('saveModalIsOpen', false);
    }    
    render() {
        
        const { qsData } = this.props;
        const{saveModalIsOpen}=this.state;
        return (
            // <div className='background'>
            //     <div className='top'>
            <div className="col-lg-4 col-md-12 col-sm-12" onClick={this.handlebooking}  >
                <div className="item">
                    <div className="row">
                        <div className="col-6">
                            <img src={`${qsData.image}`} alt="" height="160" width="100%" />
                        </div>
                        <div className="col-6">
                            <div className="item-heading">
                                {qsData.name}
                            </div>
                            <div className="item-sub-heading">
                                {qsData.content}
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={saveModalIsOpen}
                    style={customStyles}
                >
                    <div className='mod1'>
                        <div className="fas fa-times close-btnH" style={{ marginTop: '5px', marginRight: '5px', float: 'right' }} onClick={() => this.handleModal('saveModalIsOpen', false)}></div>
                        <div className='bhed'>Book</div>
                        <div><label className='Log_head'>First Name</label>
                            <input type="text" placeholder="Enter your Name" required onChange={(event) => this.handleInputChange(event, 'firstName')} className="form-log-c" /></div>
                        <div><label className='Log_head'>Last Name</label>
                            <input type="text" placeholder="Enter your Name" required onChange={(event) => this.handleInputChange(event, 'lastName')} className="form-log-c" /></div>
                        <div><label className='Log_head'>email</label>
                            <input type="email" placeholder="Enter your email" required onChange={(event) => this.handleInputChange(event, 'email')} className="form-log-c" /></div>
                        <div><label className='Log_head'>Phone No.</label>
                            <input type="text" placeholder="Enter your phone no" required onChange={(event) => this.handleInputChange(event, 'phNumber')} className="form-log-c" /></div>
                        <div><label className='Log_head'>Address</label>
                            <input type="text" placeholder="Enter your Address" required onChange={(event) => this.handleInputChange(event, 'address')} className="form-log-c" /></div>
                        <div> <button className="btn btn-danger PROCEED" style={{ float: 'right' }} onClick={this.handleOrder}>Place Order </button></div>
                    </div>
                </Modal>
            </div>
            //     </div>
            // </div>
        )
    }
}
export default withRouter(Parts);