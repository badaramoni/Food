import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Stack } from "expo-router";

const ProductDetailsScreen = () => {
  const {id} = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{title: 'Details'}}/>
      <Text>ProductDetailsScreen {id}</Text>
    </View>
  )
}

export default ProductDetailsScreen;