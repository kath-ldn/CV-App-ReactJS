import React, { Component } from "react";
import PreviewExperience from './PreviewExperience.js';

class Experience extends Component {
    constructor(props){
        super(props)
            this.state = {
                company: '',
                position: '',
                responsibilities: '',
                dateFrom: '',
                dateTo: '',
                subCompany: '',
                subPosition: '',
                subResponsibilities: '',
                subDateFrom: '',
                subDateTo: '',
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
            subCompany: this.state.company,
            subPosition: this.state.position,
            subResponsibilities: this.state.responsibilities,
            subDateFrom: this.state.dateFrom,
            subDateTo: this.state.dateTo

        })
        this.handleToggle();
        event.preventDefault();
    }                         

render() {
    if (this.state.isVisible === false) {
    return(
        <div className="sectionContainer">
        <h3>Experience</h3>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="companyName">Company Name</label><br />
                <input name="company" value={this.state.company} onChange={this.handleChange}></input>
            </div>
            <div>
                <label htmlFor="position">Position</label><br />
                <input name="position" value={this.state.position} onChange={this.handleChange}></input>
            </div>
            <div>
                <label htmlFor="responsibilities">Responsibilities</label><br />
                <input name="responsibilities" value={this.state.responsibilities} onChange={this.handleChange}></input>
            </div>
            <div>
                <label htmlFor="dateFrom">Start Date</label><br />
                <input type="date" name="dateFrom" value={this.state.dateFrom} onChange={this.handleChange}></input>
            </div>
            <div>
                <label htmlFor="dateTo">End Date</label><br />
                <input type="date" name="dateTo" value={this.state.dateTo} onChange={this.handleChange}></input>
            </div>
            <div>
                <input type="submit" id="submitExp"></input>
            </div>
        </form>
        </div>
    );
} else {
    return(
        <div className="previewDiv">
            <PreviewExperience company={this.state.company} position={this.state.position} responsibilities={this.state.responsibilities} dateFrom={this.state.dateFrom} dateTo={this.state.dateTo} />
            <button id="editGen" onClick={this.handleToggle}>Edit</button>
        </div>
    )
}
}
}

export default Experience;