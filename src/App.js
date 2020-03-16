
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Teacher from './component/teacher/Teacher';
import Student from './component/student/Student'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/student">Student</Link><br></br>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/teacher">Teacher</Link><br></br>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            {/* perpindahan */}
          <Switch> 
            <Route path="/student">
              <Student />
            </Route>
            <Route path="/teacher">
              <Teacher />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;



