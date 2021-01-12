import React, { Component } from "react";
import PreviewEducation from './PreviewEducation.js';

class Education extends Component {
    constructor(props){
        super(props)
            this.state = {
                institution: '',
                qualification: '',
                dateCompleted: '',
                subInstitution: '',
                subQualification: '',
                subDateCompleted: '',
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
            subInstitution: this.state.institution,
            subQualification: this.state.qualification,
            subDateCompleted: this.state.dateCompleted

        })
        this.handleToggle();
        event.preventDefault();
    }                

render() {
    if (this.state.isVisible === false) {
    return(
        <div className="sectionContainer">
        <h3>Education</h3>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="institution">Institution Name</label><br />
                <input name="institution" value={this.state.institution} onChange={this.handleChange}></input>
            </div>
            <div>
                <label htmlFor="qualification">Qualification</label><br />
                <input name="qualification" value={this.state.qualification} onChange={this.handleChange}></input>
            </div>
            <div>
                <label htmlFor="dateCompleted">Date Completed</label><br />
                <input type="date" name="dateCompleted" value={this.state.dateCompleted} onChange={this.handleChange}></input>
            </div>
            <div>
                <input type="submit" id="submitEdu"></input>
            </div>
        </form>
        </div>
    );
} else {
    return(
        <div className="previewDiv">
            <PreviewEducation institution={this.state.institution} qualification={this.state.qualification} dateCompleted={this.state.dateCompleted} />
            <button id="editGen" onClick={this.handleToggle}>Edit</button>
        </div>
    )
}
}
}

export default Education;