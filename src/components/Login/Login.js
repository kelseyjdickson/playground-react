import React from 'react'

export default class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(console.log)
    }
    render() {
        return (
            <>

                <form>
                    <h1>Login</h1>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Login" />
                </form>
            </>

        )
    }
}