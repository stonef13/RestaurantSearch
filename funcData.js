const cuisines = [
  {
    id: 1,
    name: 'American'
  },
  {
    id: 2,
    name: 'Chinese'
  },
  {
    id: 3,
    name: 'Thai'
  },
  {
    id: 4,
    name: 'Italian'
  },
  {
    id: 5,
    name: 'French'
  },
  {
    id: 6,
    name: 'Japanese'
  },
  {
    id: 7,
    name: 'Turkish'
  },
  {
    id: 8,
    name: 'Korean'
  },
  {
    id: 9,
    name: 'Vietnamese'
  },
  {
    id: 10,
    name: 'Indian'
  },
  {
    id: 11,
    name: 'Spanish'
  },
  {
    id: 12,
    name: 'Greek'
  },
  {
    id: 13,
    name: 'Mexican'
  },
  {
    id: 14,
    name: 'Malaysian'
  },
  {
    id: 15,
    name: 'African'
  },
  {
    id: 16,
    name: 'German'
  },
  {
    id: 17,
    name: 'Indonesian'
  },
  {
    id: 18,
    name: 'Russian'
  },
  {
    id: 19,
    name: 'Other'
  }
]

const restaurants = [
  {
    name: 'Deliciousgenix',
    customerRating: 4,
    distance: 1,
    price: 10,
    cuisineId: 11
  },
  {
    name: 'Herbed Delicious',
    customerRating: 4,
    distance: 7,
    price: 20,
    cuisineId: 9
  },
  {
    name: 'Deliciousscape',
    customerRating: 3,
    distance: 7,
    price: 50,
    cuisineId: 1
  },
  {
    name: 'Hideaway Delicious',
    customerRating: 2,
    distance: 5,
    price: 40,
    cuisineId: 12
  },
  {
    name: 'Cuts Delicious',
    customerRating: 3,
    distance: 9,
    price: 25,
    cuisineId: 8
  },
  {
    name: 'Lord Delicious',
    customerRating: 1,
    distance: 7,
    price: 35,
    cuisineId: 18
  },
  {
    name: 'Hilltop Delicious',
    customerRating: 3,
    distance: 3,
    price: 45,
    cuisineId: 6
  },
  {
    name: 'Fine Delicious',
    customerRating: 4,
    distance: 5,
    price: 45,
    cuisineId: 4
  },
  {
    name: 'Deliciousish',
    customerRating: 1,
    distance: 3,
    price: 50,
    cuisineId: 12
  },
  {
    name: 'Havana Delicious',
    customerRating: 3,
    distance: 1,
    price: 35,
    cuisineId: 8
  },
  {
    name: 'Deliciouspad',
    customerRating: 3,
    distance: 10,
    price: 40,
    cuisineId: 13
  },
  {
    name: 'Deliciousbea',
    customerRating: 5,
    distance: 6,
    price: 50,
    cuisineId: 15
  },
  {
    name: 'Deliciousquipo',
    customerRating: 2,
    distance: 2,
    price: 10,
    cuisineId: 19
  },
  {
    name: 'Fed Delicious',
    customerRating: 2,
    distance: 9,
    price: 35,
    cuisineId: 4
  },
  {
    name: 'Hotspot Delicious',
    customerRating: 4,
    distance: 10,
    price: 25,
    cuisineId: 13
  },
  {
    name: 'Gusto Delicious',
    customerRating: 5,
    distance: 3,
    price: 50,
    cuisineId: 2
  },
  {
    name: 'Deliciouszen',
    customerRating: 2,
    distance: 6,
    price: 30,
    cuisineId: 5
  },
  {
    name: 'Deliciouszilla',
    customerRating: 4,
    distance: 1,
    price: 15,
    cuisineId: 2
  },
  {
    name: 'Deliciousio',
    customerRating: 5,
    distance: 9,
    price: 40,
    cuisineId: 19
  },
  {
    name: 'Local Delicious',
    customerRating: 5,
    distance: 4,
    price: 20,
    cuisineId: 12
  },
  {
    name: 'Crisp Delicious',
    customerRating: 5,
    distance: 2,
    price: 45,
    cuisineId: 18
  },
  {
    name: 'Deliciousoryx',
    customerRating: 1,
    distance: 5,
    price: 25,
    cuisineId: 2
  },
  {
    name: 'Bang Delicious',
    customerRating: 5,
    distance: 2,
    price: 15,
    cuisineId: 18
  },
  {
    name: 'Deliciouszoid',
    customerRating: 3,
    distance: 2,
    price: 30,
    cuisineId: 4
  },
  {
    name: 'Hearty ChowClick',
    customerRating: 2,
    distance: 6,
    price: 25,
    cuisineId: 8
  },
  {
    name: 'Traditional Chow',
    customerRating: 5,
    distance: 2,
    price: 15,
    cuisineId: 11
  },
  {
    name: 'Bash Chow',
    customerRating: 2,
    distance: 6,
    price: 45,
    cuisineId: 9
  },
  {
    name: 'Minty Chow',
    customerRating: 4,
    distance: 8,
    price: 35,
    cuisineId: 5
  },
  {
    name: 'Chowaza',
    customerRating: 3,
    distance: 9,
    price: 20,
    cuisineId: 12
  },
  {
    name: 'Lucha Chow',
    customerRating: 3,
    distance: 4,
    price: 25,
    cuisineId: 14
  },
  {
    name: 'Hut Chow',
    customerRating: 2,
    distance: 2,
    price: 10,
    cuisineId: 3
  },
  {
    name: 'Wish Chow',
    customerRating: 3,
    distance: 1,
    price: 40,
    cuisineId: 1
  },
  {
    name: 'Chowish',
    customerRating: 3,
    distance: 8,
    price: 10,
    cuisineId: 19
  },
  {
    name: 'Bazaar Chow',
    customerRating: 4,
    distance: 4,
    price: 40,
    cuisineId: 1
  },
  {
    name: 'Story Chow',
    customerRating: 2,
    distance: 10,
    price: 30,
    cuisineId: 19
  },
  {
    name: 'Hideout Chow',
    customerRating: 2,
    distance: 7,
    price: 10,
    cuisineId: 15
  },
  {
    name: 'Strip Chow',
    customerRating: 5,
    distance: 9,
    price: 35,
    cuisineId: 19
  },
  {
    name: 'Aroma Chow',
    customerRating: 5,
    distance: 10,
    price: 10,
    cuisineId: 18
  },
  {
    name: 'Chowology',
    customerRating: 5,
    distance: 9,
    price: 30,
    cuisineId: 6
  },
  {
    name: 'Chowify',
    customerRating: 4,
    distance: 4,
    price: 45,
    cuisineId: 2
  },
  {
    name: 'Piece Chow',
    customerRating: 4,
    distance: 9,
    price: 10,
    cuisineId: 13
  },
  {
    name: 'Cave Chow',
    customerRating: 3,
    distance: 4,
    price: 40,
    cuisineId: 6
  },
  {
    name: 'Wagon Chow',
    customerRating: 3,
    distance: 9,
    price: 10,
    cuisineId: 1
  },
  {
    name: 'Choworyx',
    customerRating: 2,
    distance: 3,
    price: 40,
    cuisineId: 7
  },
  {
    name: 'Whole Chow',
    customerRating: 2,
    distance: 7,
    price: 15,
    cuisineId: 4
  },
  {
    name: 'Central Chow',
    customerRating: 3,
    distance: 7,
    price: 45,
    cuisineId: 1
  },
  {
    name: 'Ambrosial Chow',
    customerRating: 4,
    distance: 5,
    price: 50,
    cuisineId: 15
  },
  {
    name: 'Place Chow',
    customerRating: 2,
    distance: 2,
    price: 15,
    cuisineId: 11
  },
  {
    name: 'Reservation Table',
    customerRating: 4,
    distance: 3,
    price: 20,
    cuisineId: 13
  },
  {
    name: 'Chopped Table',
    customerRating: 1,
    distance: 5,
    price: 40,
    cuisineId: 3
  },
  {
    name: 'Herbed Table',
    customerRating: 1,
    distance: 1,
    price: 15,
    cuisineId: 12
  },
  {
    name: 'Palate Table',
    customerRating: 1,
    distance: 1,
    price: 15,
    cuisineId: 14
  },
  {
    name: 'Grove Table',
    customerRating: 5,
    distance: 2,
    price: 10,
    cuisineId: 13
  },
  {
    name: 'Fodder Table',
    customerRating: 4,
    distance: 1,
    price: 20,
    cuisineId: 8
  },
  {
    name: 'Tablebes',
    customerRating: 4,
    distance: 2,
    price: 40,
    cuisineId: 13
  },
  {
    name: 'Chow Table',
    customerRating: 1,
    distance: 1,
    price: 10,
    cuisineId: 2
  },
  {
    name: 'Bay Table',
    customerRating: 3,
    distance: 7,
    price: 50,
    cuisineId: 18
  },
  {
    name: 'Tablebea',
    customerRating: 1,
    distance: 7,
    price: 25,
    cuisineId: 10
  },
  {
    name: 'Fine Table',
    customerRating: 2,
    distance: 5,
    price: 15,
    cuisineId: 12
  },
  {
    name: 'Cellar Table',
    customerRating: 4,
    distance: 8,
    price: 25,
    cuisineId: 8
  },
  {
    name: 'Boy Table',
    customerRating: 3,
    distance: 9,
    price: 30,
    cuisineId: 13
  },
  {
    name: 'Tableomatic',
    customerRating: 1,
    distance: 5,
    price: 20,
    cuisineId: 16
  },
  {
    name: 'Tableque',
    customerRating: 4,
    distance: 3,
    price: 10,
    cuisineId: 4
  },
  {
    name: 'Tableio',
    customerRating: 3,
    distance: 3,
    price: 40,
    cuisineId: 1
  },
  {
    name: 'Tableoont',
    customerRating: 5,
    distance: 10,
    price: 20,
    cuisineId: 12
  },
  {
    name: 'Tableadora',
    customerRating: 5,
    distance: 2,
    price: 25,
    cuisineId: 8
  },
  {
    name: 'Tableooze',
    customerRating: 3,
    distance: 1,
    price: 50,
    cuisineId: 16
  },
  {
    name: 'Garnish Table',
    customerRating: 4,
    distance: 9,
    price: 40,
    cuisineId: 4
  },
  {
    name: 'Brew Table',
    customerRating: 2,
    distance: 10,
    price: 15,
    cuisineId: 8
  },
  {
    name: 'Hotspot Table',
    customerRating: 3,
    distance: 7,
    price: 40,
    cuisineId: 15
  },
  {
    name: 'Fresh Table',
    customerRating: 3,
    distance: 2,
    price: 30,
    cuisineId: 1
  },
  {
    name: 'Appetite Table',
    customerRating: 1,
    distance: 10,
    price: 40,
    cuisineId: 8
  },
  {
    name: 'Cave Tasty',
    customerRating: 5,
    distance: 10,
    price: 15,
    cuisineId: 18
  },
  {
    name: 'Whole Tasty',
    customerRating: 1,
    distance: 1,
    price: 30,
    cuisineId: 5
  },
  {
    name: 'Tastyio',
    customerRating: 3,
    distance: 10,
    price: 30,
    cuisineId: 14
  },
  {
    name: 'Lane Tasty',
    customerRating: 5,
    distance: 5,
    price: 35,
    cuisineId: 2
  },
  {
    name: 'Nouveau Tasty',
    customerRating: 1,
    distance: 9,
    price: 50,
    cuisineId: 9
  },
  {
    name: 'Relish Tasty',
    customerRating: 3,
    distance: 8,
    price: 50,
    cuisineId: 13
  },
  {
    name: 'Tastyooze',
    customerRating: 3,
    distance: 6,
    price: 20,
    cuisineId: 11
  },
  {
    name: 'Binge Tasty',
    customerRating: 1,
    distance: 8,
    price: 10,
    cuisineId: 4
  },
  {
    name: 'Fed Tasty',
    customerRating: 3,
    distance: 5,
    price: 25,
    cuisineId: 2
  },
  {
    name: 'Diced Tasty',
    customerRating: 5,
    distance: 4,
    price: 40,
    cuisineId: 7
  },
  {
    name: 'Tastylux',
    customerRating: 5,
    distance: 8,
    price: 35,
    cuisineId: 14
  },
  {
    name: 'Tastyaza',
    customerRating: 3,
    distance: 7,
    price: 45,
    cuisineId: 18
  },
  {
    name: 'Grill Tasty',
    customerRating: 2,
    distance: 2,
    price: 30,
    cuisineId: 2
  },
  {
    name: 'Tastyopolis',
    customerRating: 1,
    distance: 6,
    price: 20,
    cuisineId: 8
  },
  {
    name: 'Stand Tasty',
    customerRating: 4,
    distance: 3,
    price: 40,
    cuisineId: 16
  },
  {
    name: 'Feast Tasty',
    customerRating: 2,
    distance: 8,
    price: 20,
    cuisineId: 18
  },
  {
    name: 'Baby Tasty',
    customerRating: 3,
    distance: 1,
    price: 20,
    cuisineId: 8
  },
  {
    name: 'Fodder Tasty',
    customerRating: 4,
    distance: 4,
    price: 30,
    cuisineId: 9
  },
  {
    name: 'Takeout Tasty',
    customerRating: 5,
    distance: 5,
    price: 20,
    cuisineId: 11
  },
  {
    name: 'Wrap Tasty',
    customerRating: 1,
    distance: 10,
    price: 30,
    cuisineId: 4
  },
  {
    name: 'Tastylia',
    customerRating: 3,
    distance: 4,
    price: 50,
    cuisineId: 3
  },
  {
    name: 'Havana Tasty',
    customerRating: 4,
    distance: 10,
    price: 15,
    cuisineId: 11
  },
  {
    name: 'Crumb Tasty',
    customerRating: 2,
    distance: 5,
    price: 25,
    cuisineId: 11
  },
  {
    name: 'Dished Tasty',
    customerRating: 1,
    distance: 7,
    price: 25,
    cuisineId: 18
  },
  {
    name: 'Chop Grill',
    customerRating: 5,
    distance: 8,
    price: 10,
    cuisineId: 17
  },
  {
    name: 'Festive Grill',
    customerRating: 2,
    distance: 4,
    price: 35,
    cuisineId: 6
  },
  {
    name: 'Me Grill',
    customerRating: 5,
    distance: 5,
    price: 25,
    cuisineId: 9
  },
  {
    name: 'Lounge Grill',
    customerRating: 3,
    distance: 10,
    price: 40,
    cuisineId: 5
  },
  {
    name: 'Coastal Grill',
    customerRating: 2,
    distance: 7,
    price: 10,
    cuisineId: 17
  },
  {
    name: 'Perfection Grill',
    customerRating: 3,
    distance: 3,
    price: 50,
    cuisineId: 7
  },
  {
    name: 'Hungry Grill',
    customerRating: 3,
    distance: 4,
    price: 50,
    cuisineId: 9
  },
  {
    name: 'Cater Grill',
    customerRating: 4,
    distance: 3,
    price: 50,
    cuisineId: 5
  },
  {
    name: 'Presto Grill',
    customerRating: 5,
    distance: 2,
    price: 40,
    cuisineId: 15
  },
  {
    name: 'Crispy Grill',
    customerRating: 1,
    distance: 7,
    price: 45,
    cuisineId: 19
  },
  {
    name: 'Grilltastic',
    customerRating: 3,
    distance: 3,
    price: 30,
    cuisineId: 14
  },
  {
    name: 'Grillsio',
    customerRating: 3,
    distance: 4,
    price: 15,
    cuisineId: 19
  },
  {
    name: 'Tasteful Grill',
    customerRating: 5,
    distance: 9,
    price: 10,
    cuisineId: 2
  },
  {
    name: 'Yummy Grill',
    customerRating: 1,
    distance: 8,
    price: 50,
    cuisineId: 15
  },
  {
    name: 'Crisp Grill',
    customerRating: 2,
    distance: 6,
    price: 50,
    cuisineId: 19
  },
  {
    name: 'Grillya',
    customerRating: 2,
    distance: 7,
    price: 40,
    cuisineId: 13
  },
  {
    name: 'Cuts Grill',
    customerRating: 1,
    distance: 7,
    price: 30,
    cuisineId: 8
  },
  {
    name: 'Grillarc',
    customerRating: 2,
    distance: 3,
    price: 25,
    cuisineId: 13
  },
  {
    name: 'Wish Grill',
    customerRating: 1,
    distance: 8,
    price: 30,
    cuisineId: 3
  },
  {
    name: 'Dished Grill',
    customerRating: 3,
    distance: 1,
    price: 10,
    cuisineId: 8
  },
  {
    name: 'Divine Grill',
    customerRating: 1,
    distance: 9,
    price: 25,
    cuisineId: 7
  },
  {
    name: 'Wedge Grill',
    customerRating: 2,
    distance: 4,
    price: 35,
    cuisineId: 2
  },
  {
    name: 'Gusto Grill',
    customerRating: 3,
    distance: 10,
    price: 10,
    cuisineId: 3
  },
  {
    name: 'Chef Grill',
    customerRating: 5,
    distance: 4,
    price: 35,
    cuisineId: 19
  },
  {
    name: 'Grove Palace',
    customerRating: 2,
    distance: 4,
    price: 20,
    cuisineId: 1
  },
  {
    name: 'Tasteful Palace',
    customerRating: 2,
    distance: 3,
    price: 20,
    cuisineId: 12
  },
  {
    name: 'Perfection Palace',
    customerRating: 3,
    distance: 1,
    price: 20,
    cuisineId: 3
  },
  {
    name: 'Palaceio',
    customerRating: 4,
    distance: 7,
    price: 45,
    cuisineId: 14
  },
  {
    name: 'Palaceado',
    customerRating: 3,
    distance: 6,
    price: 25,
    cuisineId: 4
  },
  {
    name: 'Flavor Palace',
    customerRating: 2,
    distance: 2,
    price: 20,
    cuisineId: 14
  },
  {
    name: 'Palaceadri',
    customerRating: 4,
    distance: 8,
    price: 50,
    cuisineId: 11
  },
  {
    name: 'Hotspot Palace',
    customerRating: 1,
    distance: 3,
    price: 35,
    cuisineId: 3
  },
  {
    name: 'Palaceopedia',
    customerRating: 5,
    distance: 10,
    price: 25,
    cuisineId: 8
  },
  {
    name: 'Gusto Palace',
    customerRating: 5,
    distance: 10,
    price: 30,
    cuisineId: 9
  },
  {
    name: 'Feed Palace',
    customerRating: 2,
    distance: 5,
    price: 20,
    cuisineId: 7
  },
  {
    name: 'Smash Palace',
    customerRating: 1,
    distance: 9,
    price: 10,
    cuisineId: 1
  },
  {
    name: 'Gnaw Palace',
    customerRating: 1,
    distance: 3,
    price: 50,
    cuisineId: 13
  },
  {
    name: 'Dished Palace',
    customerRating: 5,
    distance: 7,
    price: 25,
    cuisineId: 5
  },
  {
    name: 'Spicy PalaceClick to check domain availability.',
    customerRating: 2,
    distance: 6,
    price: 10,
    cuisineId: 9
  },
  {
    name: 'Nouveau Palace',
    customerRating: 3,
    distance: 8,
    price: 15,
    cuisineId: 4
  },
  {
    name: 'Relish Palace',
    customerRating: 2,
    distance: 3,
    price: 40,
    cuisineId: 9
  },
  {
    name: 'Palaceistic',
    customerRating: 2,
    distance: 10,
    price: 45,
    cuisineId: 9
  },
  {
    name: 'Palacearo',
    customerRating: 1,
    distance: 4,
    price: 50,
    cuisineId: 4
  },
  {
    name: 'Place Palace',
    customerRating: 5,
    distance: 2,
    price: 40,
    cuisineId: 17
  },
  {
    name: 'Aroma Palace',
    customerRating: 2,
    distance: 5,
    price: 40,
    cuisineId: 1
  },
  {
    name: 'Fury Palace',
    customerRating: 5,
    distance: 3,
    price: 30,
    cuisineId: 17
  },
  {
    name: 'Palacex',
    customerRating: 2,
    distance: 6,
    price: 15,
    cuisineId: 18
  },
  {
    name: 'Palaceocity',
    customerRating: 1,
    distance: 7,
    price: 25,
    cuisineId: 15
  },
  {
    name: 'Ambrosial Yummy',
    customerRating: 3,
    distance: 7,
    price: 50,
    cuisineId: 17
  },
  {
    name: 'Nibble Yummy',
    customerRating: 1,
    distance: 8,
    price: 15,
    cuisineId: 2
  },
  {
    name: 'Accent Yummy',
    customerRating: 5,
    distance: 3,
    price: 40,
    cuisineId: 17
  },
  {
    name: 'Yummylia',
    customerRating: 1,
    distance: 1,
    price: 40,
    cuisineId: 5
  },
  {
    name: 'Hotspot Yummy',
    customerRating: 1,
    distance: 3,
    price: 45,
    cuisineId: 17
  },
  {
    name: 'Chef Yummy',
    customerRating: 4,
    distance: 9,
    price: 10,
    cuisineId: 12
  },
  {
    name: 'Acclaimed Yummy',
    customerRating: 5,
    distance: 8,
    price: 50,
    cuisineId: 8
  },
  {
    name: 'Yummyella',
    customerRating: 2,
    distance: 3,
    price: 40,
    cuisineId: 6
  },
  {
    name: 'Palace Yummy',
    customerRating: 4,
    distance: 2,
    price: 50,
    cuisineId: 19
  },
  {
    name: 'Sizzle Yummy',
    customerRating: 3,
    distance: 1,
    price: 15,
    cuisineId: 18
  },
  {
    name: 'Galore Yummy',
    customerRating: 2,
    distance: 9,
    price: 40,
    cuisineId: 9
  },
  {
    name: 'Yummyquipo',
    customerRating: 2,
    distance: 3,
    price: 45,
    cuisineId: 7
  },
  {
    name: 'Divine Yummy',
    customerRating: 1,
    distance: 10,
    price: 25,
    cuisineId: 13
  },
  {
    name: 'Aladdin Yummy',
    customerRating: 1,
    distance: 4,
    price: 30,
    cuisineId: 15
  },
  {
    name: 'Yummyscape',
    customerRating: 1,
    distance: 3,
    price: 35,
    cuisineId: 13
  },
  {
    name: 'Yummylance',
    customerRating: 1,
    distance: 9,
    price: 10,
    cuisineId: 6
  },
  {
    name: 'Crisp Yummy',
    customerRating: 1,
    distance: 10,
    price: 25,
    cuisineId: 13
  },
  {
    name: 'Cantina Yummy',
    customerRating: 5,
    distance: 6,
    price: 20,
    cuisineId: 18
  },
  {
    name: 'Cellar Yummy',
    customerRating: 2,
    distance: 8,
    price: 50,
    cuisineId: 6
  },
  {
    name: 'Festive Yummy',
    customerRating: 2,
    distance: 2,
    price: 25,
    cuisineId: 15
  },
  {
    name: 'Upscale Yummy',
    customerRating: 2,
    distance: 10,
    price: 45,
    cuisineId: 11
  },
  {
    name: 'Lucha Yummy',
    customerRating: 1,
    distance: 10,
    price: 40,
    cuisineId: 3
  },
  {
    name: 'Diced Yummy',
    customerRating: 5,
    distance: 3,
    price: 20,
    cuisineId: 14
  },
  {
    name: 'Factory Yummy',
    customerRating: 4,
    distance: 3,
    price: 15,
    cuisineId: 13
  },
  {
    name: 'Dude Kitchen',
    customerRating: 4,
    distance: 10,
    price: 35,
    cuisineId: 5
  },
  {
    name: 'Kitchengenics',
    customerRating: 4,
    distance: 3,
    price: 20,
    cuisineId: 8
  },
  {
    name: 'Galore Kitchen',
    customerRating: 5,
    distance: 10,
    price: 45,
    cuisineId: 11
  },
  {
    name: 'Story Kitchen',
    customerRating: 5,
    distance: 3,
    price: 20,
    cuisineId: 15
  },
  {
    name: 'Kitchenbia',
    customerRating: 2,
    distance: 1,
    price: 30,
    cuisineId: 12
  },
  {
    name: 'Fuel Kitchen',
    customerRating: 4,
    distance: 7,
    price: 40,
    cuisineId: 2
  },
  {
    name: 'Dished Kitchen',
    customerRating: 5,
    distance: 3,
    price: 30,
    cuisineId: 14
  },
  {
    name: 'Kitchenish',
    customerRating: 3,
    distance: 2,
    price: 20,
    cuisineId: 6
  },
  {
    name: 'Bang Kitchen',
    customerRating: 1,
    distance: 1,
    price: 40,
    cuisineId: 11
  },
  {
    name: 'Bit Kitchen',
    customerRating: 1,
    distance: 1,
    price: 30,
    cuisineId: 18
  },
  {
    name: 'Kitchenlia',
    customerRating: 2,
    distance: 7,
    price: 50,
    cuisineId: 1
  },
  {
    name: 'Kitchenster',
    customerRating: 2,
    distance: 1,
    price: 10,
    cuisineId: 1
  },
  {
    name: 'Devine Kitchen',
    customerRating: 3,
    distance: 9,
    price: 30,
    cuisineId: 16
  },
  {
    name: 'Connoisseur Kitchen',
    customerRating: 2,
    distance: 6,
    price: 30,
    cuisineId: 19
  },
  {
    name: 'Munchies Kitchen',
    customerRating: 5,
    distance: 5,
    price: 45,
    cuisineId: 9
  },
  {
    name: 'Fine Kitchen',
    customerRating: 2,
    distance: 10,
    price: 20,
    cuisineId: 17
  },
  {
    name: 'Crisp Kitchen',
    customerRating: 1,
    distance: 3,
    price: 35,
    cuisineId: 2
  },
  {
    name: 'Hut Kitchen',
    customerRating: 3,
    distance: 5,
    price: 10,
    cuisineId: 17
  },
  {
    name: 'Kitchenvio',
    customerRating: 3,
    distance: 1,
    price: 50,
    cuisineId: 12
  },
  {
    name: 'Kitchenarc',
    customerRating: 2,
    distance: 5,
    price: 10,
    cuisineId: 15
  },
  {
    name: 'Kitchenry',
    customerRating: 4,
    distance: 6,
    price: 40,
    cuisineId: 11
  },
  {
    name: 'Safety Kitchen',
    customerRating: 2,
    distance: 4,
    price: 20,
    cuisineId: 6
  },
  {
    name: 'Smash Kitchen',
    customerRating: 1,
    distance: 2,
    price: 50,
    cuisineId: 7
  },
  {
    name: 'Brew Kitchen',
    customerRating: 2,
    distance: 4,
    price: 40,
    cuisineId: 18
  },
  {
    name: 'Connoisseur Bar',
    customerRating: 2,
    distance: 2,
    price: 25,
    cuisineId: 17
  },
  {
    name: 'Bariva',
    customerRating: 5,
    distance: 10,
    price: 40,
    cuisineId: 10
  },
  {
    name: 'Barscape',
    customerRating: 3,
    distance: 4,
    price: 15,
    cuisineId: 4
  },
  {
    name: 'Hot Bar',
    customerRating: 4,
    distance: 4,
    price: 20,
    cuisineId: 2
  },
  {
    name: 'Place Bar',
    customerRating: 3,
    distance: 5,
    price: 50,
    cuisineId: 13
  },
  {
    name: 'Grill Bar',
    customerRating: 1,
    distance: 9,
    price: 40,
    cuisineId: 5
  },
  {
    name: 'Dine Bar',
    customerRating: 5,
    distance: 10,
    price: 35,
    cuisineId: 15
  },
  {
    name: 'Wave Bar',
    customerRating: 4,
    distance: 8,
    price: 20,
    cuisineId: 3
  }
]

module.exports = {cuisines, restaurants}
