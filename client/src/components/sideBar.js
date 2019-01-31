import React from 'react';
import { NavLink, NavItem} from 'react-router-dom';
import ProcessSidebarComp from './processSidebar';
import { Media,Container, Row, Col } from 'reactstrap';
import { FaUser, FaSignOutAlt, FaInfinity, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
    }
  }
render(){
  return(
    <Container style={{paddingLeft:"0px", paddingRight:"0px"}}>
    <Row style={{backgroundColor:"#888888", paddingLeft:"10px"}}>
     <h4>Industry 4.0 <br></br>Workbench</h4> 
     </Row>
     <Row style={{paddingLeft:"2rem"}}>
            <ul className="nav navbar-nav ">
                  {this.props.isLoggedIn && <li> <NavLink to={"/"} activeStyle={{ color: "#222" }}><FaInfinity/> Home </NavLink> </li> }
                 
                  {this.props.isLoggedIn && <li> <ProcessSidebarComp isLoggedIn={this.state.inSession} loggedUserName={this.state.loggedUserName}/> </li> }
                                
                  {this.props.isLoggedIn && <li> <NavLink to={"/logout"} activeStyle={{ color: "#ccc" }}> <FaSignOutAlt/> Logout </NavLink> </li> }
                  {!this.props.isLoggedIn && <li> <NavLink to={"/login"} activeStyle={{ color: "#ccc" }}> <FaSignInAlt/> Login </NavLink> </li>}
                  
                  
                  
            </ul>
            </Row>   
    </Container>    
)}


}
 

{/* <nav className="navbar navbar-inverse" >
<div className="container-fluid">
    <ul className="nav navbar-nav ">
          {this.props.isLoggedIn && <li> <NavLink to={"/"} activeStyle={{ color: "#222" }}><FaInfinity/> Home </NavLink> </li> }
         
          {this.props.isLoggedIn && <li> <ProcessSidebarComp isLoggedIn={this.state.inSession} loggedUserName={this.state.loggedUserName}/> </li> }
                        
          {this.props.isLoggedIn && <li> <NavLink to={"/logout"} activeStyle={{ color: "#ccc" }}> <FaSignOutAlt/> Logout </NavLink> </li> }
          {!this.props.isLoggedIn && <li> <NavLink to={"/login"} activeStyle={{ color: "#ccc" }}> <FaSignInAlt/> Login </NavLink> </li>}
          
          
          
    </ul>
 
</div>
</nav> */}