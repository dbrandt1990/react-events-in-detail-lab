// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {

    handleClick = (e) => {
        let xy = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(xy)
    }

    render() {
        return (<button onClick={this.handleClick}>Coordinates</button>)
    }
}

export default CoordinatesButton