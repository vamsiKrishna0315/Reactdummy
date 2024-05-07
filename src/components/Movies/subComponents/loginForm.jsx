import React, { Component } from 'react';

class LoginForm extends Component {
    state ={
        account:{username: '', password: ''}
    }
       handleSubmit = e => {
        e.preventDefault();

        const username  = this.username.current.value;
        const password  = this.password.current.value;
    };

    handleChange = ({currentTarget: input}) =>{
        const account = {...this.state.account};
        // account.username = e.currenttarget.value;
        account[input.name] =input.value;
        this.setState({ account });
    }
    render() { 
        const {account} = this.state;
        return (<div>
           <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
                <label for="username">Email Id: </label>
                <input 
                autoFocus
                value= {account.username}
                onChange ={this.handleChange}
                name= "username"
                className='form-control-md' type='text' id='username' placeholder='Enter Your Email'>
                </input>
            </div>
            <div className='form-group'>
                <label for="password">Password: </label>
                <input value= {account.password} name= "password" className='form-control-md' type='password' id='password' placeholder='Enter Your Password'>
                </input>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
           </form>
        </div>);
    }
}
 
export default LoginForm;
