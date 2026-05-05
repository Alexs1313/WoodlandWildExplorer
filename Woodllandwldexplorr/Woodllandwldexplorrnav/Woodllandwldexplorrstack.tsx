import {createStackNavigator} from '@react-navigation/stack';

import Woodllandwldexplorrtab from '../../Woodllandwldexplorrtab.tsx';

import Woodllandwldexplorrloade from '../Woodllandwldexplorrcpn/Woodllandwldexplorrloade.tsx';
import Woodllandwldexplorronbr from '../Woodllandwldexplorrscrns/Woodllandwldexplorronbr.tsx';
import Woodllandwldexplorrlocdet from '../Woodllandwldexplorrscrns/Woodllandwldexplorrlocdet.tsx';

import Woodllandwldexplorrraradet from '../Woodllandwldexplorrscrns/Woodllandwldexplorrraradet.tsx';
import Woodllandwldexplorrfactsquiz from '../Woodllandwldexplorrscrns/Woodllandwldexplorrfactsquiz.tsx';
import Woodllandwldexplorrfactsresult from '../Woodllandwldexplorrscrns/Woodllandwldexplorrfactsresult.tsx';

import {WodllandwldexplorrFavoritesProvider} from '../Woodllandwldexplorrdata/Woodllandwldexplorrfavorites-context';
import Woodllandwldexplorrminigpll from '../Woodllandwldexplorrscrns/Woodllandwldexplorrminigpll.tsx';

const Stack = createStackNavigator();

const Woodllandwldexplorrstack = () => {
  return (
    <WodllandwldexplorrFavoritesProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Woodllandwldexplorrloade"
          component={Woodllandwldexplorrloade}
        />
        <Stack.Screen
          name="Woodllandwldexplorronbr"
          component={Woodllandwldexplorronbr}
        />
        <Stack.Screen
          name="Woodllandwldexplorrtab"
          component={Woodllandwldexplorrtab}
        />
        <Stack.Screen
          name="Woodllandwldexplorrlocdet"
          component={Woodllandwldexplorrlocdet}
        />
        <Stack.Screen
          name="Woodllandwldexplorrraradet"
          component={Woodllandwldexplorrraradet}
        />
        <Stack.Screen
          name="Woodllandwldexplorrfactsquiz"
          component={Woodllandwldexplorrfactsquiz}
        />
        <Stack.Screen
          name="Woodllandwldexplorrfactsresult"
          component={Woodllandwldexplorrfactsresult}
        />
        <Stack.Screen
          name="Woodllandwldexplorrminigpll"
          component={Woodllandwldexplorrminigpll}
        />
      </Stack.Navigator>
    </WodllandwldexplorrFavoritesProvider>
  );
};

export default Woodllandwldexplorrstack;
