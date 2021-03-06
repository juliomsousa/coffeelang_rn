import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	View,
	SafeAreaView,
	Clipboard,
	Button,
	StyleSheet,
	FlatList,
} from 'react-native';
import { SelectableText } from '@astrocoders/react-native-selectable-text';
import { Text } from '../../components';

// import { Container } from './styles';

export default function Reader({ navigation }) {
	const [selection, setSelection] = useState({});

	function getDifficultyColor(difficulty) {
		switch (difficulty) {
			case 1:
				return '#46b5d1';
			case 2:
				return '#515585';
			case 3:
				return '#32407b';
			case 4:
				return '#151965';
			default:
				return '#000000';
		}
	}

	// const wordsList = [
	// 	{ word: 'lorem', difficulty: 4 },
	// 	{ word: 'is', difficulty: 3 },
	// 	{ word: 'a', difficulty: 2 },
	// 	{ word: 'ipsum', difficulty: 1 },
	// 	{ word: 'with', difficulty: 0 },
	// 	{ word: 'typesetting', difficulty: 3 },
	// ];

	const wordsList = useSelector(state => state.glossary.glossary);
	// console.tron.log(
	// 	'glossary',
	// 	useSelector(state => state.glossary)
	// );
	const [glossary, setGlossary] = useState(wordsList);
	const [selectedText, setSelectedText] = useState('');
	// console.log(mockText.split(/\s+/));

	const splitedText = mockText.split(/\s+/);

	function highlightWord(word) {
		console.log('word', word);
		if (!glossary.some(w => w.word.toLowerCase() === word.toLowerCase())) {
			setGlossary([...glossary, { word, difficulty: 4 }]);
			console.log(glossary);
		}
		// alert('cliclou');
	}

	function splitFormatedText() {
		return splitedText.map(textWord => {
			// console.log(words.includes(word));

			const glossaryWord = glossary.filter(
				w => w.word.toLowerCase() === textWord.toLowerCase()
			);

			return glossaryWord.length > 0 ? (
				<Text
					key={textWord + Math.random()}
					style={[
						styles.highlightedText,
						{ color: getDifficultyColor(glossaryWord[0].difficulty) },
					]}
					// selectable
					// selectionColor="red"
					onPress={() => {}}>{`${textWord} `}</Text>
			) : (
				<Text
					// selectable
					// selectionColor="red"
					// style={styles.text}
					key={textWord + Math.random()}
					style={[styles.highlightedText, { color: 'green' }]}
					onPress={() => {}}>{`${textWord} `}</Text>
			);
		});
	}

	// async function getContent() {
	// 	const clipboard = await Clipboard.getString();

	// 	setSelectedText(clipboard);
	// }

	return (
		<SafeAreaView
			style={{
				flex: 1,
				marginVertical: 36,
				marginHorizontal: 24,
				justifyContent: 'space-between',
				// backgroundColor: 'gray',
			}}>
			{/* <Text selectable>{splitFormatedText()}</Text> */}
			<SelectableText
				menuItems={['Add', 'Bar']}
				// highlights={[{ start: 1, end: 2 }]}
				highlightColor="red"
				/*
			Called when the user taps in a item of the selection menu:
			- eventType: (string) is the label
			- content: (string) the selected text portion
			- selectionStart: (int) is the start position of the selected text
			- selectionEnd: (int) is the end position of the selected text
		 */
				onSelection={({ eventType, content, selectionStart, selectionEnd }) => {
					setSelection({ eventType, content, selectionStart, selectionEnd });
					highlightWord(content);
				}}
				value={splitFormatedText()}
				style={styles.text}
			/>
			{/* <Button title="Copy" onPress={getContent} /> */}
			{/* <Text selectable>{selectedText}</Text> */}

			<Text>{JSON.stringify(selection)}</Text>
			<FlatList
				style={{ height: 100, borderWidth: 1 }}
				data={glossary}
				keyExtractor={item => item.word}
				renderItem={({ item }) => <Text>{item.word}</Text>}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		color: 'black',
	},
	highlightedText: {
		fontSize: 18,
		color: 'green',
	},
});

const mockText =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
