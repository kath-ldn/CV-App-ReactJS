import React, { Component } from "react";

class PreviewExperience extends Component {
    constructor(props){
        super(props);
        }

render() {
    return(
        <div>
                <h3>Experience</h3>
                <div id="expPreview">
                    <div id="companyPreview"> Company: {this.props.company} </div>
                    <div id="positionPreview"> Position: {this.props.position} </div>
                    <div id="responsibilitiesPreview"> Responsibilities: {this.props.responsibilities} </div>
                    <div id="expDatePreview"> From {this.props.dateFrom} - {this.props.dateTo} </div>
                </div>
        </div>
    );
}
}

export default PreviewExperience;