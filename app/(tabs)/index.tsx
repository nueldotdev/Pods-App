

import { styles } from '@/styles/primary';
import React from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

// @ts-ignore
import Octicons from 'react-native-vector-icons/Octicons';
// @ts-ignore
import PodsPng from '../../assets/images/download.png'



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




const HorizontalList = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalContainer}>
    {Array.from({ length: 4 }).map((_, i) => (
      // 1. Outer Container: Apply layout and spacing styles here
      <View 
        key={i}
        style={[
          styles.cardLayout, // New style for dimensions/margins
          i === 3 && { marginRight: 25 }
        ]}
      >
        <BlurView
          intensity={35}
          tint="dark"
          style={styles.blurCardOverlay} 
        >
          {/* Foreground Content */}
          <Image source={PodsPng} style={{ width: 50, height: 50, zIndex: 1 }} />
          <Text style={[styles.cardText, { color: '#CDE1FF', zIndex: 1 }]}>
            {MainListData.slice(6, 10)[i]?.title}
          </Text>
        </BlurView>
      </View>
    ))}
  </ScrollView>
);


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