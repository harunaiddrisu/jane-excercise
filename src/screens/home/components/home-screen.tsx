import React, { FC } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native'
import {
  ActivityIndicator,
  Button,
  Colors,
  Dialog,
  Paragraph,
  Text,
  Portal,
} from 'react-native-paper'
import Header from '../../../components/header'
import { GithubRepoSearchResult, RepoNode } from '../types'
import Searchbar from './searchbar'
import AccordionList from './accordion-list'
import { GraphQLError } from 'graphql'

interface ErrorProps {
  message?: string
}

const ErrorDialog: FC<ErrorProps> = ({ message }) => {
  const [visible, setVisible] = React.useState<boolean>(!!message)

  const hideDialog = () => setVisible(false)

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{`Error: ${message}`}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  )
}

interface HomeScreenProps {
  loading?: boolean
  searchQuery: string
  data?: GithubRepoSearchResult
  errors?: {
    graphQLErrors?: GraphQLError[]
  }
  setSearchQuery: (query: string) => void
  onListItemPress: (listItem: RepoNode) => void
}

const HomeScreen: FC<HomeScreenProps> = ({
  loading,
  searchQuery,
  setSearchQuery,
  onListItemPress,
  data,
  errors,
}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView testID="wrapper_id">
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Header headerText="My repositories" />
            <View>
              {loading && (
                <ActivityIndicator animating={true} color={Colors.blue800} />
              )}
              {errors && (
                <ErrorDialog message={errors?.graphQLErrors?.[0]?.message} />
              )}
              {data && (
                <>
                  <Searchbar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                  <AccordionList
                    listData={data?.search?.nodes}
                    onListItemPress={onListItemPress}
                  />
                </>
              )}
              {!loading && !data && !errors && <Text>No data available</Text>}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default HomeScreen
