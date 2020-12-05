import React from 'react';
import '../App.css';
import './Login.css';

export class Login extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className = "container">
                     <div className = "row">
                         <div className = "card col-md-6 offset-md-3">
                            <h3 className = "text-center">Log-in Page</h3>
                            <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Username</label>
                                            <input placeholder = "Username" name = "username" className = "form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Password</label>
                                            <input placeholder = "Password" name = "password" className = "form-control"/>
                                        </div>

                                        <button className = "btn btn-success" >Log In</button>
                                    </form>
                            </div>          
                         </div>
                     </div>
        </div>
      );
    }
}
  export default Login;