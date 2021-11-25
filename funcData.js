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
    customer_rating: 4,
    distance: 1,
    price: 10,
    cuisineId: 11
  },
  {
    name: 'Herbed Delicious',
    customer_rating: 4,
    distance: 7,
    price: 20,
    cuisineId: 9
  },
  {
    name: 'Deliciousscape',
    customer_rating: 3,
    distance: 7,
    price: 50,
    cuisineId: 1
  },
  {
    name: 'Hideaway Delicious',
    customer_rating: 2,
    distance: 5,
    price: 40,
    cuisineId: 12
  },
  {
    name: 'Cuts Delicious',
    customer_rating: 3,
    distance: 9,
    price: 25,
    cuisineId: 8
  },
  {
    name: 'Lord Delicious',
    customer_rating: 1,
    distance: 7,
    price: 35,
    cuisineId: 18
  },
  {
    name: 'Hilltop Delicious',
    customer_rating: 3,
    distance: 3,
    price: 45,
    cuisineId: 6
  },
  {
    name: 'Fine Delicious',
    customer_rating: 4,
    distance: 5,
    price: 45,
    cuisineId: 4
  },
  {
    name: 'Deliciousish',
    customer_rating: 1,
    distance: 3,
    price: 50,
    cuisineId: 12
  },
  {
    name: 'Havana Delicious',
    customer_rating: 3,
    distance: 1,
    price: 35,
    cuisineId: 8
  },
  {
    name: 'Deliciouspad',
    customer_rating: 3,
    distance: 10,
    price: 40,
    cuisineId: 13
  },
  {
    name: 'Deliciousbea',
    customer_rating: 5,
    distance: 6,
    price: 50,
    cuisineId: 15
  },
  {
    name: 'Deliciousquipo',
    customer_rating: 2,
    distance: 2,
    price: 10,
    cuisineId: 19
  },
  {
    name: 'Fed Delicious',
    customer_rating: 2,
    distance: 9,
    price: 35,
    cuisineId: 4
  },
  {
    name: 'Hotspot Delicious',
    customer_rating: 4,
    distance: 10,
    price: 25,
    cuisineId: 13
  },
  {
    name: 'Gusto Delicious',
    customer_rating: 5,
    distance: 3,
    price: 50,
    cuisineId: 2
  },
  {
    name: 'Deliciouszen',
    customer_rating: 2,
    distance: 6,
    price: 30,
    cuisineId: 5
  },
  {
    name: 'Deliciouszilla',
    customer_rating: 4,
    distance: 1,
    price: 15,
    cuisineId: 2
  },
  {
    name: 'Deliciousio',
    customer_rating: 5,
    distance: 9,
    price: 40,
    cuisineId: 19
  },
  {
    name: 'Local Delicious',
    customer_rating: 5,
    distance: 4,
    price: 20,
    cuisineId: 12
  },
  {
    name: 'Crisp Delicious',
    customer_rating: 5,
    distance: 2,
    price: 45,
    cuisineId: 18
  },
  {
    name: 'Deliciousoryx',
    customer_rating: 1,
    distance: 5,
    price: 25,
    cuisineId: 2
  },
  {
    name: 'Bang Delicious',
    customer_rating: 5,
    distance: 2,
    price: 15,
    cuisineId: 18
  },
  {
    name: 'Deliciouszoid',
    customer_rating: 3,
    distance: 2,
    price: 30,
    cuisineId: 4
  },
  {
    name: 'Hearty ChowClick',
    customer_rating: 2,
    distance: 6,
    price: 25,
    cuisineId: 8
  },
  {
    name: 'Traditional Chow',
    customer_rating: 5,
    distance: 2,
    price: 15,
    cuisineId: 11
  },
  {
    name: 'Bash Chow',
    customer_rating: 2,
    distance: 6,
    price: 45,
    cuisineId: 9
  },
  {
    name: 'Minty Chow',
    customer_rating: 4,
    distance: 8,
    price: 35,
    cuisineId: 5
  },
  {
    name: 'Chowaza',
    customer_rating: 3,
    distance: 9,
    price: 20,
    cuisineId: 12
  },
  {
    name: 'Lucha Chow',
    customer_rating: 3,
    distance: 4,
    price: 25,
    cuisineId: 14
  },
  {
    name: 'Hut Chow',
    customer_rating: 2,
    distance: 2,
    price: 10,
    cuisineId: 3
  },
  {
    name: 'Wish Chow',
    customer_rating: 3,
    distance: 1,
    price: 40,
    cuisineId: 1
  },
  {
    name: 'Chowish',
    customer_rating: 3,
    distance: 8,
    price: 10,
    cuisineId: 19
  },
  {
    name: 'Bazaar Chow',
    customer_rating: 4,
    distance: 4,
    price: 40,
    cuisineId: 1
  },
  {
    name: 'Story Chow',
    customer_rating: 2,
    distance: 10,
    price: 30,
    cuisineId: 19
  },
  {
    name: 'Hideout Chow',
    customer_rating: 2,
    distance: 7,
    price: 10,
    cuisineId: 15
  },
  {
    name: 'Strip Chow',
    customer_rating: 5,
    distance: 9,
    price: 35,
    cuisineId: 19
  },
  {
    name: 'Aroma Chow',
    customer_rating: 5,
    distance: 10,
    price: 10,
    cuisineId: 18
  },
  {
    name: 'Chowology',
    customer_rating: 5,
    distance: 9,
    price: 30,
    cuisineId: 6
  },
  {
    name: 'Chowify',
    customer_rating: 4,
    distance: 4,
    price: 45,
    cuisineId: 2
  },
  {
    name: 'Piece Chow',
    customer_rating: 4,
    distance: 9,
    price: 10,
    cuisineId: 13
  },
  {
    name: 'Cave Chow',
    customer_rating: 3,
    distance: 4,
    price: 40,
    cuisineId: 6
  },
  {
    name: 'Wagon Chow',
    customer_rating: 3,
    distance: 9,
    price: 10,
    cuisineId: 1
  },
  {
    name: 'Choworyx',
    customer_rating: 2,
    distance: 3,
    price: 40,
    cuisineId: 7
  },
  {
    name: 'Whole Chow',
    customer_rating: 2,
    distance: 7,
    price: 15,
    cuisineId: 4
  },
  {
    name: 'Central Chow',
    customer_rating: 3,
    distance: 7,
    price: 45,
    cuisineId: 1
  },
  {
    name: 'Ambrosial Chow',
    customer_rating: 4,
    distance: 5,
    price: 50,
    cuisineId: 15
  },
  {
    name: 'Place Chow',
    customer_rating: 2,
    distance: 2,
    price: 15,
    cuisineId: 11
  },
  {
    name: 'Reservation Table',
    customer_rating: 4,
    distance: 3,
    price: 20,
    cuisineId: 13
  },
  {
    name: 'Chopped Table',
    customer_rating: 1,
    distance: 5,
    price: 40,
    cuisineId: 3
  },
  {
    name: 'Herbed Table',
    customer_rating: 1,
    distance: 1,
    price: 15,
    cuisineId: 12
  },
  {
    name: 'Palate Table',
    customer_rating: 1,
    distance: 1,
    price: 15,
    cuisineId: 14
  },
  {
    name: 'Grove Table',
    customer_rating: 5,
    distance: 2,
    price: 10,
    cuisineId: 13
  },
  {
    name: 'Fodder Table',
    customer_rating: 4,
    distance: 1,
    price: 20,
    cuisineId: 8
  },
  {
    name: 'Tablebes',
    customer_rating: 4,
    distance: 2,
    price: 40,
    cuisineId: 13
  },
  {
    name: 'Chow Table',
    customer_rating: 1,
    distance: 1,
    price: 10,
    cuisineId: 2
  },
  {
    name: 'Bay Table',
    customer_rating: 3,
    distance: 7,
    price: 50,
    cuisineId: 18
  },
  {
    name: 'Tablebea',
    customer_rating: 1,
    distance: 7,
    price: 25,
    cuisineId: 10
  },
  {
    name: 'Fine Table',
    customer_rating: 2,
    distance: 5,
    price: 15,
    cuisineId: 12
  },
  {
    name: 'Cellar Table',
    customer_rating: 4,
    distance: 8,
    price: 25,
    cuisineId: 8
  },
  {
    name: 'Boy Table',
    customer_rating: 3,
    distance: 9,
    price: 30,
    cuisineId: 13
  },
  {
    name: 'Tableomatic',
    customer_rating: 1,
    distance: 5,
    price: 20,
    cuisineId: 16
  },
  {
    name: 'Tableque',
    customer_rating: 4,
    distance: 3,
    price: 10,
    cuisineId: 4
  },
  {
    name: 'Tableio',
    customer_rating: 3,
    distance: 3,
    price: 40,
    cuisineId: 1
  },
  {
    name: 'Tableoont',
    customer_rating: 5,
    distance: 10,
    price: 20,
    cuisineId: 12
  },
  {
    name: 'Tableadora',
    customer_rating: 5,
    distance: 2,
    price: 25,
    cuisineId: 8
  },
  {
    name: 'Tableooze',
    customer_rating: 3,
    distance: 1,
    price: 50,
    cuisineId: 16
  },
  {
    name: 'Garnish Table',
    customer_rating: 4,
    distance: 9,
    price: 40,
    cuisineId: 4
  },
  {
    name: 'Brew Table',
    customer_rating: 2,
    distance: 10,
    price: 15,
    cuisineId: 8
  },
  {
    name: 'Hotspot Table',
    customer_rating: 3,
    distance: 7,
    price: 40,
    cuisineId: 15
  },
  {
    name: 'Fresh Table',
    customer_rating: 3,
    distance: 2,
    price: 30,
    cuisineId: 1
  },
  {
    name: 'Appetite Table',
    customer_rating: 1,
    distance: 10,
    price: 40,
    cuisineId: 8
  },
  {
    name: 'Cave Tasty',
    customer_rating: 5,
    distance: 10,
    price: 15,
    cuisineId: 18
  },
  {
    name: 'Whole Tasty',
    customer_rating: 1,
    distance: 1,
    price: 30,
    cuisineId: 5
  },
  {
    name: 'Tastyio',
    customer_rating: 3,
    distance: 10,
    price: 30,
    cuisineId: 14
  },
  {
    name: 'Lane Tasty',
    customer_rating: 5,
    distance: 5,
    price: 35,
    cuisineId: 2
  },
  {
    name: 'Nouveau Tasty',
    customer_rating: 1,
    distance: 9,
    price: 50,
    cuisineId: 9
  },
  {
    name: 'Relish Tasty',
    customer_rating: 3,
    distance: 8,
    price: 50,
    cuisineId: 13
  },
  {
    name: 'Tastyooze',
    customer_rating: 3,
    distance: 6,
    price: 20,
    cuisineId: 11
  },
  {
    name: 'Binge Tasty',
    customer_rating: 1,
    distance: 8,
    price: 10,
    cuisineId: 4
  },
  {
    name: 'Fed Tasty',
    customer_rating: 3,
    distance: 5,
    price: 25,
    cuisineId: 2
  },
  {
    name: 'Diced Tasty',
    customer_rating: 5,
    distance: 4,
    price: 40,
    cuisineId: 7
  },
  {
    name: 'Tastylux',
    customer_rating: 5,
    distance: 8,
    price: 35,
    cuisineId: 14
  },
  {
    name: 'Tastyaza',
    customer_rating: 3,
    distance: 7,
    price: 45,
    cuisineId: 18
  },
  {
    name: 'Grill Tasty',
    customer_rating: 2,
    distance: 2,
    price: 30,
    cuisineId: 2
  },
  {
    name: 'Tastyopolis',
    customer_rating: 1,
    distance: 6,
    price: 20,
    cuisineId: 8
  },
  {
    name: 'Stand Tasty',
    customer_rating: 4,
    distance: 3,
    price: 40,
    cuisineId: 16
  },
  {
    name: 'Feast Tasty',
    customer_rating: 2,
    distance: 8,
    price: 20,
    cuisineId: 18
  },
  {
    name: 'Baby Tasty',
    customer_rating: 3,
    distance: 1,
    price: 20,
    cuisineId: 8
  },
  {
    name: 'Fodder Tasty',
    customer_rating: 4,
    distance: 4,
    price: 30,
    cuisineId: 9
  },
  {
    name: 'Takeout Tasty',
    customer_rating: 5,
    distance: 5,
    price: 20,
    cuisineId: 11
  },
  {
    name: 'Wrap Tasty',
    customer_rating: 1,
    distance: 10,
    price: 30,
    cuisineId: 4
  },
  {
    name: 'Tastylia',
    customer_rating: 3,
    distance: 4,
    price: 50,
    cuisineId: 3
  },
  {
    name: 'Havana Tasty',
    customer_rating: 4,
    distance: 10,
    price: 15,
    cuisineId: 11
  },
  {
    name: 'Crumb Tasty',
    customer_rating: 2,
    distance: 5,
    price: 25,
    cuisineId: 11
  },
  {
    name: 'Dished Tasty',
    customer_rating: 1,
    distance: 7,
    price: 25,
    cuisineId: 18
  },
  {
    name: 'Chop Grill',
    customer_rating: 5,
    distance: 8,
    price: 10,
    cuisineId: 17
  },
  {
    name: 'Festive Grill',
    customer_rating: 2,
    distance: 4,
    price: 35,
    cuisineId: 6
  },
  {
    name: 'Me Grill',
    customer_rating: 5,
    distance: 5,
    price: 25,
    cuisineId: 9
  },
  {
    name: 'Lounge Grill',
    customer_rating: 3,
    distance: 10,
    price: 40,
    cuisineId: 5
  },
  {
    name: 'Coastal Grill',
    customer_rating: 2,
    distance: 7,
    price: 10,
    cuisineId: 17
  },
  {
    name: 'Perfection Grill',
    customer_rating: 3,
    distance: 3,
    price: 50,
    cuisineId: 7
  },
  {
    name: 'Hungry Grill',
    customer_rating: 3,
    distance: 4,
    price: 50,
    cuisineId: 9
  },
  {
    name: 'Cater Grill',
    customer_rating: 4,
    distance: 3,
    price: 50,
    cuisineId: 5
  },
  {
    name: 'Presto Grill',
    customer_rating: 5,
    distance: 2,
    price: 40,
    cuisineId: 15
  },
  {
    name: 'Crispy Grill',
    customer_rating: 1,
    distance: 7,
    price: 45,
    cuisineId: 19
  },
  {
    name: 'Grilltastic',
    customer_rating: 3,
    distance: 3,
    price: 30,
    cuisineId: 14
  },
  {
    name: 'Grillsio',
    customer_rating: 3,
    distance: 4,
    price: 15,
    cuisineId: 19
  },
  {
    name: 'Tasteful Grill',
    customer_rating: 5,
    distance: 9,
    price: 10,
    cuisineId: 2
  },
  {
    name: 'Yummy Grill',
    customer_rating: 1,
    distance: 8,
    price: 50,
    cuisineId: 15
  },
  {
    name: 'Crisp Grill',
    customer_rating: 2,
    distance: 6,
    price: 50,
    cuisineId: 19
  },
  {
    name: 'Grillya',
    customer_rating: 2,
    distance: 7,
    price: 40,
    cuisineId: 13
  },
  {
    name: 'Cuts Grill',
    customer_rating: 1,
    distance: 7,
    price: 30,
    cuisineId: 8
  },
  {
    name: 'Grillarc',
    customer_rating: 2,
    distance: 3,
    price: 25,
    cuisineId: 13
  },
  {
    name: 'Wish Grill',
    customer_rating: 1,
    distance: 8,
    price: 30,
    cuisineId: 3
  },
  {
    name: 'Dished Grill',
    customer_rating: 3,
    distance: 1,
    price: 10,
    cuisineId: 8
  },
  {
    name: 'Divine Grill',
    customer_rating: 1,
    distance: 9,
    price: 25,
    cuisineId: 7
  },
  {
    name: 'Wedge Grill',
    customer_rating: 2,
    distance: 4,
    price: 35,
    cuisineId: 2
  },
  {
    name: 'Gusto Grill',
    customer_rating: 3,
    distance: 10,
    price: 10,
    cuisineId: 3
  },
  {
    name: 'Chef Grill',
    customer_rating: 5,
    distance: 4,
    price: 35,
    cuisineId: 19
  },
  {
    name: 'Grove Palace',
    customer_rating: 2,
    distance: 4,
    price: 20,
    cuisineId: 1
  },
  {
    name: 'Tasteful Palace',
    customer_rating: 2,
    distance: 3,
    price: 20,
    cuisineId: 12
  },
  {
    name: 'Perfection Palace',
    customer_rating: 3,
    distance: 1,
    price: 20,
    cuisineId: 3
  },
  {
    name: 'Palaceio',
    customer_rating: 4,
    distance: 7,
    price: 45,
    cuisineId: 14
  },
  {
    name: 'Palaceado',
    customer_rating: 3,
    distance: 6,
    price: 25,
    cuisineId: 4
  },
  {
    name: 'Flavor Palace',
    customer_rating: 2,
    distance: 2,
    price: 20,
    cuisineId: 14
  },
  {
    name: 'Palaceadri',
    customer_rating: 4,
    distance: 8,
    price: 50,
    cuisineId: 11
  },
  {
    name: 'Hotspot Palace',
    customer_rating: 1,
    distance: 3,
    price: 35,
    cuisineId: 3
  },
  {
    name: 'Palaceopedia',
    customer_rating: 5,
    distance: 10,
    price: 25,
    cuisineId: 8
  },
  {
    name: 'Gusto Palace',
    customer_rating: 5,
    distance: 10,
    price: 30,
    cuisineId: 9
  },
  {
    name: 'Feed Palace',
    customer_rating: 2,
    distance: 5,
    price: 20,
    cuisineId: 7
  },
  {
    name: 'Smash Palace',
    customer_rating: 1,
    distance: 9,
    price: 10,
    cuisineId: 1
  },
  {
    name: 'Gnaw Palace',
    customer_rating: 1,
    distance: 3,
    price: 50,
    cuisineId: 13
  },
  {
    name: 'Dished Palace',
    customer_rating: 5,
    distance: 7,
    price: 25,
    cuisineId: 5
  },
  {
    name: 'Spicy PalaceClick to check domain availability.',
    customer_rating: 2,
    distance: 6,
    price: 10,
    cuisineId: 9
  },
  {
    name: 'Nouveau Palace',
    customer_rating: 3,
    distance: 8,
    price: 15,
    cuisineId: 4
  },
  {
    name: 'Relish Palace',
    customer_rating: 2,
    distance: 3,
    price: 40,
    cuisineId: 9
  },
  {
    name: 'Palaceistic',
    customer_rating: 2,
    distance: 10,
    price: 45,
    cuisineId: 9
  },
  {
    name: 'Palacearo',
    customer_rating: 1,
    distance: 4,
    price: 50,
    cuisineId: 4
  },
  {
    name: 'Place Palace',
    customer_rating: 5,
    distance: 2,
    price: 40,
    cuisineId: 17
  },
  {
    name: 'Aroma Palace',
    customer_rating: 2,
    distance: 5,
    price: 40,
    cuisineId: 1
  },
  {
    name: 'Fury Palace',
    customer_rating: 5,
    distance: 3,
    price: 30,
    cuisineId: 17
  },
  {
    name: 'Palacex',
    customer_rating: 2,
    distance: 6,
    price: 15,
    cuisineId: 18
  },
  {
    name: 'Palaceocity',
    customer_rating: 1,
    distance: 7,
    price: 25,
    cuisineId: 15
  },
  {
    name: 'Ambrosial Yummy',
    customer_rating: 3,
    distance: 7,
    price: 50,
    cuisineId: 17
  },
  {
    name: 'Nibble Yummy',
    customer_rating: 1,
    distance: 8,
    price: 15,
    cuisineId: 2
  },
  {
    name: 'Accent Yummy',
    customer_rating: 5,
    distance: 3,
    price: 40,
    cuisineId: 17
  },
  {
    name: 'Yummylia',
    customer_rating: 1,
    distance: 1,
    price: 40,
    cuisineId: 5
  },
  {
    name: 'Hotspot Yummy',
    customer_rating: 1,
    distance: 3,
    price: 45,
    cuisineId: 17
  },
  {
    name: 'Chef Yummy',
    customer_rating: 4,
    distance: 9,
    price: 10,
    cuisineId: 12
  },
  {
    name: 'Acclaimed Yummy',
    customer_rating: 5,
    distance: 8,
    price: 50,
    cuisineId: 8
  },
  {
    name: 'Yummyella',
    customer_rating: 2,
    distance: 3,
    price: 40,
    cuisineId: 6
  },
  {
    name: 'Palace Yummy',
    customer_rating: 4,
    distance: 2,
    price: 50,
    cuisineId: 19
  },
  {
    name: 'Sizzle Yummy',
    customer_rating: 3,
    distance: 1,
    price: 15,
    cuisineId: 18
  },
  {
    name: 'Galore Yummy',
    customer_rating: 2,
    distance: 9,
    price: 40,
    cuisineId: 9
  },
  {
    name: 'Yummyquipo',
    customer_rating: 2,
    distance: 3,
    price: 45,
    cuisineId: 7
  },
  {
    name: 'Divine Yummy',
    customer_rating: 1,
    distance: 10,
    price: 25,
    cuisineId: 13
  },
  {
    name: 'Aladdin Yummy',
    customer_rating: 1,
    distance: 4,
    price: 30,
    cuisineId: 15
  },
  {
    name: 'Yummyscape',
    customer_rating: 1,
    distance: 3,
    price: 35,
    cuisineId: 13
  },
  {
    name: 'Yummylance',
    customer_rating: 1,
    distance: 9,
    price: 10,
    cuisineId: 6
  },
  {
    name: 'Crisp Yummy',
    customer_rating: 1,
    distance: 10,
    price: 25,
    cuisineId: 13
  },
  {
    name: 'Cantina Yummy',
    customer_rating: 5,
    distance: 6,
    price: 20,
    cuisineId: 18
  },
  {
    name: 'Cellar Yummy',
    customer_rating: 2,
    distance: 8,
    price: 50,
    cuisineId: 6
  },
  {
    name: 'Festive Yummy',
    customer_rating: 2,
    distance: 2,
    price: 25,
    cuisineId: 15
  },
  {
    name: 'Upscale Yummy',
    customer_rating: 2,
    distance: 10,
    price: 45,
    cuisineId: 11
  },
  {
    name: 'Lucha Yummy',
    customer_rating: 1,
    distance: 10,
    price: 40,
    cuisineId: 3
  },
  {
    name: 'Diced Yummy',
    customer_rating: 5,
    distance: 3,
    price: 20,
    cuisineId: 14
  },
  {
    name: 'Factory Yummy',
    customer_rating: 4,
    distance: 3,
    price: 15,
    cuisineId: 13
  },
  {
    name: 'Dude Kitchen',
    customer_rating: 4,
    distance: 10,
    price: 35,
    cuisineId: 5
  },
  {
    name: 'Kitchengenics',
    customer_rating: 4,
    distance: 3,
    price: 20,
    cuisineId: 8
  },
  {
    name: 'Galore Kitchen',
    customer_rating: 5,
    distance: 10,
    price: 45,
    cuisineId: 11
  },
  {
    name: 'Story Kitchen',
    customer_rating: 5,
    distance: 3,
    price: 20,
    cuisineId: 15
  },
  {
    name: 'Kitchenbia',
    customer_rating: 2,
    distance: 1,
    price: 30,
    cuisineId: 12
  },
  {
    name: 'Fuel Kitchen',
    customer_rating: 4,
    distance: 7,
    price: 40,
    cuisineId: 2
  },
  {
    name: 'Dished Kitchen',
    customer_rating: 5,
    distance: 3,
    price: 30,
    cuisineId: 14
  },
  {
    name: 'Kitchenish',
    customer_rating: 3,
    distance: 2,
    price: 20,
    cuisineId: 6
  },
  {
    name: 'Bang Kitchen',
    customer_rating: 1,
    distance: 1,
    price: 40,
    cuisineId: 11
  },
  {
    name: 'Bit Kitchen',
    customer_rating: 1,
    distance: 1,
    price: 30,
    cuisineId: 18
  },
  {
    name: 'Kitchenlia',
    customer_rating: 2,
    distance: 7,
    price: 50,
    cuisineId: 1
  },
  {
    name: 'Kitchenster',
    customer_rating: 2,
    distance: 1,
    price: 10,
    cuisineId: 1
  },
  {
    name: 'Devine Kitchen',
    customer_rating: 3,
    distance: 9,
    price: 30,
    cuisineId: 16
  },
  {
    name: 'Connoisseur Kitchen',
    customer_rating: 2,
    distance: 6,
    price: 30,
    cuisineId: 19
  },
  {
    name: 'Munchies Kitchen',
    customer_rating: 5,
    distance: 5,
    price: 45,
    cuisineId: 9
  },
  {
    name: 'Fine Kitchen',
    customer_rating: 2,
    distance: 10,
    price: 20,
    cuisineId: 17
  },
  {
    name: 'Crisp Kitchen',
    customer_rating: 1,
    distance: 3,
    price: 35,
    cuisineId: 2
  },
  {
    name: 'Hut Kitchen',
    customer_rating: 3,
    distance: 5,
    price: 10,
    cuisineId: 17
  },
  {
    name: 'Kitchenvio',
    customer_rating: 3,
    distance: 1,
    price: 50,
    cuisineId: 12
  },
  {
    name: 'Kitchenarc',
    customer_rating: 2,
    distance: 5,
    price: 10,
    cuisineId: 15
  },
  {
    name: 'Kitchenry',
    customer_rating: 4,
    distance: 6,
    price: 40,
    cuisineId: 11
  },
  {
    name: 'Safety Kitchen',
    customer_rating: 2,
    distance: 4,
    price: 20,
    cuisineId: 6
  },
  {
    name: 'Smash Kitchen',
    customer_rating: 1,
    distance: 2,
    price: 50,
    cuisineId: 7
  },
  {
    name: 'Brew Kitchen',
    customer_rating: 2,
    distance: 4,
    price: 40,
    cuisineId: 18
  },
  {
    name: 'Connoisseur Bar',
    customer_rating: 2,
    distance: 2,
    price: 25,
    cuisineId: 17
  },
  {
    name: 'Bariva',
    customer_rating: 5,
    distance: 10,
    price: 40,
    cuisineId: 10
  },
  {
    name: 'Barscape',
    customer_rating: 3,
    distance: 4,
    price: 15,
    cuisineId: 4
  },
  {
    name: 'Hot Bar',
    customer_rating: 4,
    distance: 4,
    price: 20,
    cuisineId: 2
  },
  {
    name: 'Place Bar',
    customer_rating: 3,
    distance: 5,
    price: 50,
    cuisineId: 13
  },
  {
    name: 'Grill Bar',
    customer_rating: 1,
    distance: 9,
    price: 40,
    cuisineId: 5
  },
  {
    name: 'Dine Bar',
    customer_rating: 5,
    distance: 10,
    price: 35,
    cuisineId: 15
  },
  {
    name: 'Wave Bar',
    customer_rating: 4,
    distance: 8,
    price: 20,
    cuisineId: 3
  }
]

module.exports = {cuisines, restaurants}
