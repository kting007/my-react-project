import React from 'react'
import { connect } from 'react-redux'
import {login} from './auth.redux'
import {Redirect} from 'react-router-dom'

class Login extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return(
            <div>
                {this.props.isAuth?<Redirect to='/DashUrl'></Redirect>:null}
                <h2>无权限查看，请登录</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
Login=connect(
    state=>state.auth,
    {login}
)(Login)
export default Login