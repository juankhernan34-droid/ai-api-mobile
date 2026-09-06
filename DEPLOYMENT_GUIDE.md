# Deployment Guide 🚀

Deploy your mobile app to iOS App Store and Google Play Store

## Prerequisites

- Expo CLI: `npm install -g expo-cli`
- Expo account: https://expo.dev/
- Apple Developer account (for iOS)
- Google Play Developer account (for Android)

## Step 1: Prepare Your App

### Update app.json
```json
{
  "expo": {
    "name": "AI API",
    "slug": "ai-api-mobile",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.juankhernan.aiapisuite"
    },
    "android": {
      "package": "com.juankhernan.aiapisuite"
    }
  }
}
```

## Step 2: Build for iOS

```bash
# Build
expo build:ios

# Wait for build to complete (check status with)
expo build:ios --status

# Download the .ipa file
```

Then:
1. Go to App Store Connect
2. Create new app
3. Upload .ipa using Transporter
4. Fill in app details
5. Submit for review

## Step 3: Build for Android

```bash
# Build APK
expo build:android --type apk

# Or build AAB (recommended)
expo build:android --type app-bundle

# Check status
expo build:android --status
```

Then:
1. Go to Google Play Console
2. Create new app
3. Upload AAB file
4. Fill in store listing
5. Submit for review

## Step 4: Monetization Setup

### Stripe Setup
1. Enable Stripe in your backend
2. Set correct `STRIPE_PUBLISHABLE_KEY`
3. Test with test keys first
4. Switch to live keys for production

### PayPal Setup
1. Set `PAYPAL_MODE=live` in production
2. Get live `PAYPAL_CLIENT_ID`
3. Test with sandbox first
4. Switch to production credentials

## Step 5: Publishing Updates

```bash
# Publish over-the-air updates (without app store review)
expo publish

# Or submit new build
expo build:ios
expo build:android
```

## Monitoring

Check app analytics and crashes:
```bash
expo analytics
```

## Cost Estimate

- Apple Developer Program: $99/year
- Google Play Developer: $25 one-time
- Expo: Free (with optional paid plans)
- **Total first year: ~$124**

## Timeline

- App Store review: 1-3 days typically
- Google Play: 2-4 hours typically
- Total deployment: 1-2 weeks

---

**Your app is ready to earn!** 💰
