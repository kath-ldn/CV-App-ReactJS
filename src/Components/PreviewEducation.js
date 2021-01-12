import React, { Component } from "react";

class PreviewEducation extends Component {
    constructor(props){
        super(props);
        }

render() {
    return(
        <div>
                <h3>Education</h3>
                <div id="eduPreview">
                    <div id="institutionPreview"> Institution: {this.props.institution} </div>
                    <div id="qualificationPreview"> Qualification: {this.props.qualification} </div>
                    <div id="dateCompletedPreview"> Date Completed: {this.props.dateCompleted} </div>
                </div>
        </div>
    );
}
}

export default PreviewEducation;