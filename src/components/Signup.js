import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    let firstInputRef = useRef();
    let lastnamInputRef = useRef();
    let maleRBRef = useRef();
    let femaleRBRef = useRef();
    let stateSelectRef = useRef();
    let resultParaRef = useRef();
    let selectedGender;
    let selectedMS;

    let onCreateAccount = ()=>{
        if(stateSelectRef.current.value == "Select State"){
            alert("Please select your state");
        }else{

            let salutation = "";

            if(selectedGender == "male"){
                salutation = "Mr.";
            }

            if(selectedGender == "female"){
                if(selectedMS == "single"){
                    salutation = "Miss."; 
                }else{
                    salutation = "Mrs."
                }
            }

            resultParaRef.current.innerHTML = `${salutation} ${firstInputRef.current.value} ${lastnamInputRef.current.value} from ${stateSelectRef.current.value}, your account has been created.`;
        }
    }

  return (
    <div className='App'>
        <form>
        <h2>SIGNUP</h2>
            <div>
                <label>First Name</label>
                <input ref={firstInputRef} type="text"></input>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastnamInputRef} type="text"></input>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" name="gender" ref={maleRBRef} onChange={()=>{
                    if(maleRBRef.current.checked == true){
                        selectedGender = "male";
                    }
                }}></input>
                <label style={{width:"auto"}}>Male</label>
                <input type="radio" name="gender" ref={femaleRBRef} onChange={()=>{
                    if(femaleRBRef.current.checked == true){
                        selectedGender = "female";
                    }
                }}></input>
                <label style={{width:"auto"}}>Female</label>
            </div>
            <div>
                <label>Martel Status</label>
                <input type="radio" name="ms" onChange={(eventObj)=>{
                    console.log(eventObj);
                    if(eventObj.target.checked == true){
                        selectedMS = "single";
                    }
                    }}></input>
                <label style={{width:"auto"}}>Single</label>
                <input type="radio" name="ms"  onChange={(eventObj)=>{
                    console.log(eventObj);
                    if(eventObj.target.checked == true){
                        selectedMS = "married";
                    }
                }}></input>
                <label style={{width:"auto"}}>Married</label>
            </div>
            <div>
                <label>Age</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Email</label>
                <input type="text"></input>
            </div>
            <div>
            <label>Password</label>
            <input type="text"></input>
            </div>
            <div>
                <label>Mobile No.</label>
                <input type="text"></input>
            </div>
            <div>
                <label>State</label>
                <select ref={stateSelectRef}>
                    <option>Select State</option>
                    <option>Jammu and Kashmir</option>
                    <option>Delhi</option>
                    <option>Uttar Pradesh</option>
                    <option>Assam</option>
                    <option>Kolkata</option>
                    <option>Meghalaya</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Maharastra</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="TG">Telangana</option>
                    <option>Tamil Nadu</option>
                </select>
            </div>
            <div>
                <button type="button" onClick={()=>{
                    onCreateAccount();
                }}>Create Account</button>
            </div>
            <p ref={resultParaRef}></p>
        </form>
        <br></br>
            <Link to="/">Login</Link>
    </div>
  )
}

export default Signup