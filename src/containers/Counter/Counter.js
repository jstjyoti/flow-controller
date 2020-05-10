import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }


    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.onDecrementCounter}  />
                
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type:'DECREMENT'})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);