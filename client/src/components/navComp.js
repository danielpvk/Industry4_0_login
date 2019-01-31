import React from 'react';
import { NavLink, NavItem} from 'react-router-dom';
import { Media, Container, Row, Col, Navbar} from 'reactstrap';


export default class NavbarComp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
    }
  }
render(){
  return(
        <Navbar style={{alignItems:"right"}}>
              <Col md="3">
              </Col>
              <Col md="3">
                 <NavLink to={"/"} activeStyle={{ color: "#222" }}> Home </NavLink> 
              </Col>
              <Col md="3">
            {/*   <img src={'/assets/icons/login.jpg'} imageWrapper={{height: 20, width: 20}}/> */}
                {!this.props.isLoggedIn &&  <NavLink to={"/login"} activeStyle={{ color: "#222" }}> Login </NavLink> }
              </Col>
              <Col md="3">

                {!this.props.isLoggedIn && <NavLink to={"/signup"} activeStyle={{ color: "#222" }}> Signup </NavLink> }
                {this.props.isLoggedIn &&  <NavLink to={"/logout"} activeStyle={{ color: "#222" }}> Logout </NavLink> }
                {this.props.isLoggedIn &&  <a>USER {this.props.loggedUserName} </a>  }
              </Col>
      </Navbar>
 
   
)}


}
 
