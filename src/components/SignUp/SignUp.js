import React from 'react'

class SignUp extends React.Component{

    state = {
        username: "",
        image: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(newUser => {
            this.props.handleLogin(newUser)
        } )
    }


render(){
    const {username, image, password } = this.state

    return(
        <form onSubmit={this.handleSubmit}>
            <h1>Signup</h1>

            <label>Username</label>
            <input 
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                />

            <label>Profile Image</label>
            <input 
                type="text"
                name="image"
                value={image}
                onChange={this.handleChange}
                />
                {/* <img alt={username}src={image.length ? image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.phpfoxer.com%2Fproducts-and-services%2Fphpfox-default-avatar&psig=AOvVaw1HU-81o8VioBmCluLnhZpx&ust=1607077973966000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJD6jpDOse0CFQAAAAAdAAAAABAD"}/> */}

            <label>Password</label>
            <input 
                type="password"
                name="password"
                autoComplete="current-password"
                value= {password} 
                onChange={this.handleChange}
                />
                <input type="submit" value="Submit"/>
        </form>

        )
    }
}

export default SignUp;