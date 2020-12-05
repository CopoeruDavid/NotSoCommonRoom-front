import React from 'react';
import '../App.css';
import './Login.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

export class Login extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
  
    // render() {
    //   return (
    //     <div className = "container">
    //       <div className = "row">
    //          <div className = "card col-md-6 offset-md-3">
    //             <h3 className = "text-center">Log-in Page</h3>
    //                 <div className = "card-body">
    //                   <form>
    //                    <div className = "form-group">
    //                      <label>Username</label>
    //                      <input placeholder = "Username" name = "username" className = "form-control"/>
    //                     </div>
    //                 <div className = "form-group">
    //                                         <label>Password</label>
    //                                         <input placeholder = "Password" name = "password" className = "form-control"/>
    //                 </div>

    //                 <button className = "btn btn-success" >Log In</button>
    //                 </form>
    //            </div>          
    //           </div>
    //       </div>
    //     </div>
    //   );
    // }

      constructor(props) {
        super(props);
    
        this.state = {
          username: null,
          password: null,
          formErrors: {
            username: "",
            password: ""
          }
        };
      }
    
      render() {
        const { formErrors } = this.state;
    
        return (
          <div className="wrapper">
            <div className="form-wrapper">
              <h1>LOG IN</h1>
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="username">
                  <input
                    className={formErrors.username.length > 0 ? "error" : null}
                    placeholder="Username"
                    type="eusername"
                    name="username"
                    noValidate
                    onChange={this.handleChange}
                  />
                </div>
                <div className="password">
                  <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Password"
                    type="password"
                    name="password"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>
                <div className="createAccount">
                  <button type="submit">LOG IN</button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    
}
  export default Login;