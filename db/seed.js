let models = require('../models');

let movies = [{
  title: 'The Terminator',
  description: 'In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the "Terminator" back to 1984 to kill Sarah Connor, whose unborn son is destined to lead insurgents against 21st century mechanical hegemony. Meanwhile, the human-resistance movement dispatches a lone warrior to safeguard Sarah. Can he stop the virtually indestructible killing machine?',
  image: '/q8ffBuxQlYOHrvPniLgCbmKK4Lv.jpg'
  }, {
  title: 'Terminator 2: Judgment Day',
	description: 'Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.',
	image: '/2y4dmgWYRMYXdD1UyJVcn2HSd1D.jpg'
  }, {
  title: 'AVP: Alien vs. Predator',
  description: 'When scientists discover something in the Arctic that appears to be a buried Pyramid, they send a research team out to investigate. Little do they know that they are about to step into a hunting ground where Aliens are grown as sport for the Predator race.',
  image: '/9xzRKUBIqLwhhOYtcE7P1BbWXP9.jpg'
  }, {
  title: 'Love Actually',
  description: 'Follows seemingly unrelated people as their lives begin to intertwine while they fall in – and out – of love. Affections languish and develop as Christmas draws near.',
  image: '/kfX8Ctin3fSZbdnjh6CXSNZUOVP.jpg'
  }, {
  title: 'Casablanca',
  description: 'In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.',
  image: '/9UViITBCKeLYWg8Wblbmb9l25mS.jpg'
  }, {
  title: "The Devil's Rejects",
  description: 'The sequel to House of 1000 Corpses – the Firefly family are ambushed at their isolated home by Sheriff Wydell and a squad of armed men guns blazing – yet only Otis and his sister, Baby, manage to escape the barrage of bullets unharmed. Hiding out in a backwater motel, the wanted siblings wait to rendezvous with their errant father, Captain Spaulding, killing whoever happens to stand in their way.',
  image: '/jSWt4aJizmXmPXV3SBQGTWhwuCB.jpg'
  }, {
  title: 'Headless Horseman',
  description: 'Seven college kids take a shortcut on their way to a party and unfortunately end up in Wormwood – a "lost" town in the middle of nowhere. They find something strange and sinister happening there – bones and weird decorations line Main Street. The cause: local Wormwood legend says on All Hallows Eve one hundred years ago, a crazed man tortured the youngsters in town and then cut off their heads. In retaliation, the townspeople killed him by cutting off his head. Seeking revenge every seven years, he returns and takes seven heads from children in the town. Now the seven visitors find themselves hunted one by one as the Headless Horseman claims his due.',
  image: '/jr8O284MA9KZghZUD1TXWVhgT63.jpg'
  }, {
  title: 'Ringu',
  description: 'A mysterious video has been linked to a number of deaths, and when an inquisitive journalist finds the tape and views it herself, she sets in motion a chain of events that puts her own life in danger.',
  image: '/3joRI3S4jK4ZOuxnhauOdc0uvjb.jpg'
  }, {
  title: 'Knocked Up',
  description: "For fun loving party animal Ben Stone, the last thing he ever expected was for his one night stand to show up on his doorstep eight weeks later to tell him she's pregnant.",
  image: '/b4OaXw2MW97VvIiZE0Sbn1NfxSh.jpg'
  }, {
  title: 'Zoolander',
  description: `Clear the runway for Derek Zoolander, VH1's three-time male model of the year. His face falls when hippie-chic "he's so hot right now" Hansel scooters in to steal this year's award. The evil fashion guru Mugatu seizes the opportunity to turn Derek into a killing machine. Its a well-designed conspiracy and only with the help of Hansel and a few well-chosen accessories can Derek make the world safe.`,
  image: '/5vMEXtz1DXgxFsv8pgFFGuOlI8V.jpg'
  }, {
  title: 'Citizen Kane',
  description: 'Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.',
  image: '/sav0jxhqiH0bPr2vZFU0Kjt2nZL.jpg'
  }, {
  title: 'Knocked Up',
  description: 'Two musicians witness a mob hit and struggle to find a way out of the city before they are found by the gangsters. Their only opportunity is to join an all-girl band as they leave on a tour. To make their getaway they must first disguise themselves as women, then keep their identities secret and deal with the problems this brings - such as an attractive bandmate and a very determined suitor.',
  image: '/pxc9EFCMYkItESpqqrI783yl8Gh.jpg'
  }
];

// let comments = [{
//   user:
//   }
// ];
//
let movieList = [{
  title: 'Awesome Action Movies',
  movies: [movies[0], movies[1], movies[2]],
  // comments: []
  }, {
  title: 'Romance Films',
  movies: [movies[3], movies[4]],
  // comments: []
  }, {
  title: 'Scary Scary Horror',
  movies: [movies[5], movies[6], movies[7]],
  // comments: []
  }, {
  title: 'Really Funny Movies',
  movies: [movies[8], movies[9]],
  // comments: []
  }, {
  title: 'Classic Films',
  movies: [movies[10], movies[11]],
  // comments: []
  }
]

let users = [{
  	name: 'Adam',
  	email: 'adam@email.com',
  	password: 'adam',
  	movie_lists: [movieList[0], movieList[1]],
    // comments: [Comment.schema]
  }, {
    name: 'Bob',
  	email: 'bob@email.com',
  	password: 'bob',
  	movie_lists: [movieList[2]],
    // comments: [Comment.schema]
  }, {
    name: 'Jessica',
  	email: 'jessica@email.com',
  	password: 'bob',
  	movie_lists: [movieList[3], movieList[4]],
    // comments: [Comment.schema]
  }
];

models.User.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing comments: ', err);
    process.exit();
  }
  console.log('Removed all Users');
  models.User.create(users, function(err, users) {
    if (err) {
      console.log('Error creating users: ', err);
      process.exit();
    }
    console.log('Created', users.length, 'users');
  });
});

models.Movie.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing movies: ', err);
    process.exit();
  }
  console.log('Removed all Movies');
  models.Movie.create(movies, function(err, movies) {
    if (err) {
      console.log('Error creating movies: ', err);
      process.exit();
    }
    console.log('Created', movies.length, 'movies');
  });
});

models.MovieList.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing movie lists: ', err);
    process.exit();
  }
  console.log('Removed all Movie Lists');
  models.MovieList.create(movieList, function(err, movies) {
    if (err) {
      console.log('Error creating movie list: ', err);
      process.exit();
    }
    console.log('Created', movieList.length, 'movieList');
  });
});
