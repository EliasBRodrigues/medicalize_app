import { router } from 'expo-router';

// function to navigate to the medicine details page
// This function takes a medication name as an argument and navigates to the corresponding page
export const navigateToMedicine = (medication: string) => {
  router.navigate({
    pathname: '/medicine/[name]',
    params: { name: medication.trim() }, // Trimmed medication name to remove any leading or trailing whitespace
  });
};
