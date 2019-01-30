import React from 'react';
import { NavLink, NavItem} from 'react-router-dom';
import { Media,Container, Row, Col } from 'reactstrap';


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
     
              <Col md="3">
                    <a className="navbar-brand" href="/">Industry 4.0 Workbench</a>
                    
              </Col>
              <Col md="5 //#endregion">
              </Col>
              <Col md="1">
                 <NavLink to={"/"} activeStyle={{ color: "#222" }}> Home </NavLink> 
              </Col>
              <Col md="2">
            {/*   <img src={'/assets/icons/login.jpg'} imageWrapper={{height: 20, width: 20}}/> */}
                {!this.props.isLoggedIn &&  <NavLink to={"/login"} activeStyle={{ color: "#222" }}> Login </NavLink> }
              </Col>
              <Col md="1">

                {!this.props.isLoggedIn && <NavLink to={"/signup"} activeStyle={{ color: "#222" }}> Signup </NavLink> }
                {this.props.isLoggedIn &&  <NavLink to={"/logout"} activeStyle={{ color: "#222" }}> Logout </NavLink> }
                {this.props.isLoggedIn &&  <a>USER {this.props.loggedUserName} </a>  }
              </Col>
 
    </nav>
)}


}
 
