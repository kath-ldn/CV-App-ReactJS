import React from "react";

function PreviewExperience(props) {
    return(
        <div class="preview">
            <h3>Experience</h3>
                <div class="prevData"> {props.company} </div>
                <div class="prevData"> {props.position} </div>
                <div class="prevData"> {props.responsibilities} </div>
                <div class="prevData"> {props.dateFrom} - {props.dateTo} </div>
        </div>
    );
}

export default PreviewExperience;