

import { styles } from '@/styles/primary';
import React from 'react';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
// @ts-expect-error 
import Octicons from 'react-native-vector-icons/Octicons';


const HorizontalList = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalContainer}>
    {Array.from({ length: 4 }).map((_, i) => (
      <View key={i} style={[styles.card, i == 3 ? {marginRight: 25} : {}]}>
        <Text style={styles.cardText}>Item {i + 1}</Text>
      </View>
    ))}
  </ScrollView>
);


const MainListData = [
    { id: '1', title: 'Pods: Productivity Power', favorite: true },
    { id: '2', title: 'Pods: Health & Wellness', favorite: false },
    { id: '3', title: 'Pods: Creative Corner', favorite: true },
    { id: '4', title: 'Pods: Coding Sessions', favorite: false },
    { id: '5', title: 'Pods: Networking Nook', favorite: false },
    { id: '6', title: 'Pods: Study Focus', favorite: true },
    { id: '7', title: 'Pods: Language Exchange', favorite: false },
    { id: '8', title: 'Pods: Book Club', favorite: false },
    { id: '9', title: 'Pods: Startup Lab', favorite: true },
    { id: '10', title: 'Pods: Morning Routine', favorite: false },
    { id: '11', title: 'Pods: Deep Work', favorite: true },
    { id: '12', title: 'Pods: Maker Space', favorite: false },
    { id: '13', title: 'Pods: Motivation Boost', favorite: false },
    { id: '14', title: 'Pods: Fitness Challenge', favorite: true },
];


const DOUBLE_TAP_DELAY = 300;

const ListScreen = () => {
  const [listData, setListData] = React.useState(MainListData.slice(0, 6));
  const lastTapRef = React.useRef<Record<string, number>>({});

  const handleDoubleTap = React.useCallback((id: string) => {
    const now = Date.now();
    const lastTap = lastTapRef.current[id] ?? 0;

    if (now - lastTap < DOUBLE_TAP_DELAY) {
      setListData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, favorite: !item.favorite } : item
        )
      );
      lastTapRef.current[id] = 0;
    } else {
      lastTapRef.current[id] = now;
    }
  }, []);

  return (
    <FlatList
      data={listData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          style={styles.listItem}
          onPress={() => handleDoubleTap(item.id)}
        >
          <Text style={styles.savedName}>{item.title}</Text>
					<View style={styles.likedItem}>
						{item.favorite && <Octicons name="star-fill" color={'rgba(219, 238, 47, 0.89)'} size={16} />}
					</View>
        </Pressable>
      )}
      
      // This will scroll up with the rest of the list body
      ListHeaderComponent={
        <View>
          <Text style={styles.sectionHeader}>Pods</Text>
          <HorizontalList /> 
          <Text style={styles.sectionHeader}>Recent Saves</Text>
        </View>
      }
      // Add a small footer or separator if you like
      ListFooterComponent={<View style={{ height: 50 }} />} 
    />
  );
};


const Index = () => {
  return (
    <View style={styles.containers}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
				<Pressable style={styles.headerBtn}>
					<Octicons name="plus-circle" color="#fff" size={24} />
				</Pressable>
      </View>
      <ListScreen />
    </View>
  );
};

export default Index