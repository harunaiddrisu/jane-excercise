import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { GITHUB_PERSONAL_ACCESS_TOKEN } from 'react-native-dotenv'

const cache = new InMemoryCache()

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
})

export default new ApolloClient({
  link: httpLink,
  cache,
})
