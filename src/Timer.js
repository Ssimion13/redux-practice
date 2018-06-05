import React, {Component} from "react";
import { connect } from 'react-redux';
import {addSecond, clearCount} from "./redux"

class Timer extends Component {
    constructor(){
        super();
        this.state = {}
        this.addSecond = this.addSecond.bind(this);
        this.clearCount = this.clearCount.bind(this);
    }

    addSecond() {
        this.timer = setInterval(()=> {this.props.addSecond()}, 1000);
    }

    clearCount() {
        this.props.clearCount();
        clearInterval(this.timer);
    }



    render(){
        return(
            <div>
                {this.props.seconds}
                
                <button onClick={this.addSecond} > Click Me! </button>
                <button onClick={this.clearCount} > Clear </button>
            </div>
        )
    }
}

export default connect(state => state, { addSecond, clearCount })(Timer);