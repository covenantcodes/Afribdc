export interface ExchangeRateCardData {
    id: string;
    profileImage: string;
    username: string;
    fromCurrency: string;
    toCurrency: string;
    rate: number;
    type: 'buying' | 'selling';
  }
  
  export const exchangeRateData: ExchangeRateCardData[] = [
    {
      id: '1',
      profileImage: 'https://i.pravatar.cc/150?img=1',
      username: 'John Doe',
      fromCurrency: 'USD',
      toCurrency: 'NGN',
      rate: 1200.50,
      type: 'buying',
    },
    {
      id: '2',
      profileImage: 'https://i.pravatar.cc/150?img=2',
      username: 'Jane Smith',
      fromCurrency: 'EUR',
      toCurrency: 'NGN',
      rate: 1350.75,
      type: 'selling',
    },
    {
      id: '3',
      profileImage: 'https://i.pravatar.cc/150?img=3',
      username: 'Robert Johnson',
      fromCurrency: 'GBP',
      toCurrency: 'NGN',
      rate: 1500.25,
      type: 'buying',
    },
    {
      id: '4',
      profileImage: 'https://i.pravatar.cc/150?img=4',
      username: 'Sarah Williams',
      fromCurrency: 'USD',
      toCurrency: 'NGN',
      rate: 1198.00,
      type: 'selling',
    },
    {
      id: '5',
      profileImage: 'https://i.pravatar.cc/150?img=5',
      username: 'Michael Brown',
      fromCurrency: 'EUR',
      toCurrency: 'NGN',
      rate: 1345.50,
      type: 'buying',
    },
  ];