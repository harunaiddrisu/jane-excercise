import React, { FC, useEffect, useState } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { HomeScreen } from '../components'
import {
  GET_REPOSITORIES,
  REMOVE_STAR_REPOSITORY,
  STAR_REPOSITORY,
} from '../../../api/gql-queries'
import { GithubRepoSearchResult, RepoNode } from '../types'
import { GraphQLError } from 'graphql'

interface QueryResult {
  data?: GithubRepoSearchResult
  // errors?: readonly GraphQLError[]
  loading?: boolean
}

interface QueryError {
  graphQLErrors?: GraphQLError[]
}

const HomeScreenContainer: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [queryResult, setQueryResult] = useState<QueryResult>()
  const [errors, setErrors] = useState<QueryError>()
  const [loading, setLoading] = useState(false)

  const client = useApolloClient()

  const runQuery = async (query: string) => {
    setLoading(true)
    try {
      const { data } = await client.query({
        query: GET_REPOSITORIES,
        variables: { query },
      })
      console.log('data', { data })
      setLoading(false)
      setQueryResult({ data, loading })
    } catch (errors) {
      console.log('errors', { errors })
      setErrors(errors)
    }
  }

  const handleListItemPress = async (listItem: RepoNode) => {
    setLoading(true)
    try {
      const { data, errors } = await client.mutate({
        mutation: listItem.viewerHasStarred
          ? REMOVE_STAR_REPOSITORY
          : STAR_REPOSITORY,
        variables: { repositoryId: listItem.id },
      })
      setLoading(false)
      if (data && !errors) {
        runQuery(searchQuery)
      }
    } catch (errors) {
      console.log('mutation errors', { errors })
      setErrors(errors)
    }
  }

  useEffect(() => {
    runQuery(searchQuery)
  }, [searchQuery])

  return (
    <HomeScreen
      {...queryResult}
      loading={loading}
      errors={errors}
      searchQuery={searchQuery}
      setSearchQuery={(query: string) => setSearchQuery(query)}
      onListItemPress={handleListItemPress}
    />
  )
}

export default HomeScreenContainer
