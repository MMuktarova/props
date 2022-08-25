import React from "react";
class Counter extends React.Component {
    constructor() {
        super()
        this.state = { counter: 10 }
        //this.handlerClickUp = this.handlerClickUp.bind(this)
        //this.handlerClickDown = this.handlerClickDown.bind(this)
    }
    handlerClickUp =()=> {
        this.setState({ counter:this.state.counter + 1})
    }
   // handlerClickDown =()=> {
      //  this.setState({counter:this.state.counter - 1})
   // }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handlerClickUp}>ADD 1</button>
                <button onClick={()=>this.setState({counter:this.state.counter - 1})}>REMOVE 1</button>
        </div>
    )
}
}

export default Counter