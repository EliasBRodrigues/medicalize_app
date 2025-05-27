import AsyncStorage from '@react-native-async-storage/async-storage';

// Define constant for AsyncStorage key
const SEARCH_HISTORY_KEY = '@medicalize:searchHistory';

// Function to save a search query to AsyncStorage
export async function saveSearchQuery(query: string) {
  if (!query.trim()) return; // Avoid saving empty queries

  try {
    // Retrieve existing search history
    const existingHistory = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);
    let searchHistory: string[] = existingHistory
      ? JSON.parse(existingHistory)
      : [];

    // Avoid duplicates and add the new query
    if (!searchHistory.includes(query)) {
      searchHistory = [query, ...searchHistory].slice(0, 10); // Limit to 10 recent searches
      await AsyncStorage.setItem(
        SEARCH_HISTORY_KEY,
        JSON.stringify(searchHistory)
      );
    }
  } catch (error) {
    console.error('Error saving search query to AsyncStorage:', error);
  }
}

// Function to retrieve search history from AsyncStorage
export async function getSearchHistory() {
  try {
    const history = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error retrieving search history from AsyncStorage:', error);
    return [];
  }
}
