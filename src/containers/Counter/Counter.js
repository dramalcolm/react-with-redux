import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0,
        
    }

    render () {

        console.log(this.props.storeResults);
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(strrs=>(
                        <li key={strrs.id} onClick={()=>this.props.onDeleteResult(strrs.id)}>{strrs.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResults: state.results
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: ()=>dispatch({type: 'INCREMENT'}),
        onDecrementCounter: ()=>dispatch({type: 'DECREMENT'}),
        onAddCounter: ()=>dispatch({type: 'ADD', value: 5}),
        onSubtractCounter: ()=>dispatch({type: 'SUBTRACT', value: 5}),
        onStoreResult: ()=>dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id)=>dispatch({type: 'DELETE_RESULT', resultID: id}),

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);