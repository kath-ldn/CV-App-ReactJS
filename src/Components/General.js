import React, { Component } from "react";
import PreviewGeneral from './PreviewGeneral.js'

class General extends Component {
    constructor(props){
        super(props);
            this.state = {
                subName: '',
                subEmail: '',
                subPhone: '',      
                name: '',
                email: '',
                phone: '',
                isVisible: false
            }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
}

handleToggle = () => {
    this.setState({ isVisible: !this.state.isVisible})
};

handleSubmit(event) {
    this.setState({
        subName: this.state.name,
        subEmail: this.state.email,
        subPhone: this.state.phone
    })
    this.handleToggle();
    event.preventDefault();
}

render() {
if (this.state.isVisible === false) {
    return(
        <div className="sectionContainer">
            <h2>Form</h2>
            <h3>General Information</h3>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label><br />
                    <input name="name" value={this.state.name} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input name="email" value={this.state.email} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label><br />
                    <input name="phone" value={this.state.phone} onChange={this.handleChange}></input>
                </div>
                <div>
                    <input type="submit" id="submitGen"></input>
                </div>
                </form>
            </div>
    );
} else {
    return(
        <div className="previewDiv">
            <PreviewGeneral name={this.state.subName} email={this.state.subEmail} phone={this.state.subPhone}/>
            <button id="editGen" onClick={this.handleToggle}>Edit</button>
        </div>
    )
}
}
}

export default General;