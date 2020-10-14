import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// stack navigator
import { createStackNavigator } from '@react-navigation/stack';
// stack navigator(法2)
import { useNavigation } from '@react-navigation/native';
// Tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// icon
import { Ionicons } from '@expo/vector-icons';
// 第一個頁面
function HomeScreen() {

  // const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>歡迎使用</Text>
      <Button
        title="點此"
        // onPress={() => navigation.navigate('詳細資訊')}

      />
    </View>
  );

}

// 第二個頁面
function DetailsScreen() {

  // const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>此為測試頁</Text>
      <Button
        title="回到主頁面"
        // onPress={() => navigation.navigate('家')}

      />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === '家') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === '詳細資訊') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="家" component={HomeScreen} />
        <Tab.Screen name="詳細資訊" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
 
  );
}

export default App;




