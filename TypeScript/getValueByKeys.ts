const expectedElements = {
    'PRIORITY_PASS': {
      'MASTERCARD_HSBC': {
        'logo': 'mastercardHsbc',
        'confirm-payment': 'Priority Pass'
      },  
      'MASTERCARD_MCAE': {
        'logo': 'mastercard',
        'confirm-payment': 'Mastercard Airport Experiences'
      },
    },
    'LOUNGE_KEY': {
      'None': {
        'logo': 'lk',
        'confirm-payment': 'Lounge Key'
      },
    },
  };

const provider = 'PRIORITY_PASS';
const member = 'MASTERCARD_HSBC';

const value = expectedElements[provider][member]['confirm-payment'];
console.log(value);
