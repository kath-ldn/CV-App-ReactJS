import React, { Component, useState, useEffect } from "react";
import PreviewEducation from './PreviewEducation.js';

/* used a functional component and one hook with object properties for each input field */

function Education() {
    //state variables
    const [inputValues, setInputValues] = useState({institution: '',
        qualification: '', dateCompleted: '', isVisible: false
    });

    const handleToggle = () => {
        const value = !inputValues.isVisible
        setInputValues({...inputValues, isVisible: value})
    };

    function handleSubmit(){
        //anything else? if not just set onSubmit to handletoggle. prev had ->subInstitutione tc
        handleToggle();
    }

    function handleChange(event){
        const { name, value } = event.target;
        setInputValues({...inputValues, [name]: value})
        //expect could find a way to reuse these functions - to look at
    }

    if (inputValues.isVisible === false) {
        return(
        <div className="sectionContainer">
        <h3>Education</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="institution">Institution Name</label><br />
                <input name="institution" value={inputValues.institution} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="qualification">Qualification</label><br />
                <input name="qualification" value={inputValues.qualification} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="dateCompleted">Date Completed</label><br />
                <input type="date" name="dateCompleted" value={inputValues.dateCompleted} onChange={handleChange}></input>
            </div>
            <div>
                <input type="submit" id="submitEdu"></input>
            </div>
        </form>
        </div>
        )
    } else {
        return(
            <div className="previewDiv">
            <PreviewEducation institution={inputValues.institution} qualification={inputValues.qualification} dateCompleted={inputValues.dateCompleted} />
            <button id="editGen" onClick={handleToggle}>Edit</button>
        </div>
        )
    }

}

export default Education;