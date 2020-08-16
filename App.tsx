import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ApolloProvider } from '@apollo/react-hooks'

import client from './src/api/client'
import MainNavigator from './src/navigation'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </ApolloProvider>
  )
}

export default App
