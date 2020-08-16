import * as React from 'react'
import { render } from '@testing-library/react-native'

import MainNavigator from '../index'
import { Provider as PaperProvider } from 'react-native-paper'
import { MockedProvider } from '@apollo/client/testing'
import apolloMock from './apollo.mock'

const mockSetState = jest.fn()

jest.mock('react', () => ({
  useApolloClient: () => {},
  useState: (initial: any) => [initial, mockSetState],
  useEffect: () => {},
}))

describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    const component = (
      <MockedProvider mocks={apolloMock} addTypename={false}>
        <PaperProvider>
          <MainNavigator />
        </PaperProvider>
      </MockedProvider>
    )

    const { findByText, getByTestId } = await render(component)

    const wrapperID = await getByTestId('wrapper_id')
    const header = await findByText('My repositories')
    const unstarredRepoText = await findByText('Unstarred Repositories')
    const starredRepoText = await findByText('Starred Repositories')

    expect(wrapperID).toBeTruthy()
    expect(header).toBeTruthy()
    expect(unstarredRepoText).toBeTruthy()
    expect(starredRepoText).toBeTruthy()
  })
})
