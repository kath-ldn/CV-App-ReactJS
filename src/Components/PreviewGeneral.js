import React from "react";

function PreviewGeneral(props) {
    return(
        <div class="preview">
            <h3>General Information</h3>
                    <div id="namePreview">{props.name}</div>   
                    <div id="emailPreview">{props.email}</div>   
                    <div id="phonePreview">{props.phone}</div>   
        </div>
    );
}

export default PreviewGeneral;