import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ headerText }: { headerText: string }) => {
  const { textStyle, viewStyle } = styles
  return (
    <View testID="header_wrapper" style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20,
  },
})

export default Header
