import React from 'react'
import App from './App.js';
import {Redirect} from 'react-router-dom'
import {logout} from './auth.redux'
import { connect } from 'react-redux'

class Dashboard extends React.Component{
    render() {
        const home =   (
            <div>
                <button onClick={this.props.logout}>注销</button>
                <h2>dashborad</h2>
                <App/>
            </div>
        )
        const logins = <Redirect to='/login'></Redirect>
        return this.props.isAuth?home:logins

    }
}
Dashboard=connect(
    state=>state.auth,
    {logout}
)(Dashboard)
export default Dashboard