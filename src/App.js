import react from 'react'
import { connect } from 'react-redux'
import { addDaPao, removeDaPao, addDaPaoAsync } from './app.redux'
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css'
class App extends react.Component{
  // constructor(props) {
  //   super(props);
  // }
  add=()=>{
      this.props.addDaPao()
  }
  remove=()=>{
      this.props.removeDaPao()
  }
    addGunAsync=()=>{
        this.props.addDaPaoAsync()
    }
  render() {
      const num = this.props.num;
    return(
        <div>
            <Button type='primary'  onClick={this.add}>增加傻大炮</Button>
            <Button type='primary'  onClick={this.remove}>回收傻大炮</Button>
            <Button type='primary'   onClick={this.addGunAsync}>等3秒再增加傻大炮</Button>
            <h1>这有{num}门傻大炮</h1>
        </div>
    );
  }
}
App= connect(
    state=>({num : state.daPao}),
    {addDaPao, removeDaPao, addDaPaoAsync}
)(App)
export default App
