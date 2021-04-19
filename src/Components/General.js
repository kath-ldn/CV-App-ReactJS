import React, {useState } from "react";
import PreviewGeneral from './PreviewGeneral.js'

/* Here I am using a function component with basic Hooks - each has it's own state variable, and onChange function
(within JSX to setState. In other components I will merge these and have a function that does all the variables. */

function General(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isVisible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible(!isVisible);
    }

    const handleSubmit = () => {
            handleToggle();
    }

    if (isVisible === false) {
            return(
                <div className="sectionContainer">
                    <h2>Your Application</h2>
                    <h3>General Information</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="inputAndLabel">
                                <label htmlFor="name">Name</label><br />
                                <input name="name" type ="text" value={name} onChange={(event) => setName(event.target.value)}></input>
                            </div>
                            <div className="inputAndLabel">
                                <label htmlFor="email">Email</label><br />
                                <input name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                            </div>
                            <div className="inputAndLabel">
                                <label htmlFor="phone">Phone</label><br />
                                <input name="phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)}></input>
                            </div>
                                <input type="submit" id="submitGen"></input>
                        </form>
                    </div>
            );
        } else {
            return(
                <div className="previewDiv">
                    <h2>Your Application</h2>
                        <PreviewGeneral name={name} email={email} phone={phone}/>
                        <button class="edit" onClick={handleToggle}>Edit</button>
                </div>
            )
        }
}


export default General;