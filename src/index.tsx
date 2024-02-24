import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlattenDirectory from './Screen/FlattenDirectory';
import ListViewScreen from './Screen/ListViewScreen';
import Initialiser from './Initialiser';


function App(): React.JSX.Element {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1" >
                <Stack.Screen name="Root" component={Initialiser} />
                <Stack.Screen name="ListViewScreen" component={ListViewScreen} />
                <Stack.Screen name="FlattenDirectory" component={FlattenDirectory} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
