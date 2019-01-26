import React from 'react';
import { NavLink, NavItem} from 'react-router-dom';



export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
    }
  }
render(){
  return(
    <nav className="navbar navbar-inverse" >
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Industry 4.0 Workbench</a>
            </div>
         
            <ul className="nav navbar-nav ">
                  <li> <NavLink to={"/"} activeStyle={{ color: "#222" }}> Home </NavLink> </li>
                  {this.props.isLoggedIn && <li> <NavLink to={"/logout"} activeStyle={{ color: "#222" }}> Logout </NavLink> </li> }
                  {!this.props.isLoggedIn && <li> <NavLink to={"/login"} activeStyle={{ color: "#222" }}> Login </NavLink> </li>}
                  {!this.props.isLoggedIn && <li> <NavLink to={"/signup"} activeStyle={{ color: "#222" }}> Signup </NavLink> </li>
                  }
                </ul>
                <ul className='nav navbar-nav navbar-right'>
                  {this.props.isLoggedIn && <li> <a> {this.props.loggedUserName} </a> </li> }
                </ul>
            </div>
        
    </nav>
)}


}
 
/* 
render(){
  return (
    <div className='col-sm-10 col-sm-offset-1'>
      <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-div" aria-expanded="false">
                  <span className="sr-only">Toggle Nav</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <NavLink to={"/"} className="navbar-brand">React App</NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbar-div">
                <ul className="nav navbar-nav ">
                  <li> <NavLink to={"/"} activeStyle={{ color: "#222" }}> Home </NavLink> </li>
                  <li> <NavLink to={"/addProcess"} activeStyle={{ color: "#222" }}> Add Process </NavLink> </li>
              
                  {this.props.isLoggedIn && <li> <NavLink to={"/logout"} activeStyle={{ color: "#222" }}> Logout </NavLink> </li> }

                  {!this.props.isLoggedIn && <li> <NavLink to={"/login"} activeStyle={{ color: "#222" }}> Login </NavLink> </li>}
                  {!this.props.isLoggedIn && <li> <NavLink to={"/signup"} activeStyle={{ color: "#222" }}> Signup </NavLink> </li>
                  }
                </ul>
                <ul className='nav navbar-nav navbar-right'>
                  {this.props.isLoggedIn && <li> <a> {this.props.loggedUserName} </a> </li> }
                </ul>
            </div>
          </div>
      </nav>
    </div>
  );
} */