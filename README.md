# Afribdc Mobile App

A React Native mobile application challenge (for Afribdc ) for currency exchange and digital wallet management.

## 📱 Features

- User authentication and ID verification
- Digital wallet management
- Currency exchange (Buy/Sell)
- Currency swapping
- Real-time exchange rates
- Fund withdrawal
- Transaction notifications

## 🛠 Technology Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Lottie Animations
- Linear Gradient

## 📦 Few Custom Components and Usage Examples

### NotificationBell

A customizable SVG bell icon component for notifications.

```tsx
<NotificationBell width={30} height={30} color={colors.deepBlue} />
```

### CustomButton

A reusable button component with customizable styles.

```tsx
<CustomButton
  title="Press Me"
  onPress={() => console.log("Button pressed")}
  loading={false}
  backgroundColor={colors.primaryColor}
  textColor={colors.white}
  borderRadius={12}
  borderColor={colors.primaryColor}
  borderWidth={1}
/>
```

### ExchangeRateCard

Displays exchange rate information with user details.

```tsx
<ExchangeRateCard
  profileImage={profileImage}
  username="Username"
  fromCurrency="USD"
  toCurrency="CAD"
  rate={1.25}
  type="buying"
/>
```

### SVG Components

Several custom SVG components for icons:

- Wallet
- Fund
- Swap
- Sell
- Withdraw

Usage example:

```tsx
<Wallet width={50} height={50} fillColor={colors.white} strokeWidth={5} />
```

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/afribdc.git
```

2. Install dependencies:

```bash
cd afribdc
npm install
```

3. Start the development server:

```bash
npx expo start
```

## 📁 Project Structure

```
Afribdc/
├── assets/
│   └── images/
├── components/
│   ├── CustomButton.tsx
│   ├── ExchangeRateCard.tsx
│   └── svgs/
├── screens/
│   ├── Auth/
│   ├── Home/
│   └── Wallet/
├── utils/
│   ├── colors.ts
│   └── fonts.ts
└── data/
    └── data.ts
```

## 🎨 Styling

The app uses a consistent design system with:

- Custom color palette (`utils/colors.ts`)
- Custom font families and sizes (`utils/fonts.ts`)
- Linear gradients for cards and buttons
- Consistent spacing and border radius

## 📱 Screen Components

### Home Screen

Main dashboard with:

- User profile
- Wallet balance
- Quick action buttons
- Exchange rate listings

### Wallet Screen

Displays wallet information and transactions:

- Current balance
- Transaction history
- Fund management options

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
