import { AppRegistry, Platform } from 'react-native';
import App from './App';

<<<<<<< HEAD
AppRegistry.registerComponent('Olango', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('Olango', { rootTag });
=======
AppRegistry.registerComponent('olango', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('olango', { rootTag });
>>>>>>> b4expo
}
