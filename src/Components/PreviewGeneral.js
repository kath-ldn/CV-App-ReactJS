import React, { Component } from "react";

function PreviewGeneral(props) {
    return(
        <div>
            <h3>General Information</h3>
                <div id="generalPreview">
                    <div id="namePreview">Name: {props.name}</div>   
                    <div id="emailPreview">Email: {props.email}</div>   
                    <div id="phonePreview">Phone: {props.phone}</div>   
                </div>
        </div>
    );
}

export default PreviewGeneral;