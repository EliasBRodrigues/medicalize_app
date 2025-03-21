import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Welcome } from '@/components/welcome';
import { Steps } from '@/components/steps';
import { Button } from '@/components/button';

export default function Index() {
  return (
    <View
      style={{ flex: 1, paddingHorizontal: 26, paddingVertical: 40, gap: 36 }}
    >
      <Welcome />

      <Steps />

      <Button>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
