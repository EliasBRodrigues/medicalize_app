import AsyncStorage from '@react-native-async-storage/async-storage';

// Define constant for AsyncStorage key
const FIRST_ACCESS_KEY = '@medicalize:firstAccess';

// Function to check if it's the user's first access
export async function checkFirstAccess() {
  try {
    // Retrieve the first access flag from AsyncStorage
    const isFirstAccess = await AsyncStorage.getItem(FIRST_ACCESS_KEY);
    // Return true if no flag exists (first access), false otherwise
    return isFirstAccess === null;
  } catch (error) {
    console.error('Erro ao verificar primeiro acesso:', error);
    // Return false in case of error to assume not first access
    return false;
  }
}

// Function to mark the app as accessed
export async function markAsAccessed() {
  try {
    // Set the first access flag in AsyncStorage
    await AsyncStorage.setItem(FIRST_ACCESS_KEY, 'true');
  } catch (error) {
    console.error('Erro ao marcar como primeiro acesso:', error);
  }
}
