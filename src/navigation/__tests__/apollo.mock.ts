import {
  GET_REPOSITORIES,
  STAR_REPOSITORY,
  REMOVE_STAR_REPOSITORY,
} from '../../api/gql-queries'

const apolloMock = [
  {
    request: {
      query: GET_REPOSITORIES,
      variables: {
        query: 'react',
      },
    },
    result: {
      data: {
        search: {
          nodes: [
            {
              description:
                'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
              id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
              nameWithOwner: 'facebook/react',
              viewerHasStarred: true,
            },
            {
              description:
                ' React+webpack+redux+ant design+axios+less全家桶后台管理框架',
              id: 'MDEwOlJlcG9zaXRvcnk3NTM5NjU3NQ==',
              nameWithOwner: 'duxianwei520/react',
              viewerHasStarred: false,
            },
            {
              description: 'React docs in Chinese | React 中文文档翻译',
              id: 'MDEwOlJlcG9zaXRvcnk5MDc1OTkzMA==',
              nameWithOwner: 'discountry/react',
              viewerHasStarred: false,
            },
            {
              description: '京东首页构建',
              id: 'MDEwOlJlcG9zaXRvcnk3MjYyODI4NQ==',
              nameWithOwner: 'Cathy0807/react',
              viewerHasStarred: false,
            },
            {
              description: '基于react的企业后台管理开发框架',
              id: 'MDEwOlJlcG9zaXRvcnk3NzUxMzQxOQ==',
              nameWithOwner: 'react-redux-antd-es6/react',
              viewerHasStarred: false,
            },
            {
              description:
                'This repository contains all the material for the HackYourFuture module',
              id: 'MDEwOlJlcG9zaXRvcnk5MzUwMzU0NQ==',
              nameWithOwner: 'HackYourFuture/React',
              viewerHasStarred: false,
            },
            {
              description:
                'Cocoa framework and Obj-C dynamism bindings for ReactiveSwift.',
              id: 'MDEwOlJlcG9zaXRvcnkzNjA2NjI0',
              nameWithOwner: 'ReactiveCocoa/ReactiveCocoa',
              viewerHasStarred: false,
            },
            {
              description: 'A framework for building native apps with React.',
              id: 'MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ==',
              nameWithOwner: 'facebook/react-native',
              viewerHasStarred: true,
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: STAR_REPOSITORY,
      variables: {
        repositoryId: 'MDEwOlJlcG9zaXRvcnk5MzUwMzU0NQ==',
      },
    },
    result: {
      data: {
        id: 'MDEwOlJlcG9zaXRvcnk5MzUwMzU0NQ==',
        viewerHasStarred: true,
      },
    },
  },
  {
    request: {
      query: REMOVE_STAR_REPOSITORY,
      variables: {
        repositoryId: 'MDEwOlJlcG9zaXRvcnk5MzUwMzU0NQ==',
      },
    },
    result: {
      data: {
        id: 'MDEwOlJlcG9zaXRvcnk5MzUwMzU0NQ==',
        viewerHasStarred: false,
      },
    },
  },
]
export default apolloMock
