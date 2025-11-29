import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/styles/primary'

const Favorites = () => {
  return (
    <View style={styles.containers}>
      <View style={styles.header}><Text style={styles.title}>Favorites</Text></View>
    </View>
  )
}


export default Favorites