import React from "react";

function PreviewEducation(props) {
    return(
        <div class="preview">
            <h3>Education</h3>
                <div class="prevData"> {props.institution} </div>
                <div class="prevData"> {props.qualification} </div>
                <div class="prevData"> {props.dateCompleted} </div>
        </div>
    );
}

export default PreviewEducation;