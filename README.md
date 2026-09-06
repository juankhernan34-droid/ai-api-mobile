# AI API Mobile App 📱

React Native mobile app for your AI API with Stripe & PayPal payment integration.

## Features

✅ **AI Text Generation** - Generate text using your API
✅ **Stripe Subscriptions** - Monthly payment plans
✅ **PayPal One-Time Payments** - Quick payment option
✅ **Cross-Platform** - iOS and Android support
✅ **Easy Setup** - Just 3 commands to get started

## Quick Start

### 1. Install Expo CLI
```bash
npm install -g expo-cli
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` file
```bash
cp .env.example .env
```

Then update with your actual values:
```env
EXPO_PUBLIC_API_URL=http://your-api-url:7860
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
EXPO_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
```

### 4. Start the App

**Web:**
```bash
npm start -- --web
```

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

## Project Structure

```
ai-api-mobile/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js       # AI text generation
│   │   └── PaymentScreen.js    # Payment plans
│   └── navigation/
│       └── TabNavigator.js     # Bottom tab navigation
├── App.js                      # Root component
├── app.json                    # Expo config
└── package.json
```

## Screens

### Home Screen
- Enter prompts for AI text generation
- Real-time responses from your API
- Clean, user-friendly interface

### Payment Screen
- **Stripe Plans:**
  - Starter: $4.99/month (5,000 requests)
  - Pro: $14.99/month (50,000 requests)
- **PayPal:**
  - One-time: $5.00 (instant access)

## Build for Production

### iOS
```bash
exp build:ios
```

### Android
```bash
exp build:android
```

## Deployment

### Publishing to App Stores

**App Store (iOS):**
1. Enroll in Apple Developer Program
2. Run `expo build:ios`
3. Upload to App Store Connect

**Google Play (Android):**
1. Create Google Play Developer account
2. Run `expo build:android`
3. Upload to Google Play Console

## Troubleshooting

| Issue | Solution |
|-------|----------|
| API not connecting | Check `EXPO_PUBLIC_API_URL` in `.env` |
| Stripe errors | Verify `STRIPE_PUBLISHABLE_KEY` is correct |
| PayPal errors | Ensure `PAYPAL_CLIENT_ID` is set |
| Port conflict | Kill process on port 7860 |

## Support

For issues with:
- **Expo**: https://docs.expo.dev/
- **React Native**: https://reactnative.dev/
- **Stripe**: https://stripe.com/docs/stripe-js
- **PayPal**: https://developer.paypal.com/

---

**Ready to make money!** 💰 Deploy your app to app stores and start earning.
