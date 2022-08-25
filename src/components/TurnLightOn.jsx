import React from "react";

class TurnLightOn extends React.Component{
    constructor() {
        super()
        this.state = {isTheLightOn:false}
    }

    handlerClickUp =()=> {
        this.setState({ isTheLightOn:true})
    }

    handlerClickDown = () => {
        this.setState({isTheLightOn:false})
    }
    render() {
        const lightOn = "https://media2.giphy.com/media/26BkNrGhy4DKnbD9u/giphy.gif?cid=ecf05e476l7j8ye6ksk1brmu0rncumn9fmukoj9p262btao8&rid=giphy.gif"

        const lightOff = "https://media2.giphy.com/media/26BkNrGhy4DKnbD9u/giphy_s.gif?cid=ecf05e476l7j8ye6ksk1brmu0rncumn9fmukoj9p262btao8&rid=giphy_s.gif"

        return (
            <div>
                <img src={this.state.isTheLightOn ? lightOn : lightOff } alt="light" /> <br/>
                <button onClick={this.handlerClickUp}>Turn On</button>
                <button onClick={this.handlerClickDown}>Turn Off</button>
            </div>
     )       
   }
}

export default TurnLightOn