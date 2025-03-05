import { ImageSourcePropType } from "react-native";
import images from "../utils/images";

export interface ExchangeRateCardData {
    id: string;
    profileImage: ImageSourcePropType;
    username: string;
    fromCurrency: string;
    toCurrency: string;
    rate: number;
    type: 'buying' | 'selling';
  }
  
  export const exchangeRateData: ExchangeRateCardData[] = [
    {
      id: '1',
      profileImage: images.profilePic,
      username: 'John Doe',
      fromCurrency: 'USD',
      toCurrency: 'NGN',
      rate: 1200.50,
      type: 'buying',
    },
    {
      id: '2',
      profileImage: images.profilePic,
      username: 'Jane Smith',
      fromCurrency: 'EUR',
      toCurrency: 'NGN',
      rate: 1350.75,
      type: 'selling',
    },
    {
      id: '3',
      profileImage: images.profilePic,
      username: 'Robert Johnson',
      fromCurrency: 'GBP',
      toCurrency: 'NGN',
      rate: 1500.25,
      type: 'buying',
    },
    {
      id: '4',
      profileImage: images.profilePic,
      username: 'Sarah Williams',
      fromCurrency: 'USD',
      toCurrency: 'NGN',
      rate: 1198.00,
      type: 'selling',
    },
    {
      id: '5',
      profileImage: images.profilePic,
      username: 'Michael Brown',
      fromCurrency: 'EUR',
      toCurrency: 'NGN',
      rate: 1345.50,
      type: 'buying',
    },
  ];