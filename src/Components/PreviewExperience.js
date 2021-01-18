import React, { Component } from "react";

function PreviewExperience(props) {
    return(
        <div>
                <h3>Experience</h3>
                <div id="expPreview">
                    <div id="companyPreview"> Company: {props.company} </div>
                    <div id="positionPreview"> Position: {props.position} </div>
                    <div id="responsibilitiesPreview"> Responsibilities: {props.responsibilities} </div>
                    <div id="expDatePreview"> From {props.dateFrom} - {props.dateTo} </div>
                </div>
        </div>
    );
}

export default PreviewExperience;