import React from 'react';

const ValidPass = () => {
    return ( <div>
        
        <div className="container">
  <form>
    <label for="usrname">Username</label>
    <input type="text" id="usrname" name="usrname" required />

    <label for="psw">Password</label>
  <  input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />

    <input type="submit" value="Submit" />
  </form>
</div>
<div id="message">
  <h3>Password must contain the following:</h3>
  <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
  <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
  <p id="number" className="invalid">A <b>number</b></p>
  <p id="length" className="invalid">Minimum <b>8 characters</b></p>
</div>
    </div> );
}
 
export default ValidPass;