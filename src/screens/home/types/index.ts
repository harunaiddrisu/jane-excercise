export interface RepoNode {
  description: string
  id: string
  nameWithOwner: string
  viewerHasStarred: boolean
}

interface PageInfo {
  endCursor: string
  hasNextPage: boolean
}

export interface GithubRepoSearchResult {
  search: {
    nodes: RepoNode[]
    pageInfo: PageInfo
  }
}
