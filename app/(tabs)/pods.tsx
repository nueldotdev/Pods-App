import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React from 'react'
import { styles } from '@/styles/primary'

// @ts-expect-error
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-expect-error
import Octicons from 'react-native-vector-icons/Octicons';
// @ts-ignore
import PodsPng from '../../assets/images/download.png'
import { BlurView } from 'expo-blur';

const MainListData = [
	{ id: '1', title: 'Productivity Power', favorite: true },
	{ id: '2', title: 'Health & Wellness', favorite: false },
	{ id: '3', title: 'Creative Corner', favorite: true },
	{ id: '4', title: 'Coding Sessions', favorite: false },
	{ id: '5', title: 'Networking Nook', favorite: false },
	{ id: '6', title: 'Study Focus', favorite: true },
	{ id: '7', title: 'Language Exchange', favorite: false },
	{ id: '8', title: 'Book Club', favorite: false },
	{ id: '9', title: 'Startup Lab', favorite: true },
	{ id: '10', title: 'Morning Routine', favorite: false },
	{ id: '11', title: 'Deep Work', favorite: true },
	{ id: '12', title: 'Maker Space', favorite: false },
	{ id: '13', title: 'Motivation Boost', favorite: false },
	{ id: '14', title: 'Fitness Challenge', favorite: true },
];

const DOUBLE_TAP_DELAY = 300;

const ListScreen = () => {
	const [listData, setListData] = React.useState(MainListData);

	// If you want double tap "favorite" logic, here's a template:
	// const lastTapRef = React.useRef<Record<string, number>>({});
	// const handleDoubleTap = React.useCallback((id: string) => {
	//   const now = Date.now();
	//   const lastTap = lastTapRef.current[id] ?? 0;
	//   if (now - lastTap < DOUBLE_TAP_DELAY) {
	//     setListData((prev) =>
	//       prev.map((item) =>
	//         item.id === id ? { ...item, favorite: !item.favorite } : item
	//       )
	//     );
	//     lastTapRef.current[id] = 0;
	//   } else {
	//     lastTapRef.current[id] = now;
	//   }
	// }, []);

	return (
		<FlatList
			data={listData}
			keyExtractor={(item) => item.id}
			numColumns={2}
			columnWrapperStyle={{ justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 16, paddingHorizontal: 0, paddingLeft: 0, marginTop: 10 }}
			renderItem={({ item }) => (
				<View
					key={item.id}
					style={[styles.listItem, styles.cardLayout, {
						margin: 0,  marginVertical: 0, width: 160,
						height: 170
					}]}
				>
					<BlurView
						intensity={35}
						tint="dark"
						style={styles.blurCardOverlay}
					>
						<Image source={PodsPng} style={{ width: 50, height: 50, zIndex: 1, alignSelf: 'center' }} />
						<Text style={[styles.cardText, { color: '#CDE1FF', zIndex: 1, textAlign: 'center', marginTop: 10 }]}>
							{item.title}
						</Text>
					</BlurView>
				</View>
			)}
			ListHeaderComponent={
				<View>
					<Text style={styles.sectionHeader}>All Pods</Text>
				</View>
			}
			ListFooterComponent={<View style={{ height: 50, marginBottom: 50 }} />}
			showsVerticalScrollIndicator={false}
		/>
	);
};

const Pods = () => {
	return (
		<View style={styles.containers}>
			<View style={styles.header}>
				<Text style={styles.title}>Pods</Text>
				<Pressable style={styles.headerBtn}>
					<MaterialCommunityIcons name="folder-plus-outline" color="#fff" size={24} />
				</Pressable>
			</View>
			<View>
				<ListScreen />
			</View>
		</View>
	)
}

export default Pods