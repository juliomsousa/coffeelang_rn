import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function Text({ fontWeight, ...rest }) {
	const { children } = rest;
	return (
		<RNText {...rest} style={[styles[fontWeight], { ...rest.style }]}>
			{children}
		</RNText>
	);
}

Text.propTypes = {
	fontWeight: PropTypes.string,
};

Text.defaultProps = {
	fontWeight: 'regular',
};
