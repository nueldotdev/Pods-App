import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from '@/styles/primary'

// @ts-expect-error
import Octicons from 'react-native-vector-icons/Octicons';

const Search = () => {
	return (
		<View style={styles.containers}>
			<View style={styles.header}><Text style={styles.title}>Search</Text>
				<Pressable style={styles.headerBtn}>
					<Octicons name="search" color="#fff" size={24} />
				</Pressable>
			</View>
		</View>
	)
}


export default Search