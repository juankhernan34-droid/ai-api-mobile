import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import TabNavigator from './src/navigation/TabNavigator';

const publishableKey = process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY;

const App = () => {
  return (
    <StripeProvider publishableKey={publishableKey}>
      <TabNavigator />
    </StripeProvider>
  );
};

export default App;
