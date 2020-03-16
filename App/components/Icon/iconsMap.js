import {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome,
	FontAwesome5,
	Foundation,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
	Zocial,
} from '@expo/vector-icons';
import AssetIcons from '../../assets/images/icons';

function formatFontObject(iconFont, icons) {
	const iconList = Object.keys(icons);
	return iconList.reduce(
		(accumulator, target) => ({
			...accumulator,
			[target]: { iconFont, iconName: target },
		}),
		{}
	);
}

function formatAssetIconsObject(iconFont, icons) {
	const iconList = Object.keys(icons);
	return iconList.reduce(
		(accumulator, target) => ({
			...accumulator,
			[target]: { iconFont, iconName: target, path: icons[target] },
		}),
		{}
	);
}

export default {
	// PNG icons located at ../../assets/images/icons
	AssetIcons: {
		...formatAssetIconsObject('AssetIcons', AssetIcons),
	},
	// Icons from @expo/vector-icons
	AntDesign: { ...formatFontObject('AntDesign', AntDesign.getRawGlyphMap()) },
	Entypo: { ...formatFontObject('Entypo', Entypo.getRawGlyphMap()) },
	EvilIcons: { ...formatFontObject('EvilIcons', EvilIcons.getRawGlyphMap()) },
	Feather: { ...formatFontObject('Feather', Feather.getRawGlyphMap()) },
	FontAwesome: {
		...formatFontObject('FontAwesome', FontAwesome.getRawGlyphMap()),
	},
	FontAwesome5: {
		...formatFontObject('FontAwesome5', FontAwesome5.getRawGlyphMap()),
	},
	Foundation: {
		...formatFontObject('Foundation', Foundation.getRawGlyphMap()),
	},
	Ionicons: { ...formatFontObject('Ionicons', Ionicons.getRawGlyphMap()) },
	MaterialCommunityIcons: {
		...formatFontObject(
			'MaterialCommunityIcons',
			MaterialCommunityIcons.getRawGlyphMap()
		),
	},
	MaterialIcons: {
		...formatFontObject('MaterialIcons', MaterialIcons.getRawGlyphMap()),
	},
	Octicons: { ...formatFontObject('Octicons', Octicons.getRawGlyphMap()) },
	SimpleLineIcons: {
		...formatFontObject('SimpleLineIcons', SimpleLineIcons.getRawGlyphMap()),
	},
	Zocial: { ...formatFontObject('Zocial', Zocial.getRawGlyphMap()) },
};
