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
      username: 'Username',
      fromCurrency: 'USD',
      toCurrency: 'CAD',
      rate: 1.43,
      type: 'selling',
    },
    {
      id: '2',
      profileImage: images.profilePic,
      username: 'User 2',
      fromCurrency: 'CAD',
      toCurrency: 'KSH',
      rate: 90.50,
      type: 'buying',
    },
    {
      id: '3',
      profileImage: images.profilePic,
      username: 'User 3',
      fromCurrency: 'USD',
      toCurrency: 'NGN',
      rate: 780,
      type: 'selling',
    },
    {
      id: '4',
      profileImage: images.profilePic,
      username: 'User 4',
      fromCurrency: 'CAD',
      toCurrency: 'KSH',
      rate: 780,
      type: 'buying',
    },
    {
      id: '5',
      profileImage: images.profilePic,
      username: 'User 5',
      fromCurrency: 'USD',
      toCurrency: 'NGN',
      rate: 780,
      type: 'selling',
    },
    
    {
      id: '6',
      profileImage: images.profilePic,
      username: 'User 4',
      fromCurrency: 'CAD',
      toCurrency: 'KSH',
      rate: 780,
      type: 'buying',
    },
    
    {
      id: '7',
      profileImage: images.profilePic,
      username: 'User 4',
      fromCurrency: 'CAD',
      toCurrency: 'KSH',
      rate: 780,
      type: 'buying',
    },
    
    {
      id: '8',
      profileImage: images.profilePic,
      username: 'User 4',
      fromCurrency: 'CAD',
      toCurrency: 'KSH',
      rate: 780,
      type: 'buying',
    },

  ];