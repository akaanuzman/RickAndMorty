import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import HomeView from './features/home/HomeView';

export default function App() {
  return (
    <View>
      <HomeView />
      <StatusBar style="auto" />
    </View>
  );
}