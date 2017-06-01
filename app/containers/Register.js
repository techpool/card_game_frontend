import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
const HTTP_ENDPOINT = 'http://localhost:8000'

export class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0,
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleAgeChange(event) {
        this.setState({ age: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {

        const userDetails = this.state;

        axios.post(HTTP_ENDPOINT + '/users', {
                name: userDetails.name,
                email: userDetails.email,
                password: userDetails.password,
                age: userDetails.age
            })
            .then(function (response) {
                console.log(response);
                browserHistory.push('/login')
            })
            .catch(function (error) {
                console.log(error);
                alert('Something went wrong, make sure you supply all the fields')
            });
        event.preventDefault();
    }

    render() {

        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    Age:
                    <input type="number" value={this.state.age} onChange={this.handleAgeChange} />
                    Email:
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}
