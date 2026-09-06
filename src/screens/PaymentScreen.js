import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:7860';

const PaymentScreen = () => {
  const { presentPaymentSheet, confirmPaymentSheetPayment } = useStripe();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleStripePay = async (plan) => {
    setLoading(true);
    try {
      // Get checkout session from backend
      const response = await axios.post(`${API_URL}/checkout`, {
        plan: plan,
      });
      
      Alert.alert(
        'Stripe Payment',
        `Checkout URL: ${response.data.checkout_url}\n\nOpen this in your browser to complete payment.`
      );
    } catch (error) {
      Alert.alert('Error', error.response?.data?.error || 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  const handlePayPalPay = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/paypal/payment`, {
        return_url: 'http://localhost:7860/success',
        cancel_url: 'http://localhost:7860/cancel',
      });

      Alert.alert(
        'PayPal Payment',
        `Approval URL: ${response.data.approval_url}\n\nOpen this in your browser to approve payment.`
      );
    } catch (error) {
      Alert.alert('Error', error.response?.data?.error || 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payment Plans</Text>
        <Text style={styles.subtitle}>Choose your subscription</Text>
      </View>

      {/* Stripe Plans */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📊 Stripe Subscriptions</Text>

        <View style={styles.planCard}>
          <Text style={styles.planName}>Starter Plan</Text>
          <Text style={styles.price}>$4.99<Text style={styles.period}>/month</Text></Text>
          <Text style={styles.features}>✓ 5,000 requests/month</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleStripePay('starter')}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Subscribe Now</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.planCard}>
          <Text style={styles.planName}>Pro Plan</Text>
          <Text style={styles.price}>$14.99<Text style={styles.period}>/month</Text></Text>
          <Text style={styles.features}>✓ 50,000 requests/month</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={() => handleStripePay('pro')}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Subscribe Now</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* PayPal One-Time Payment */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💳 PayPal One-Time Payment</Text>

        <View style={styles.planCard}>
          <Text style={styles.planName}>One-Time Access</Text>
          <Text style={styles.price}>$5.00<Text style={styles.period}>/once</Text></Text>
          <Text style={styles.features}>✓ One-time payment for quick access</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonSecondary]}
            onPress={handlePayPalPay}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Pay with PayPal</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    marginBottom: 24,
    marginTop: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  planCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  planName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  period: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'normal',
  },
  features: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#999',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#007AFF',
  },
  buttonSecondary: {
    backgroundColor: '#0070BA',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default PaymentScreen;
