import {createStackNavigator} from '@react-navigation/stack';

import WudlanndvildExplorrtab from '../../WudlanndvildExplorrtab.tsx';

import WudlanndvildExplorrloade from '../WudlanndvildExplorrcpn/WudlanndvildExplorrloade.tsx';
import WudlanndvildExplorronbr from '../WudlanndvildExplorrscrns/WudlanndvildExplorronbr.tsx';
import WudlanndvildExplorrlocdet from '../WudlanndvildExplorrscrns/WudlanndvildExplorrlocdet.tsx';

import WudlanndvildExplorrraradet from '../WudlanndvildExplorrscrns/WudlanndvildExplorrraradet.tsx';
import WudlanndvildExplorrfactsquiz from '../WudlanndvildExplorrscrns/WudlanndvildExplorrfactsquiz.tsx';
import WudlanndvildExplorrfactsresult from '../WudlanndvildExplorrscrns/WudlanndvildExplorrfactsresult.tsx';

import {WudlanndvildExplorrFavoritesProvider} from '../WudlanndvildExplorrdata/WudlanndvildExplorrfavorites-context';
import WudlanndvildExplorrminigpll from '../WudlanndvildExplorrscrns/WudlanndvildExplorrminigpll.tsx';

const Stack = createStackNavigator();

const WudlanndvildExplorrstack = () => {
  return (
    <WudlanndvildExplorrFavoritesProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="WudlanndvildExplorrloade"
          component={WudlanndvildExplorrloade}
        />
        <Stack.Screen
          name="WudlanndvildExplorronbr"
          component={WudlanndvildExplorronbr}
        />
        <Stack.Screen
          name="WudlanndvildExplorrtab"
          component={WudlanndvildExplorrtab}
        />
        <Stack.Screen
          name="WudlanndvildExplorrlocdet"
          component={WudlanndvildExplorrlocdet}
        />
        <Stack.Screen
          name="WudlanndvildExplorrraradet"
          component={WudlanndvildExplorrraradet}
        />
        <Stack.Screen
          name="WudlanndvildExplorrfactsquiz"
          component={WudlanndvildExplorrfactsquiz}
        />
        <Stack.Screen
          name="WudlanndvildExplorrfactsresult"
          component={WudlanndvildExplorrfactsresult}
        />
        <Stack.Screen
          name="WudlanndvildExplorrminigpll"
          component={WudlanndvildExplorrminigpll}
        />
      </Stack.Navigator>
    </WudlanndvildExplorrFavoritesProvider>
  );
};

export default WudlanndvildExplorrstack;
