import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Processes from "./components/processes";
import Login from "./components/login";
import AddProcess from "./components/addProcess";
import View from "./components/view";
import "./App.css";
import axios from "axios";
import LoginComp from "./components/loginComp";
import LogoutComp from "./components/logoutComp";
import SignupComp from "./components/signupComp";
import HomeComp from "./components/homeComp";
import NavbarComp from "./components/navComp";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";
import SidebarComp from "./components/sideBar";

class App extends Component {
  //**********login adds */
  constructor(props) {
    super(props);
    this.state = {
      inSession: false,
      loggedUserName: "",
      carDeleted: false
    };
    this.updateStatus = this.updateStatus.bind(this);
    this.destroyUserSession = this.destroyUserSession.bind(this);
  }

  componentDidMount() {
    this.checkInSession();
  }

  checkInSession = () => {
    axios
      .get("http://ec2-3-83-99-249.compute-1.amazonaws.com/api")
      .then(res => {
        this.setState({ inSession: res.data.inSession });
        console.log(this.inSession);
      })
      .catch(err => console.log(err));
  };

  updateStatus = (boolStatus, username) => {
    this.setState({ inSession: boolStatus, loggedUserName: username });
  };

  destroyUserSession = boolStatus => {
    this.setState({ inSession: boolStatus });
  };

  //******** login constructors end */

  render() {
    let isLoggedIn = this.state.isLoggedIn;
    return (
      <Container>
        <Row>
          <Col md="3" style={{backgroundColor: "#888888", paddingLeft:"10px", borderBottom: '1px double lavender'  }}>
        
                <h4>Industry 4.0 <br></br>Workbench</h4> 
            
          </Col>
          <Col md="9"style={{backgroundColor: '#ffffff',borderBottom: '1px double lavender'}}>
           
                <NavbarComp
                  isLoggedIn={this.state.inSession}
                  loggedUserName={this.state.loggedUserName}
                />
               
          </Col>
        </Row>

        <Row >
          <Col md="3" style={{backgroundColor: '#77aabb', height:"100vh",backgroundImage: `url(${"../../assets/images/industry-2.jpg"})`,backgroundRepeat: false }}>
            <SidebarComp
              isLoggedIn={this.state.inSession}
              loggedUserName={this.state.loggedUserName}
            />
          </Col>
          <Col md="9"style={{backgroundColor: '#f6f6f6',paddingLeft:"10px", borderBottom: '1px double lavender'}}>
            
            <Row>
            <Switch>
              <Route
                path={"/login/"}
                render={() => <LoginComp checkStatus={this.updateStatus} />}
              />
              <Route
                path={"/logout"}
                render={() => (
                  <LogoutComp
                    isLoggedUser={this.state.inSession}
                    logoutUser={this.destroyUserSession}
                  />
                )}
              />
              <Route path={"/signup"} component={SignupComp} />
            </Switch>
            </Row>
            <Row>
                 <Col md="1"></Col>
                <Col md="10">
            {this.state.inSession ? (
              <Switch>
                <Route path={"/addProcess"} render={() => <AddProcess />} />

                <Route path={"/"} render={() => <Processes />} />
                <Route path={"/view/:id"} render={props => <View {...props} />} />
              </Switch>
            ) : (
              <Route path={"/"} exact render={() => <HomeComp />} />
            )}
            </Col>
                <Col md="1"></Col> 
              </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

/* 
<div>
<NavbarComp isLoggedIn={this.state.inSession} loggedUserName={this.state.loggedUserName}/>



 <Route path={'/login/'} render={() => <LoginComp checkStatus={this.updateStatus} />} />
 <Route path={"/logout"} render={() => <LogoutComp isLoggedUser={this.state.inSession} logoutUser={this.destroyUserSession} />} />
 <Route path={"/signup"} component={SignupComp} />




 {this.state.inSession ? (
      <Route path={'/addProcess'} render={ () => <AddProcess/>}/>,
     <Route path={"/"} render={()=> <Processes/>}/>
     
     ):
     
     (<Route path={"/"} render={()=> <HomeComp />}/>)   
     
     
 }




</div>
 */
