import * as Font from 'expo-font';

import MontserratRegular from '../assets/fonts/Montserrat-Regular.ttf';
import MontserratMedium from '../assets/fonts/Montserrat-Medium.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

async function loadFonts() {
	await Font.loadAsync({
		'Montserrat-Regular': MontserratRegular,
		'Montserrat-Medium': MontserratMedium,
		'Montserrat-Bold': MontserratBold,
	});
}

export default loadFonts;
