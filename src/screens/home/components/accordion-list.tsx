import React, { FC } from 'react'
import { List, Text } from 'react-native-paper'
import { RepoNode } from '../types'
import { TouchableOpacity, View } from 'react-native'

interface BaseProps {
  onListItemPress: (listItem: RepoNode) => void
}

interface AccordionListItemProps extends BaseProps {
  listItemData: RepoNode
}

interface AccordionProps extends BaseProps {
  listData: RepoNode[]
}

const AccordionListItem: FC<AccordionListItemProps> = ({
  listItemData,
  onListItemPress,
}) => (
  <TouchableOpacity>
    <List.Item
      title={listItemData.nameWithOwner}
      onPress={() => onListItemPress(listItemData)}
    />
  </TouchableOpacity>
)

const AccordionList: FC<AccordionProps> = ({ listData, onListItemPress }) => {
  const getListItems = (starred: boolean = false) => {
    const listItemsData = listData?.filter(
      (item) => item.viewerHasStarred === starred
    )
    return (
      listItemsData &&
      listItemsData.length > 0 &&
      listItemsData.map((listItemData) => (
        <AccordionListItem
          key={listItemData.id}
          listItemData={listItemData}
          onListItemPress={onListItemPress}
        />
      ))
    )
  }

  return (
    <List.AccordionGroup>
      <List.Accordion
        id="accordion_1"
        title="Unstarred Repositories"
        left={() => (
          <Text>
            {listData.filter((item) => !item.viewerHasStarred).length}
          </Text>
        )}
      >
        <View>{getListItems()}</View>
      </List.Accordion>

      <List.Accordion
        id="accordion_2"
        title="Starred Repositories"
        left={() => (
          <Text>{listData.filter((item) => item.viewerHasStarred).length}</Text>
        )}
      >
        <View>{getListItems(true)}</View>
      </List.Accordion>
    </List.AccordionGroup>
  )
}

export default AccordionList
