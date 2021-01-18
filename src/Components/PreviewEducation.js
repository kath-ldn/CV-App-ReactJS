import React, { Component } from "react";

function PreviewEducation(props) {
    return(
        <div>
                <h3>Education</h3>
                <div id="eduPreview">
                    <div id="institutionPreview"> Institution: {props.institution} </div>
                    <div id="qualificationPreview"> Qualification: {props.qualification} </div>
                    <div id="dateCompletedPreview"> Date Completed: {props.dateCompleted} </div>
                </div>
        </div>
    );
}

export default PreviewEducation;