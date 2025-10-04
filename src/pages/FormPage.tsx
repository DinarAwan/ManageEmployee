import { use, useRef, useState } from "react";

const FormPage = () => {
    //uncontrolled form/input
    // const inputRef = useRef<HTMLInputElement>(null);
    // const inputEmailRef = useRef(null);

    //controlled form/input
    const [fullNameInput, setfullNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const HandelSubmit = (event: React.FormEvent)=>{
        // const valueFullName = inputRef.current?.value;
        // const valueEmail = inputEmailRef.current?.value;
        // alert("form submitted " + valueFullName + " " + valueEmail);
        event.preventDefault();
        const fullNameValidated = fullNameInput.length > 4;
        const passwordValidated = passwordInput.length > 8;

        if(fullNameInput){
            setUsernameErrorMessage("error : full name harus lebih dari 4 karakter");
        }

        if(passwordInput){
            setPasswordErrorMessage("error : password harus lebih dari 8 karakter");
        }
    }


    return (
        <div>
            <h1>Ini Form Page</h1>
            <p>{fullNameInput}</p><br />
            <p>{emailInput}</p>
            <div >
                <form action="" style={{display:"flex", flexDirection:"column", gap:"4px", width:"200px"}}>
                    <span style={{color:"red"}}>{usernameErrorMessage}</span>
                    <label htmlFor="full-name">Full Name : </label>
                    <input onChange={(event) => setfullNameInput(event.target.value)} id="full-name" type="text" name="full-name" value={fullNameInput} />

                    {/* <label htmlFor="email">Email ; </label>
                    <input onChange={(e) => setEmailInput(e.target.value)} type="email" id="email" name="email" value={emailInput} /> */}

                    <span style={{color:"red"}}>{passwordErrorMessage}</span>
                    <label htmlFor="password">Password :</label>
                    <input onChange={(e) => setPasswordInput(e.target.value)} type="password" id="password" name="password" value={passwordInput} />


                    <button onClick={HandelSubmit}> submit</button>
                </form>
            </div>


        </div>
    )
}

export default FormPage;