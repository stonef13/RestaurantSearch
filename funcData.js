const restaurantData = [
  {
    id: 1,
    name: 'Deliciousgenix',
    customerRating: 4,
    distance: 1,
    price: 10,
    createdAt: '2021-11-27T03:54:34.282Z',
    updatedAt: '2021-11-27T03:54:34.282Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 2,
    name: 'Herbed Delicious',
    customerRating: 4,
    distance: 7,
    price: 20,
    createdAt: '2021-11-27T03:54:34.283Z',
    updatedAt: '2021-11-27T03:54:34.283Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 3,
    name: 'Deliciousscape',
    customerRating: 3,
    distance: 7,
    price: 50,
    createdAt: '2021-11-27T03:54:34.283Z',
    updatedAt: '2021-11-27T03:54:34.283Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 4,
    name: 'Hideaway Delicious',
    customerRating: 2,
    distance: 5,
    price: 40,
    createdAt: '2021-11-27T03:54:34.283Z',
    updatedAt: '2021-11-27T03:54:34.283Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 5,
    name: 'Cuts Delicious',
    customerRating: 3,
    distance: 9,
    price: 25,
    createdAt: '2021-11-27T03:54:34.283Z',
    updatedAt: '2021-11-27T03:54:34.283Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 6,
    name: 'Lord Delicious',
    customerRating: 1,
    distance: 7,
    price: 35,
    createdAt: '2021-11-27T03:54:34.283Z',
    updatedAt: '2021-11-27T03:54:34.283Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 7,
    name: 'Fine Delicious',
    customerRating: 4,
    distance: 5,
    price: 45,
    createdAt: '2021-11-27T03:54:34.283Z',
    updatedAt: '2021-11-27T03:54:34.283Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 8,
    name: 'Hilltop Delicious',
    customerRating: 3,
    distance: 3,
    price: 45,
    createdAt: '2021-11-27T03:54:34.283Z',
    updatedAt: '2021-11-27T03:54:34.283Z',
    cuisineId: 6,
    cuisine: {
      id: 6,
      name: 'Japanese',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 9,
    name: 'Deliciousish',
    customerRating: 1,
    distance: 3,
    price: 50,
    createdAt: '2021-11-27T03:54:34.283Z',
    updatedAt: '2021-11-27T03:54:34.283Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 10,
    name: 'Havana Delicious',
    customerRating: 3,
    distance: 1,
    price: 35,
    createdAt: '2021-11-27T03:54:34.283Z',
    updatedAt: '2021-11-27T03:54:34.283Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 11,
    name: 'Deliciouspad',
    customerRating: 3,
    distance: 10,
    price: 40,
    createdAt: '2021-11-27T03:54:34.283Z',
    updatedAt: '2021-11-27T03:54:34.283Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 12,
    name: 'Deliciousquipo',
    customerRating: 2,
    distance: 2,
    price: 10,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 13,
    name: 'Deliciousbea',
    customerRating: 5,
    distance: 6,
    price: 50,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 14,
    name: 'Fed Delicious',
    customerRating: 2,
    distance: 9,
    price: 35,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 15,
    name: 'Hotspot Delicious',
    customerRating: 4,
    distance: 10,
    price: 25,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 16,
    name: 'Gusto Delicious',
    customerRating: 5,
    distance: 3,
    price: 50,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 17,
    name: 'Deliciouszen',
    customerRating: 2,
    distance: 6,
    price: 30,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 5,
    cuisine: {
      id: 5,
      name: 'French',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 18,
    name: 'Deliciouszilla',
    customerRating: 4,
    distance: 1,
    price: 15,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 19,
    name: 'Deliciousio',
    customerRating: 5,
    distance: 9,
    price: 40,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 20,
    name: 'Local Delicious',
    customerRating: 5,
    distance: 4,
    price: 20,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 21,
    name: 'Crisp Delicious',
    customerRating: 5,
    distance: 2,
    price: 45,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 22,
    name: 'Deliciousoryx',
    customerRating: 1,
    distance: 5,
    price: 25,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 23,
    name: 'Bang Delicious',
    customerRating: 5,
    distance: 2,
    price: 15,
    createdAt: '2021-11-27T03:54:34.284Z',
    updatedAt: '2021-11-27T03:54:34.284Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 24,
    name: 'Deliciouszoid',
    customerRating: 3,
    distance: 2,
    price: 30,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 25,
    name: 'Hearty ChowClick',
    customerRating: 2,
    distance: 6,
    price: 25,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 26,
    name: 'Traditional Chow',
    customerRating: 5,
    distance: 2,
    price: 15,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 27,
    name: 'Bash Chow',
    customerRating: 2,
    distance: 6,
    price: 45,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 28,
    name: 'Minty Chow',
    customerRating: 4,
    distance: 8,
    price: 35,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 5,
    cuisine: {
      id: 5,
      name: 'French',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 29,
    name: 'Chowaza',
    customerRating: 3,
    distance: 9,
    price: 20,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 30,
    name: 'Lucha Chow',
    customerRating: 3,
    distance: 4,
    price: 25,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 14,
    cuisine: {
      id: 14,
      name: 'Malaysian',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 31,
    name: 'Hut Chow',
    customerRating: 2,
    distance: 2,
    price: 10,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 3,
    cuisine: {
      id: 3,
      name: 'Thai',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 32,
    name: 'Wish Chow',
    customerRating: 3,
    distance: 1,
    price: 40,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 33,
    name: 'Chowish',
    customerRating: 3,
    distance: 8,
    price: 10,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 34,
    name: 'Bazaar Chow',
    customerRating: 4,
    distance: 4,
    price: 40,
    createdAt: '2021-11-27T03:54:34.285Z',
    updatedAt: '2021-11-27T03:54:34.285Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 35,
    name: 'Story Chow',
    customerRating: 2,
    distance: 10,
    price: 30,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 36,
    name: 'Hideout Chow',
    customerRating: 2,
    distance: 7,
    price: 10,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 37,
    name: 'Strip Chow',
    customerRating: 5,
    distance: 9,
    price: 35,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 39,
    name: 'Chowology',
    customerRating: 5,
    distance: 9,
    price: 30,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 6,
    cuisine: {
      id: 6,
      name: 'Japanese',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 38,
    name: 'Aroma Chow',
    customerRating: 5,
    distance: 10,
    price: 10,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 40,
    name: 'Chowify',
    customerRating: 4,
    distance: 4,
    price: 45,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 41,
    name: 'Piece Chow',
    customerRating: 4,
    distance: 9,
    price: 10,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 42,
    name: 'Cave Chow',
    customerRating: 3,
    distance: 4,
    price: 40,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 6,
    cuisine: {
      id: 6,
      name: 'Japanese',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 43,
    name: 'Wagon Chow',
    customerRating: 3,
    distance: 9,
    price: 10,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 44,
    name: 'Choworyx',
    customerRating: 2,
    distance: 3,
    price: 40,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 7,
    cuisine: {
      id: 7,
      name: 'Turkish',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 45,
    name: 'Whole Chow',
    customerRating: 2,
    distance: 7,
    price: 15,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 46,
    name: 'Central Chow',
    customerRating: 3,
    distance: 7,
    price: 45,
    createdAt: '2021-11-27T03:54:34.286Z',
    updatedAt: '2021-11-27T03:54:34.286Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 47,
    name: 'Ambrosial Chow',
    customerRating: 4,
    distance: 5,
    price: 50,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 48,
    name: 'Place Chow',
    customerRating: 2,
    distance: 2,
    price: 15,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 49,
    name: 'Reservation Table',
    customerRating: 4,
    distance: 3,
    price: 20,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 50,
    name: 'Chopped Table',
    customerRating: 1,
    distance: 5,
    price: 40,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 3,
    cuisine: {
      id: 3,
      name: 'Thai',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 51,
    name: 'Herbed Table',
    customerRating: 1,
    distance: 1,
    price: 15,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 52,
    name: 'Palate Table',
    customerRating: 1,
    distance: 1,
    price: 15,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 14,
    cuisine: {
      id: 14,
      name: 'Malaysian',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 53,
    name: 'Grove Table',
    customerRating: 5,
    distance: 2,
    price: 10,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 54,
    name: 'Fodder Table',
    customerRating: 4,
    distance: 1,
    price: 20,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 55,
    name: 'Tablebes',
    customerRating: 4,
    distance: 2,
    price: 40,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 56,
    name: 'Chow Table',
    customerRating: 1,
    distance: 1,
    price: 10,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 57,
    name: 'Bay Table',
    customerRating: 3,
    distance: 7,
    price: 50,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 58,
    name: 'Tablebea',
    customerRating: 1,
    distance: 7,
    price: 25,
    createdAt: '2021-11-27T03:54:34.287Z',
    updatedAt: '2021-11-27T03:54:34.287Z',
    cuisineId: 10,
    cuisine: {
      id: 10,
      name: 'Indian',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 59,
    name: 'Fine Table',
    customerRating: 2,
    distance: 5,
    price: 15,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 60,
    name: 'Cellar Table',
    customerRating: 4,
    distance: 8,
    price: 25,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 61,
    name: 'Boy Table',
    customerRating: 3,
    distance: 9,
    price: 30,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 62,
    name: 'Tableomatic',
    customerRating: 1,
    distance: 5,
    price: 20,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 16,
    cuisine: {
      id: 16,
      name: 'German',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 63,
    name: 'Tableque',
    customerRating: 4,
    distance: 3,
    price: 10,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 64,
    name: 'Tableio',
    customerRating: 3,
    distance: 3,
    price: 40,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 65,
    name: 'Tableoont',
    customerRating: 5,
    distance: 10,
    price: 20,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 66,
    name: 'Tableadora',
    customerRating: 5,
    distance: 2,
    price: 25,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 67,
    name: 'Tableooze',
    customerRating: 3,
    distance: 1,
    price: 50,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 16,
    cuisine: {
      id: 16,
      name: 'German',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 68,
    name: 'Garnish Table',
    customerRating: 4,
    distance: 9,
    price: 40,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 69,
    name: 'Brew Table',
    customerRating: 2,
    distance: 10,
    price: 15,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 70,
    name: 'Hotspot Table',
    customerRating: 3,
    distance: 7,
    price: 40,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 71,
    name: 'Fresh Table',
    customerRating: 3,
    distance: 2,
    price: 30,
    createdAt: '2021-11-27T03:54:34.288Z',
    updatedAt: '2021-11-27T03:54:34.288Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 72,
    name: 'Appetite Table',
    customerRating: 1,
    distance: 10,
    price: 40,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 73,
    name: 'Cave Tasty',
    customerRating: 5,
    distance: 10,
    price: 15,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 74,
    name: 'Whole Tasty',
    customerRating: 1,
    distance: 1,
    price: 30,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 5,
    cuisine: {
      id: 5,
      name: 'French',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 75,
    name: 'Tastyio',
    customerRating: 3,
    distance: 10,
    price: 30,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 14,
    cuisine: {
      id: 14,
      name: 'Malaysian',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 76,
    name: 'Lane Tasty',
    customerRating: 5,
    distance: 5,
    price: 35,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 77,
    name: 'Nouveau Tasty',
    customerRating: 1,
    distance: 9,
    price: 50,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 78,
    name: 'Relish Tasty',
    customerRating: 3,
    distance: 8,
    price: 50,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 79,
    name: 'Tastyooze',
    customerRating: 3,
    distance: 6,
    price: 20,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 80,
    name: 'Binge Tasty',
    customerRating: 1,
    distance: 8,
    price: 10,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 81,
    name: 'Fed Tasty',
    customerRating: 3,
    distance: 5,
    price: 25,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 82,
    name: 'Diced Tasty',
    customerRating: 5,
    distance: 4,
    price: 40,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 7,
    cuisine: {
      id: 7,
      name: 'Turkish',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 83,
    name: 'Tastylux',
    customerRating: 5,
    distance: 8,
    price: 35,
    createdAt: '2021-11-27T03:54:34.289Z',
    updatedAt: '2021-11-27T03:54:34.289Z',
    cuisineId: 14,
    cuisine: {
      id: 14,
      name: 'Malaysian',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 84,
    name: 'Tastyaza',
    customerRating: 3,
    distance: 7,
    price: 45,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 85,
    name: 'Grill Tasty',
    customerRating: 2,
    distance: 2,
    price: 30,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 86,
    name: 'Tastyopolis',
    customerRating: 1,
    distance: 6,
    price: 20,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 87,
    name: 'Stand Tasty',
    customerRating: 4,
    distance: 3,
    price: 40,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 16,
    cuisine: {
      id: 16,
      name: 'German',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 88,
    name: 'Feast Tasty',
    customerRating: 2,
    distance: 8,
    price: 20,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 89,
    name: 'Baby Tasty',
    customerRating: 3,
    distance: 1,
    price: 20,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 90,
    name: 'Fodder Tasty',
    customerRating: 4,
    distance: 4,
    price: 30,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 91,
    name: 'Takeout Tasty',
    customerRating: 5,
    distance: 5,
    price: 20,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 92,
    name: 'Wrap Tasty',
    customerRating: 1,
    distance: 10,
    price: 30,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 93,
    name: 'Tastylia',
    customerRating: 3,
    distance: 4,
    price: 50,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 3,
    cuisine: {
      id: 3,
      name: 'Thai',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 94,
    name: 'Havana Tasty',
    customerRating: 4,
    distance: 10,
    price: 15,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 95,
    name: 'Crumb Tasty',
    customerRating: 2,
    distance: 5,
    price: 25,
    createdAt: '2021-11-27T03:54:34.290Z',
    updatedAt: '2021-11-27T03:54:34.290Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 96,
    name: 'Dished Tasty',
    customerRating: 1,
    distance: 7,
    price: 25,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 97,
    name: 'Chop Grill',
    customerRating: 5,
    distance: 8,
    price: 10,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 17,
    cuisine: {
      id: 17,
      name: 'Indonesian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 102,
    name: 'Perfection Grill',
    customerRating: 3,
    distance: 3,
    price: 50,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 7,
    cuisine: {
      id: 7,
      name: 'Turkish',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 107,
    name: 'Grilltastic',
    customerRating: 3,
    distance: 3,
    price: 30,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 14,
    cuisine: {
      id: 14,
      name: 'Malaysian',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 112,
    name: 'Grillya',
    customerRating: 2,
    distance: 7,
    price: 40,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 117,
    name: 'Divine Grill',
    customerRating: 1,
    distance: 9,
    price: 25,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 7,
    cuisine: {
      id: 7,
      name: 'Turkish',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 123,
    name: 'Perfection Palace',
    customerRating: 3,
    distance: 1,
    price: 20,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 3,
    cuisine: {
      id: 3,
      name: 'Thai',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 128,
    name: 'Hotspot Palace',
    customerRating: 1,
    distance: 3,
    price: 35,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 3,
    cuisine: {
      id: 3,
      name: 'Thai',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 133,
    name: 'Gnaw Palace',
    customerRating: 1,
    distance: 3,
    price: 50,
    createdAt: '2021-11-27T03:54:34.294Z',
    updatedAt: '2021-11-27T03:54:34.294Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 138,
    name: 'Palaceistic',
    customerRating: 2,
    distance: 10,
    price: 45,
    createdAt: '2021-11-27T03:54:34.294Z',
    updatedAt: '2021-11-27T03:54:34.294Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 143,
    name: 'Palacex',
    customerRating: 2,
    distance: 6,
    price: 15,
    createdAt: '2021-11-27T03:54:34.295Z',
    updatedAt: '2021-11-27T03:54:34.295Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 148,
    name: 'Yummylia',
    customerRating: 1,
    distance: 1,
    price: 40,
    createdAt: '2021-11-27T03:54:34.296Z',
    updatedAt: '2021-11-27T03:54:34.296Z',
    cuisineId: 5,
    cuisine: {
      id: 5,
      name: 'French',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 153,
    name: 'Palace Yummy',
    customerRating: 4,
    distance: 2,
    price: 50,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 158,
    name: 'Aladdin Yummy',
    customerRating: 1,
    distance: 4,
    price: 30,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 163,
    name: 'Cellar Yummy',
    customerRating: 2,
    distance: 8,
    price: 50,
    createdAt: '2021-11-27T03:54:34.298Z',
    updatedAt: '2021-11-27T03:54:34.298Z',
    cuisineId: 6,
    cuisine: {
      id: 6,
      name: 'Japanese',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 168,
    name: 'Factory Yummy',
    customerRating: 4,
    distance: 3,
    price: 15,
    createdAt: '2021-11-27T03:54:34.299Z',
    updatedAt: '2021-11-27T03:54:34.299Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 173,
    name: 'Kitchenbia',
    customerRating: 2,
    distance: 1,
    price: 30,
    createdAt: '2021-11-27T03:54:34.299Z',
    updatedAt: '2021-11-27T03:54:34.299Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 178,
    name: 'Bit Kitchen',
    customerRating: 1,
    distance: 1,
    price: 30,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 183,
    name: 'Munchies Kitchen',
    customerRating: 5,
    distance: 5,
    price: 45,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 188,
    name: 'Kitchenarc',
    customerRating: 2,
    distance: 5,
    price: 10,
    createdAt: '2021-11-27T03:54:34.303Z',
    updatedAt: '2021-11-27T03:54:34.303Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 193,
    name: 'Connoisseur Bar',
    customerRating: 2,
    distance: 2,
    price: 25,
    createdAt: '2021-11-27T03:54:34.303Z',
    updatedAt: '2021-11-27T03:54:34.303Z',
    cuisineId: 17,
    cuisine: {
      id: 17,
      name: 'Indonesian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 198,
    name: 'Grill Bar',
    customerRating: 1,
    distance: 9,
    price: 40,
    createdAt: '2021-11-27T03:54:34.304Z',
    updatedAt: '2021-11-27T03:54:34.304Z',
    cuisineId: 5,
    cuisine: {
      id: 5,
      name: 'French',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 98,
    name: 'Festive Grill',
    customerRating: 2,
    distance: 4,
    price: 35,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 6,
    cuisine: {
      id: 6,
      name: 'Japanese',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 103,
    name: 'Hungry Grill',
    customerRating: 3,
    distance: 4,
    price: 50,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 108,
    name: 'Grillsio',
    customerRating: 3,
    distance: 4,
    price: 15,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 115,
    name: 'Wish Grill',
    customerRating: 1,
    distance: 8,
    price: 30,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 3,
    cuisine: {
      id: 3,
      name: 'Thai',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 119,
    name: 'Gusto Grill',
    customerRating: 3,
    distance: 10,
    price: 10,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 3,
    cuisine: {
      id: 3,
      name: 'Thai',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 124,
    name: 'Palaceio',
    customerRating: 4,
    distance: 7,
    price: 45,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 14,
    cuisine: {
      id: 14,
      name: 'Malaysian',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 129,
    name: 'Palaceopedia',
    customerRating: 5,
    distance: 10,
    price: 25,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 134,
    name: 'Dished Palace',
    customerRating: 5,
    distance: 7,
    price: 25,
    createdAt: '2021-11-27T03:54:34.294Z',
    updatedAt: '2021-11-27T03:54:34.294Z',
    cuisineId: 5,
    cuisine: {
      id: 5,
      name: 'French',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 139,
    name: 'Palacearo',
    customerRating: 1,
    distance: 4,
    price: 50,
    createdAt: '2021-11-27T03:54:34.294Z',
    updatedAt: '2021-11-27T03:54:34.294Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 144,
    name: 'Palaceocity',
    customerRating: 1,
    distance: 7,
    price: 25,
    createdAt: '2021-11-27T03:54:34.296Z',
    updatedAt: '2021-11-27T03:54:34.296Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 149,
    name: 'Hotspot Yummy',
    customerRating: 1,
    distance: 3,
    price: 45,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 17,
    cuisine: {
      id: 17,
      name: 'Indonesian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 154,
    name: 'Sizzle Yummy',
    customerRating: 3,
    distance: 1,
    price: 15,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 159,
    name: 'Yummyscape',
    customerRating: 1,
    distance: 3,
    price: 35,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 164,
    name: 'Festive Yummy',
    customerRating: 2,
    distance: 2,
    price: 25,
    createdAt: '2021-11-27T03:54:34.299Z',
    updatedAt: '2021-11-27T03:54:34.299Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 169,
    name: 'Dude Kitchen',
    customerRating: 4,
    distance: 10,
    price: 35,
    createdAt: '2021-11-27T03:54:34.299Z',
    updatedAt: '2021-11-27T03:54:34.299Z',
    cuisineId: 5,
    cuisine: {
      id: 5,
      name: 'French',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 174,
    name: 'Fuel Kitchen',
    customerRating: 4,
    distance: 7,
    price: 40,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 179,
    name: 'Kitchenlia',
    customerRating: 2,
    distance: 7,
    price: 50,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 184,
    name: 'Fine Kitchen',
    customerRating: 2,
    distance: 10,
    price: 20,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 17,
    cuisine: {
      id: 17,
      name: 'Indonesian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 189,
    name: 'Kitchenry',
    customerRating: 4,
    distance: 6,
    price: 40,
    createdAt: '2021-11-27T03:54:34.303Z',
    updatedAt: '2021-11-27T03:54:34.303Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 194,
    name: 'Bariva',
    customerRating: 5,
    distance: 10,
    price: 40,
    createdAt: '2021-11-27T03:54:34.303Z',
    updatedAt: '2021-11-27T03:54:34.303Z',
    cuisineId: 10,
    cuisine: {
      id: 10,
      name: 'Indian',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 199,
    name: 'Dine Bar',
    customerRating: 5,
    distance: 10,
    price: 35,
    createdAt: '2021-11-27T03:54:34.304Z',
    updatedAt: '2021-11-27T03:54:34.304Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 99,
    name: 'Me Grill',
    customerRating: 5,
    distance: 5,
    price: 25,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 104,
    name: 'Cater Grill',
    customerRating: 4,
    distance: 3,
    price: 50,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 5,
    cuisine: {
      id: 5,
      name: 'French',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 109,
    name: 'Tasteful Grill',
    customerRating: 5,
    distance: 9,
    price: 10,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 114,
    name: 'Grillarc',
    customerRating: 2,
    distance: 3,
    price: 25,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 120,
    name: 'Chef Grill',
    customerRating: 5,
    distance: 4,
    price: 35,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 125,
    name: 'Palaceado',
    customerRating: 3,
    distance: 6,
    price: 25,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 130,
    name: 'Gusto Palace',
    customerRating: 5,
    distance: 10,
    price: 30,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 135,
    name: 'Spicy PalaceClick to check domain availability.',
    customerRating: 2,
    distance: 6,
    price: 10,
    createdAt: '2021-11-27T03:54:34.294Z',
    updatedAt: '2021-11-27T03:54:34.294Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 140,
    name: 'Place Palace',
    customerRating: 5,
    distance: 2,
    price: 40,
    createdAt: '2021-11-27T03:54:34.294Z',
    updatedAt: '2021-11-27T03:54:34.294Z',
    cuisineId: 17,
    cuisine: {
      id: 17,
      name: 'Indonesian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 145,
    name: 'Ambrosial Yummy',
    customerRating: 3,
    distance: 7,
    price: 50,
    createdAt: '2021-11-27T03:54:34.296Z',
    updatedAt: '2021-11-27T03:54:34.296Z',
    cuisineId: 17,
    cuisine: {
      id: 17,
      name: 'Indonesian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 150,
    name: 'Chef Yummy',
    customerRating: 4,
    distance: 9,
    price: 10,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 155,
    name: 'Galore Yummy',
    customerRating: 2,
    distance: 9,
    price: 40,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 160,
    name: 'Yummylance',
    customerRating: 1,
    distance: 9,
    price: 10,
    createdAt: '2021-11-27T03:54:34.298Z',
    updatedAt: '2021-11-27T03:54:34.298Z',
    cuisineId: 6,
    cuisine: {
      id: 6,
      name: 'Japanese',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 165,
    name: 'Upscale Yummy',
    customerRating: 2,
    distance: 10,
    price: 45,
    createdAt: '2021-11-27T03:54:34.299Z',
    updatedAt: '2021-11-27T03:54:34.299Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 170,
    name: 'Kitchengenics',
    customerRating: 4,
    distance: 3,
    price: 20,
    createdAt: '2021-11-27T03:54:34.299Z',
    updatedAt: '2021-11-27T03:54:34.299Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 175,
    name: 'Dished Kitchen',
    customerRating: 5,
    distance: 3,
    price: 30,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 14,
    cuisine: {
      id: 14,
      name: 'Malaysian',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 180,
    name: 'Kitchenster',
    customerRating: 2,
    distance: 1,
    price: 10,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 185,
    name: 'Crisp Kitchen',
    customerRating: 1,
    distance: 3,
    price: 35,
    createdAt: '2021-11-27T03:54:34.301Z',
    updatedAt: '2021-11-27T03:54:34.301Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 190,
    name: 'Safety Kitchen',
    customerRating: 2,
    distance: 4,
    price: 20,
    createdAt: '2021-11-27T03:54:34.303Z',
    updatedAt: '2021-11-27T03:54:34.303Z',
    cuisineId: 6,
    cuisine: {
      id: 6,
      name: 'Japanese',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 195,
    name: 'Barscape',
    customerRating: 3,
    distance: 4,
    price: 15,
    createdAt: '2021-11-27T03:54:34.303Z',
    updatedAt: '2021-11-27T03:54:34.303Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 200,
    name: 'Wave Bar',
    customerRating: 4,
    distance: 8,
    price: 20,
    createdAt: '2021-11-27T03:54:34.304Z',
    updatedAt: '2021-11-27T03:54:34.304Z',
    cuisineId: 3,
    cuisine: {
      id: 3,
      name: 'Thai',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 100,
    name: 'Lounge Grill',
    customerRating: 3,
    distance: 10,
    price: 40,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 5,
    cuisine: {
      id: 5,
      name: 'French',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 105,
    name: 'Presto Grill',
    customerRating: 5,
    distance: 2,
    price: 40,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 110,
    name: 'Yummy Grill',
    customerRating: 1,
    distance: 8,
    price: 50,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 113,
    name: 'Cuts Grill',
    customerRating: 1,
    distance: 7,
    price: 30,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 118,
    name: 'Wedge Grill',
    customerRating: 2,
    distance: 4,
    price: 35,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 122,
    name: 'Tasteful Palace',
    customerRating: 2,
    distance: 3,
    price: 20,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 127,
    name: 'Palaceadri',
    customerRating: 4,
    distance: 8,
    price: 50,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 132,
    name: 'Smash Palace',
    customerRating: 1,
    distance: 9,
    price: 10,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 137,
    name: 'Relish Palace',
    customerRating: 2,
    distance: 3,
    price: 40,
    createdAt: '2021-11-27T03:54:34.294Z',
    updatedAt: '2021-11-27T03:54:34.294Z',
    cuisineId: 9,
    cuisine: {
      id: 9,
      name: 'Vietnamese',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 142,
    name: 'Fury Palace',
    customerRating: 5,
    distance: 3,
    price: 30,
    createdAt: '2021-11-27T03:54:34.295Z',
    updatedAt: '2021-11-27T03:54:34.295Z',
    cuisineId: 17,
    cuisine: {
      id: 17,
      name: 'Indonesian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 147,
    name: 'Accent Yummy',
    customerRating: 5,
    distance: 3,
    price: 40,
    createdAt: '2021-11-27T03:54:34.296Z',
    updatedAt: '2021-11-27T03:54:34.296Z',
    cuisineId: 17,
    cuisine: {
      id: 17,
      name: 'Indonesian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 152,
    name: 'Yummyella',
    customerRating: 2,
    distance: 3,
    price: 40,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 6,
    cuisine: {
      id: 6,
      name: 'Japanese',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 157,
    name: 'Divine Yummy',
    customerRating: 1,
    distance: 10,
    price: 25,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 162,
    name: 'Cantina Yummy',
    customerRating: 5,
    distance: 6,
    price: 20,
    createdAt: '2021-11-27T03:54:34.298Z',
    updatedAt: '2021-11-27T03:54:34.298Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 167,
    name: 'Diced Yummy',
    customerRating: 5,
    distance: 3,
    price: 20,
    createdAt: '2021-11-27T03:54:34.299Z',
    updatedAt: '2021-11-27T03:54:34.299Z',
    cuisineId: 14,
    cuisine: {
      id: 14,
      name: 'Malaysian',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 172,
    name: 'Story Kitchen',
    customerRating: 5,
    distance: 3,
    price: 20,
    createdAt: '2021-11-27T03:54:34.299Z',
    updatedAt: '2021-11-27T03:54:34.299Z',
    cuisineId: 15,
    cuisine: {
      id: 15,
      name: 'African',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 177,
    name: 'Bang Kitchen',
    customerRating: 1,
    distance: 1,
    price: 40,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 182,
    name: 'Connoisseur Kitchen',
    customerRating: 2,
    distance: 6,
    price: 30,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 187,
    name: 'Kitchenvio',
    customerRating: 3,
    distance: 1,
    price: 50,
    createdAt: '2021-11-27T03:54:34.302Z',
    updatedAt: '2021-11-27T03:54:34.302Z',
    cuisineId: 12,
    cuisine: {
      id: 12,
      name: 'Greek',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 192,
    name: 'Brew Kitchen',
    customerRating: 2,
    distance: 4,
    price: 40,
    createdAt: '2021-11-27T03:54:34.303Z',
    updatedAt: '2021-11-27T03:54:34.303Z',
    cuisineId: 18,
    cuisine: {
      id: 18,
      name: 'Russian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 197,
    name: 'Place Bar',
    customerRating: 3,
    distance: 5,
    price: 50,
    createdAt: '2021-11-27T03:54:34.304Z',
    updatedAt: '2021-11-27T03:54:34.304Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 101,
    name: 'Coastal Grill',
    customerRating: 2,
    distance: 7,
    price: 10,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 17,
    cuisine: {
      id: 17,
      name: 'Indonesian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 106,
    name: 'Crispy Grill',
    customerRating: 1,
    distance: 7,
    price: 45,
    createdAt: '2021-11-27T03:54:34.291Z',
    updatedAt: '2021-11-27T03:54:34.291Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 111,
    name: 'Crisp Grill',
    customerRating: 2,
    distance: 6,
    price: 50,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 19,
    cuisine: {
      id: 19,
      name: 'Other',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 116,
    name: 'Dished Grill',
    customerRating: 3,
    distance: 1,
    price: 10,
    createdAt: '2021-11-27T03:54:34.292Z',
    updatedAt: '2021-11-27T03:54:34.292Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 121,
    name: 'Grove Palace',
    customerRating: 2,
    distance: 4,
    price: 20,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 126,
    name: 'Flavor Palace',
    customerRating: 2,
    distance: 2,
    price: 20,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 14,
    cuisine: {
      id: 14,
      name: 'Malaysian',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 131,
    name: 'Feed Palace',
    customerRating: 2,
    distance: 5,
    price: 20,
    createdAt: '2021-11-27T03:54:34.293Z',
    updatedAt: '2021-11-27T03:54:34.293Z',
    cuisineId: 7,
    cuisine: {
      id: 7,
      name: 'Turkish',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 136,
    name: 'Nouveau Palace',
    customerRating: 3,
    distance: 8,
    price: 15,
    createdAt: '2021-11-27T03:54:34.294Z',
    updatedAt: '2021-11-27T03:54:34.294Z',
    cuisineId: 4,
    cuisine: {
      id: 4,
      name: 'Italian',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 141,
    name: 'Aroma Palace',
    customerRating: 2,
    distance: 5,
    price: 40,
    createdAt: '2021-11-27T03:54:34.294Z',
    updatedAt: '2021-11-27T03:54:34.294Z',
    cuisineId: 1,
    cuisine: {
      id: 1,
      name: 'American',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 146,
    name: 'Nibble Yummy',
    customerRating: 1,
    distance: 8,
    price: 15,
    createdAt: '2021-11-27T03:54:34.296Z',
    updatedAt: '2021-11-27T03:54:34.296Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  },
  {
    id: 151,
    name: 'Acclaimed Yummy',
    customerRating: 5,
    distance: 8,
    price: 50,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 8,
    cuisine: {
      id: 8,
      name: 'Korean',
      createdAt: '2021-11-27T03:54:34.243Z',
      updatedAt: '2021-11-27T03:54:34.243Z'
    }
  },
  {
    id: 156,
    name: 'Yummyquipo',
    customerRating: 2,
    distance: 3,
    price: 45,
    createdAt: '2021-11-27T03:54:34.297Z',
    updatedAt: '2021-11-27T03:54:34.297Z',
    cuisineId: 7,
    cuisine: {
      id: 7,
      name: 'Turkish',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 161,
    name: 'Crisp Yummy',
    customerRating: 1,
    distance: 10,
    price: 25,
    createdAt: '2021-11-27T03:54:34.298Z',
    updatedAt: '2021-11-27T03:54:34.298Z',
    cuisineId: 13,
    cuisine: {
      id: 13,
      name: 'Mexican',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 166,
    name: 'Lucha Yummy',
    customerRating: 1,
    distance: 10,
    price: 40,
    createdAt: '2021-11-27T03:54:34.299Z',
    updatedAt: '2021-11-27T03:54:34.299Z',
    cuisineId: 3,
    cuisine: {
      id: 3,
      name: 'Thai',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 171,
    name: 'Galore Kitchen',
    customerRating: 5,
    distance: 10,
    price: 45,
    createdAt: '2021-11-27T03:54:34.299Z',
    updatedAt: '2021-11-27T03:54:34.299Z',
    cuisineId: 11,
    cuisine: {
      id: 11,
      name: 'Spanish',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 176,
    name: 'Kitchenish',
    customerRating: 3,
    distance: 2,
    price: 20,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 6,
    cuisine: {
      id: 6,
      name: 'Japanese',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 181,
    name: 'Devine Kitchen',
    customerRating: 3,
    distance: 9,
    price: 30,
    createdAt: '2021-11-27T03:54:34.300Z',
    updatedAt: '2021-11-27T03:54:34.300Z',
    cuisineId: 16,
    cuisine: {
      id: 16,
      name: 'German',
      createdAt: '2021-11-27T03:54:34.244Z',
      updatedAt: '2021-11-27T03:54:34.244Z'
    }
  },
  {
    id: 186,
    name: 'Hut Kitchen',
    customerRating: 3,
    distance: 5,
    price: 10,
    createdAt: '2021-11-27T03:54:34.302Z',
    updatedAt: '2021-11-27T03:54:34.302Z',
    cuisineId: 17,
    cuisine: {
      id: 17,
      name: 'Indonesian',
      createdAt: '2021-11-27T03:54:34.245Z',
      updatedAt: '2021-11-27T03:54:34.245Z'
    }
  },
  {
    id: 191,
    name: 'Smash Kitchen',
    customerRating: 1,
    distance: 2,
    price: 50,
    createdAt: '2021-11-27T03:54:34.303Z',
    updatedAt: '2021-11-27T03:54:34.303Z',
    cuisineId: 7,
    cuisine: {
      id: 7,
      name: 'Turkish',
      createdAt: '2021-11-27T03:54:34.242Z',
      updatedAt: '2021-11-27T03:54:34.242Z'
    }
  },
  {
    id: 196,
    name: 'Hot Bar',
    customerRating: 4,
    distance: 4,
    price: 20,
    createdAt: '2021-11-27T03:54:34.303Z',
    updatedAt: '2021-11-27T03:54:34.303Z',
    cuisineId: 2,
    cuisine: {
      id: 2,
      name: 'Chinese',
      createdAt: '2021-11-27T03:54:34.241Z',
      updatedAt: '2021-11-27T03:54:34.241Z'
    }
  }
]

module.exports = restaurantData
