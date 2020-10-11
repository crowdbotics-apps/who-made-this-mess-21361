import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera1138050Navigator from '../features/Camera1138050/navigator';
import Messaging2138049Navigator from '../features/Messaging2138049/navigator';
import EmailAuth3138048Navigator from '../features/EmailAuth3138048/navigator';
import Tutorial4138047Navigator from '../features/Tutorial4138047/navigator';
import UserProfile7138044Navigator from '../features/UserProfile7138044/navigator';
import Settings9138042Navigator from '../features/Settings9138042/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Camera1138050: { screen: Camera1138050Navigator },
Messaging2138049: { screen: Messaging2138049Navigator },
EmailAuth3138048: { screen: EmailAuth3138048Navigator },
Tutorial4138047: { screen: Tutorial4138047Navigator },
UserProfile7138044: { screen: UserProfile7138044Navigator },
Settings9138042: { screen: Settings9138042Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
