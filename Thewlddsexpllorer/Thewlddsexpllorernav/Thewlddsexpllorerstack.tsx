import {createStackNavigator} from '@react-navigation/stack';

import Thewlddsexpllorertab from '../../Thewlddsexpllorertab.tsx';

import Thewlddsexpllorerloade from '../Thewlddsexpllorercpn/Thewlddsexpllorerloade.tsx';
import Thewlddsexplloreronbr from '../Thewlddsexpllorerscrns/Thewlddsexplloreronbr.tsx';
import Thewlddsexpllorerlocdet from '../Thewlddsexpllorerscrns/Thewlddsexpllorerlocdet.tsx';

import Thewlddsexpllorerraradet from '../Thewlddsexpllorerscrns/Thewlddsexpllorerraradet.tsx';
import Thewlddsexpllorerfactsquiz from '../Thewlddsexpllorerscrns/Thewlddsexpllorerfactsquiz.tsx';
import Thewlddsexpllorerfactsresult from '../Thewlddsexpllorerscrns/Thewlddsexpllorerfactsresult.tsx';

import {ThewlddsexpllorerFavoritesProvider} from '../Thewlddsexpllorerdata/Thewlddsexpllorerfavorites-context';
import Thewlddsexpllorerminigpll from '../Thewlddsexpllorerscrns/Thewlddsexpllorerminigpll.tsx';

const Stack = createStackNavigator();

const Thewlddsexpllorerstack = () => {
  return (
    <ThewlddsexpllorerFavoritesProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Thewlddsexpllorerloade"
          component={Thewlddsexpllorerloade}
        />
        <Stack.Screen
          name="Thewlddsexplloreronbr"
          component={Thewlddsexplloreronbr}
        />
        <Stack.Screen
          name="Thewlddsexpllorertab"
          component={Thewlddsexpllorertab}
        />
        <Stack.Screen
          name="Thewlddsexpllorerlocdet"
          component={Thewlddsexpllorerlocdet}
        />
        <Stack.Screen
          name="Thewlddsexpllorerraradet"
          component={Thewlddsexpllorerraradet}
        />
        <Stack.Screen
          name="Thewlddsexpllorerfactsquiz"
          component={Thewlddsexpllorerfactsquiz}
        />
        <Stack.Screen
          name="Thewlddsexpllorerfactsresult"
          component={Thewlddsexpllorerfactsresult}
        />
        <Stack.Screen
          name="Thewlddsexpllorerminigpll"
          component={Thewlddsexpllorerminigpll}
        />
      </Stack.Navigator>
    </ThewlddsexpllorerFavoritesProvider>
  );
};

export default Thewlddsexpllorerstack;
