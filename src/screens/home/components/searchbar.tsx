import React, { FC, Fragment, useEffect, useState } from 'react'
import {
  Searchbar as RNPSearchbar,
  List,
  Surface,
  IconButton,
} from 'react-native-paper'
import { View } from 'react-native'

const SEARBAR_PLACEHOLDER = 'Enter search term'

interface SearchbarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const Searchbar: FC<SearchbarProps> = ({ searchQuery, setSearchQuery }) => {
  let searchBarRef: any

  const onChangeSearch = (query: string) => setSearchQuery(query)
  // const fromSearchBarProps = {
  //   ref: searchBarRef,
  //   icon: searchFocused ? "my-location" : "search",
  //   placeHolderText: SEARBAR_FROM_PLACEHOLDER,
  //   style: [styles.searchStyle, { marginTop: searchFocused ? 15 : 9 }],
  //   clearIcon: "arrow-back",
  //   placeholderTextColor: "rgba(195, 234, 241, 0.4)",
  //   iconColor: "#C3EAF1",
  //   inputStyle: styles.searchInputStyle,
  //   // onChangeText: (query: string) => setFromSearchQuery(query),
  //   // onSubmitEditing: snapBottomSheetToBottom,
  //   value: fromSearchQuery,
  // };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <RNPSearchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  )
}

export default Searchbar
