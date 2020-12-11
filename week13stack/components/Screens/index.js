import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './components/SignIn;'
import exerciseOne from './components/exerciseOne'

const screens = {
    SignIn: {
        screen: SignIn
    },
    exerciseOne: {screen: exerciseOne}
}

const Screens = createStackNavigator(screens);

export default createAppContainer(HomeStack)