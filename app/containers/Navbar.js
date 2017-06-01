import React from 'react';
import { Link, browserHistory } from 'react-router';



export default class Navbar extends React.Component {
    constructor(props) {
        super();
        this.state = { selected: 'Home' };
        this.onClickChangeActiveState = this.onClickChangeActiveState.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    onClickChangeActiveState(filter) {

        this.setState({ selected: filter });

    }
    isActive(value) {
        // alert(this.state.selected)
        return ((value === this.state.selected) ? 'active' : 'none');
    }

    logoutUser() {
      localStorage.setItem('jwt_token', '');
      browserHistory.push('/login')
    }

    render() {
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav" >
                    <li  className={this.isActive('Play')} onClick={(evt)=>{this.onClickChangeActiveState('Play')}}><Link to='/play'>Home </Link></li>
                    <li  className={this.isActive('Login')}  onClick={(evt)=>{this.onClickChangeActiveState('Login')}}><Link to='login'>Login </Link></li>
                    <li  className={this.isActive('Register')}  onClick={(evt)=>{this.onClickChangeActiveState('Register')}}><Link to='register'>Register </Link></li>
                    <li  className={this.isActive('Logout')}  onClick={this.logoutUser.bind(this)}><a>Logout</a></li>

                  </ul>
                </div>
            </div>
          </nav>


        );
    }
}
