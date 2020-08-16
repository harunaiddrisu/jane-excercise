import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import HomeScreenContainer from '../screens/home/containers'

const MainNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Home: {
        screen: HomeScreenContainer,
      },
    },
    {
      initialRouteName: 'Home',
    }
  )
)

export default MainNavigator
