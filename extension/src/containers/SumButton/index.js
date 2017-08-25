import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sumButtonClick} from '../../redux/actions'

class SumButton extends Component {
    render() {
    	console.log(this.props.num_clicks);
        var num_clicks = (this.props.myprops) ? this.props.myprops.sum_clicks : 0;
            
        return (
            <div>
                <div>You have clicked the button {num_clicks} times</div>
                <input type="button" onClick={() => this.props.sumButtonClick(num_clicks)} value="Click Me!"/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		sumButtonClick: sumButtonClick
	}, dispatch);
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
	var myreducer = state.mockreducer;
    return {
        myprops: state.mockreducer
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SumButton);