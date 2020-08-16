import gql from 'graphql-tag'

export const GET_REPOSITORIES = gql`
  query($query: String = "language:Javascript") {
    search(type: REPOSITORY, query: $query, first: 10) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        ... on Repository {
          id
          nameWithOwner
          description
          viewerHasStarred
        }
      }
    }
  }
`

export const STAR_REPOSITORY = gql`
  mutation AddStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`

export const REMOVE_STAR_REPOSITORY = gql`
  mutation AddStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`
