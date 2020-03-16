import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import * as VIcons from '@expo/vector-icons';

export default function Icon({ icon, size, color }) {
	const { iconFont, iconName, path } = icon;
	const Ic = VIcons[iconFont];

	switch (iconFont) {
		case 'AssetIcons':
			return (
				<Image
					style={{
						width: size,
						height: size,
						resizeMode: 'contain',
						tintColor: color,
					}}
					source={path}
				/>
			);
		default:
			return <Ic name={iconName} size={size} color={color} />;
	}
}

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	size: PropTypes.number,
	color: PropTypes.string,
};

Icon.defaultProps = {
	size: 20,
	color: '#000',
};
