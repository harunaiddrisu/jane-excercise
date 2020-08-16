import React from 'react'
import {act, render} from '@testing-library/react-native'

import Header from '../header'

const HEADER_TEXT = "My repositories"

// jest.useFakeTimers()
// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('Testing Header component', () => {
  test('should render correctly and show the given header title text', async () => {
    const component = <Header headerText={HEADER_TEXT} />

    const { findByText, findByTestId } = await render(component)

    const headerWrapperId = await findByTestId("header_wrapper")
    const headerText = await findByText(HEADER_TEXT)

    expect(headerWrapperId).toBeTruthy()
    expect(headerText).toBeTruthy()
  })
})
