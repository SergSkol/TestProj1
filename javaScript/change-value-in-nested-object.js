const bookingGQLResponse = {
    getBookingByID: {
      id: '65a8df3dab4fd4a2a913122d',
      actingAccount: 'cfd7496b-33ec-4347-9c78-a61610a1dc7a',
      bookedFrom: '2024-02-22 12:45:00.000',
      bookedTo: '2024-02-22 15:05:00.000',
      lastArrival: '2024-02-22 13:00:00.000',
      metadata: {
        flightNumber: 'BA1417',
        flightTime: '15:05',
      },
      reference: 'TO4Y5X',
      price: 1200,
      price_currency: 'gbp',
      guestAdultCount: 2,
      guestChildrenCount: 0,
      guestInfantCount: 0,
      status: 'CONFIRMED',
      consumer: {
        emailAddress:
          'alreadyregisteredconsumerwithlinkaccount11@team875296.testinator.com',
        fullName: 'Alice Smith',
        id: '6be6af9a-c2fa-41cf-962b-fde7493c352e',
        __typename: 'Consumer',
      },
      experience: {
        id: '123',
        loungeName: 'Aspire Lounge',
        loungeCode: 'BHD1',
        location: {
          __typename: 'LegacyLocation',
          airportName: 'Belfast George Best City',
          airportCode: 'BHD',
          city: 'Belfast',
          country: 'United Kingdom',
          terminal: '',
          timezone: 'Europe/London',
        },
        pricing: {
          __typename: 'LegacyPricing',
          pricingType: 'Flat',
          currency: 'GBP',
          reservationCost: 0,
          lifestyleXReservationCharge: 0,
          walkInCostCurrentPPRate: 0,
          lifestyleXWalkInCharge: 0,
          vat: 20,
          reservationOnlyFeeCost: 4.8,
          reservationOnlyFee: 6,
        },
        openingHours:
          'Monday: 05:15 - 20:30\r\nTuesday: 05:15 - 20:30\r\nWednesday: 05:15 - 20:30\r\nThursday: 05:15 - 20:300\r\nFriday: 05:15 - 20:30\r\nSaturday: 05:15 - 20:30\r\nSunday: 05:15 - 21:15 \r\nNote: Closed Dec 25.\r\nDue to peak seasonal activity, it is expected this lounge will see an increase in the number of guests. Therefore, access may be periodically restricted due to space constraints.\r\n\r\n',
        images: [
          {
            altText: 'Aspire Lounge,Belfast City_UK',
            url: 'https://cdn03.collinson.cn/lounge-media/image/BHD1-12781.jpg',
            height: 375,
            width: 500,
            id: '3fc2332b-453c-4b75-8f8a-1be121539479',
            __typename: 'Image',
            contentType: null,
          },
          {
            altText: 'Aspire Lounge,Belfast City_UK',
            url: 'https://cdn03.collinson.cn/lounge-media/image/BHD1-12779.jpg',
            height: 375,
            width: 500,
            id: '249d936b-1d9a-49b2-b1ca-ac2b37a3c905',
            __typename: 'Image',
            contentType: null,
          },
          {
            altText: 'Aspire Lounge,Belfast City_UK',
            url: 'https://cdn03.collinson.cn/lounge-media/image/BHD1-12780.jpg',
            height: 375,
            width: 500,
            id: '845458e3-be05-4272-ae16-76ec2dce237d',
            __typename: 'Image',
            contentType: null,
          },
          {
            altText: 'Aspire Lounge,Belfast City_UK',
            url: 'https://cdn03.collinson.cn/lounge-media/image/BHD1-12782.jpg',
            height: 375,
            width: 500,
            id: '2bef0e49-aba7-4ce2-99ee-516ee5250ee5',
            __typename: 'Image',
            contentType: null,
          },
        ],
        __typename: 'Experience',
      },
      __typename: 'Booking',
    },
  };

bookingGQLResponse.getBookingByID.consumer.emailAddress = "";

console.log(JSON.stringify(bookingGQLResponse))