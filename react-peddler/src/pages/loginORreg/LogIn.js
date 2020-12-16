import React from 'react';
import FormInput from '../../components/form-input/FormInput'
import Button from '../../components/button/Button'
import './LogIn.scss'

class LogIn extends React.Component{
  
  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({email: '', password: ''})
  }

  handleChange = e => {
    const {value, name} = e.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span> 

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange} 
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            required
          />
          {/* <label>Email</label> */}
          <FormInput
            handleChange={this.handleChange} 
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            required
          />
          {/* <label>Password</label> */}
          <Button type='submit'>Sign</Button>
        </form>     
      </div>
    );
  }
};


export default LogIn;