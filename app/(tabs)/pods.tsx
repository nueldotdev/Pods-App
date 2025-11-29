import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from '@/styles/primary'

// @ts-expect-error
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Pods = () => {
	return (
		<View style={styles.containers}>
			<View style={styles.header}><Text style={styles.title}>Pods</Text>
				<Pressable style={styles.headerBtn}>
					<MaterialCommunityIcons name="folder-plus-outline" color="#fff" size={24} />
				</Pressable>
			</View>
		</View>
	)
}


export default Pods