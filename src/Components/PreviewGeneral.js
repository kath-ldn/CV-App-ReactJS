import React, { Component } from "react";

class PreviewGeneral extends Component {
    constructor(props){
        super(props);
        }

render() {
    return(
        <div>
            <h3>General Information</h3>
                <div id="generalPreview">
                    <div id="namePreview">Name: {this.props.name}</div>   
                    <div id="emailPreview">Email: {this.props.email}</div>   
                    <div id="phonePreview">Phone: {this.props.phone}</div>   
                </div>
        </div>
    );
}
}

export default PreviewGeneral;