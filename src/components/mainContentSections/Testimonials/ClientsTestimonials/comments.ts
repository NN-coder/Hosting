import shortid from 'shortid';

import { getSingleImage } from '../../../img';

// const jpgImages = require.context('./img/jpg');
// const getJpg = (name: string): string => jpgImages(`./${name}.jpg`).default;

// const webpImages = require.context('./img/webp');
// const getWebp = (name: string): string => webpImages(`./${name}.webp`).default;

const getPhotos = (name: string) => {
  return {
    jpg: getSingleImage(`testimonials/clientsTestimonials/jpg/${name}`, 'jpg'),
    webp: getSingleImage(`testimonials/clientsTestimonials/webp/${name}`, 'webp'),
  };
};

export interface Comment {
  author: string;
  id: string;
  comment: string;
  images: {
    jpg: string;
    webp: string;
  };
}

const comments: Comment[] = [
  {
    id: shortid.generate(),
    author: 'Playboi Carti',
    comment:
      "In New York I Milly Rock, hide it in my sock, Running from an opp, and I shoot at opp (what), And I'm on the block (what, what, what)",
    images: getPhotos('playboi-carti'),
  },
  {
    id: shortid.generate(),
    author: 'Juice Wrld',
    comment:
      "I still see your shadows in my room, Can't take back the love that I gave you, It's to the point where I love and I hate you, And I cannot change you, so I must replace you, oh",
    images: getPhotos('juice-wrld'),
  },
  {
    id: shortid.generate(),
    author: 'Lil Baby',
    comment:
      "Drip too hard, don't stand too close, You gon' fuck around and drown off this wave, Doin' all these shows, I've been on the road, I don't care where I go, long as I get paid",
    images: getPhotos('lil-baby'),
  },
  {
    id: shortid.generate(),
    author: 'The weekend',
    comment:
      "Why? 'Cause I'm heartless, And I'm back to my ways 'cause I'm heartless, All this money and this pain got me heartless, Low life for life 'cause I'm heartless. Said I'm heartless, Tryna be a better man, but I'm heartless, Never be a weddin' plan for the heartless, Low life for life 'cause I'm heartless.",
    images: getPhotos('lil-baby'),
  },
  {
    id: shortid.generate(),
    author: 'Young Thug',
    comment:
      "Shinin' hard 'cause we back up, Rose gold from your neck up, You know shit gon' get sloppy, tryna check us, Pop an X pill like we Malcolm, yeah, hey",
    images: getPhotos('young-thug'),
  },
  {
    id: shortid.generate(),
    author: 'Future',
    comment:
      'Percocets, molly, Percocets, Percocets, molly, Percocets, Rep the set, gotta rep the set, Chase a check, never chase a bitch,',
    images: getPhotos('future'),
  },
  {
    id: shortid.generate(),
    author: 'DaBaby',
    comment:
      "Oh, you askin' for pictures with niggas? (Huh?), What's your name? Get the fuck out the spot, nigga! (Get the fuck), Tryna figure which deal I'ma take, (Uh-huh), I woke up, couple mil' on my plate, (Let's eat)",
    images: getPhotos('dababy'),
  },
  {
    id: shortid.generate(),
    author: 'Saint Jhn',
    comment:
      "Gucci slippers girl you poppin', ya know, The way you look I know you got them niggas flockin', And you got them Rihanna dreads, Now you deserve a nigga with a Kawasaki, ouu",
    images: getPhotos('saint-jhn'),
  },
  {
    id: shortid.generate(),
    author: 'Dutchavelli',
    comment:
      'Look, pack going up north like Pogba, Kev just stepped out of rehab last week, Still tryna score like Didier Drogba, Dan just looks like Harry Potter',
    images: getPhotos('dutchavelli'),
  },
  {
    id: shortid.generate(),
    author: '6lack',
    comment:
      "Love is not looking over shoulders, Love is you should trust what I told you, Lately it's like you been speaking fantasy and I'm speaking reality, 'Cause we got problems we ain’t getting over",
    images: getPhotos('6lack'),
  },
  {
    id: shortid.generate(),
    author: 'Anderson .Paak',
    comment:
      "Take chains off, take rings off, Bracelets and things, big aches and pains, My jack rang off with clickbait, Truth is too raw, it's a fish plate",
    images: getPhotos('anderson-paak'),
  },
  {
    id: shortid.generate(),
    author: '21 Savage',
    comment:
      "Every day that I'm alive, I’ma ride with the stick, I'd rather be broke in jail than be dead and rich, Told my brothers take my breath if I turn to a snitch, But I'm 21 4L, ain’t no way I'ma switch",
    images: getPhotos('21-savage'),
  },
  {
    id: shortid.generate(),
    author: 'J. Cole',
    comment:
      "Niggas been countin' me out, I’m countin' my bullets, I'm loadin’ my clips, I'm writin' down names, I'm makin' a list, I'm checkin' it twice and I'm gettin’ ’em hit",
    images: getPhotos('j-cole'),
  },
  {
    id: shortid.generate(),
    author: 'Travis Scott',
    comment:
      "I get those goosebumps every time, yeah, you come around, yeah, You ease my mind, you make everything feel fine, Worried 'bout those comments, I'm way too numb, yeah, it's way too dumb, yeah",
    images: getPhotos('travis-scott'),
  },
  {
    id: shortid.generate(),
    author: 'Pop Smoke',
    comment:
      "Buddy gon' grrt that, grrt that, brrt that, brrt that, Send shots, make 'em get back, All that chit-chat, chit-chat, riff-raff, riff-raff, My niggas ain't into that",
    images: getPhotos('pop-smoke'),
  },
  {
    id: shortid.generate(),
    author: 'Denzel Curry',
    comment: `I'ma act, one, two, stop the track, Bring it back, what it do?, See, Ricky said, "Never let nobody get the one up on you, If they run up on you, hit 'em with a one, two or a bitch slap`,
    images: getPhotos('denzel-curry'),
  },
  {
    id: shortid.generate(),
    author: 'Post Malone',
    comment:
      'Me and Kurt feel the same, too much pleasure is pain, My girl spites me in vain, all I do is complain, She needs something to change, need to take off the e-e-edge, So fuck it all tonight',
    images: getPhotos('post-malone'),
  },
  {
    id: shortid.generate(),
    author: 'Gunna',
    comment:
      "We don't take lightly to niggas who chasin' the clout for a buzz (Nah), These pussies don't talk to my niggas 'cause they know we get the business done (Get the business done), We like some students, white chalkin' you niggas, and trust me, we gonna keep a grudge (Yeah), Swear to God that I'm goin' all out for my family, might pay a visit to your mom (Visit to your mom)",
    images: getPhotos('gunna'),
  },
  {
    id: shortid.generate(),
    author: 'Lil Mosey',
    comment:
      "Your ho tweaking, Me and KK Wok, we always geekin' (Always geekin'), Leakin', yeah, my fours leave your body leaking (Boom, boom), I be road runnin' every season (Every season)",
    images: getPhotos('lil-mosey'),
  },
  {
    id: shortid.generate(),
    author: 'Polo G',
    comment:
      "Swervin' on the E-way, don't care if I crash in this coupe, Shit I'm thinkin' 'bout too real, might lose my mind in this coupe, Can't relapse off these drugs, man, R.I.P. to Juice, We was tweakin' off them Percs, I popped my last one with you",
    images: getPhotos('polo-g'),
  },
  {
    id: shortid.generate(),
    author: 'Roddy Ricch',
    comment:
      "I just been ballin' out every season, Know it's some niggas I left in the bleachers, I just been married to double cup, I got to pour me a four inside another liter",
    images: getPhotos('roddy-ricch'),
  },
];

export { comments };
