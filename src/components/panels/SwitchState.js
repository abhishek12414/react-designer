import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../shared/Icon';

const SwitchState = (props) => {
	let selected = props.value !== props.defaultValue;
	let newValue = selected ? props.defaultValue : props.nextState;
	return (
		<Icon
			icon={props.icon}
			active={selected}
			onClick={() => props.onChange(newValue)}
		/>
	);
};

SwitchState.propTypes = {
	icon: PropTypes.string,
	value: PropTypes.string,
	nextState: PropTypes.string,
	defaultValue: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default SwitchState;
