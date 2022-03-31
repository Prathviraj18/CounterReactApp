import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'


class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
           
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
   
    render() {
        return (
            <div className="counter">
                <CounterButton by ={1} incrementMethods={this.increment} decrementMethods={this.decrement} ></CounterButton>
                <CounterButton by={5} incrementMethods={this.increment} decrementMethods={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethods={this.increment} decrementMethods={this.decrement}></CounterButton>
                <span className="count">{this.state.counter}</span>
               <div> <button className='reset' onClick={this.reset}>Reset</button></div>
            </div>
        );
    }
    increment(by) {
        console.log(`increment from parent ${by}`);
        this.setState(
           //one way of returning object back
            // {counter: this.state.counter + by}
            //below is another way of returning object
          /*  () => {
                return {counter: this.state.counter + by}   
            */
           //below is also a same fun but it is easy to read as prevState we are passing
           //and incrementing by adding prev value
            (prevState) => {
            return {counter: prevState.counter + by}   
        }
        );
   
        
    }
    decrement(by) {
        console.log(`increment from parent ${by}`);
        this.setState(
           
            (prevState) => {
            return {counter: prevState.counter - by}   
        }
        );
   
        
    }

    reset(by) {
        console.log(`reset ${by}`);
        this.setState({
        counter: 0   
        }
        );
   
        
    }
}

class CounterButton extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         counter: 0,
    //         secondCounter: 100
    //     }
    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
    // }
    render() {
        return (
            <div className="counterButton">
                <button onClick={()=>{this.props.incrementMethods(this.props.by)}}>+{this.props.by}</button>
                <button onClick={()=> {this.props.decrementMethods(this.props.by)}}>-{this.props.by}</button>
                {/*<span className="count">{this.state.counter}</span>
                <span className="count">{this.state.secondCounter}</span>*/}
            </div>
        )

    }
    // increment() {
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //         //secondCounter: this.state.secondCounter + this.props.by
    //     });
    //     this.props.incrementMethods(this.props.by);
    //     //calling increment method & passing this.props.by to mention how much to incremrent
    // }

    // decrement() {
    //     this.setState({
    //         counter: this.state.counter - this.props.by
    //         //secondCounter: this.state.secondCounter + this.props.by
    //     });
    //     this.props.decrementMethods(this.props.by);
    //     //calling increment method & passing this.props.by to mention how much to incremrent
    // }

}

CounterButton.defaultProps = {
    by: 1
    //setting default value to imcrement by 1
}

CounterButton.propTypes = {
    by: PropTypes.number
    //setting datatype of button as number
}

export default Counter;