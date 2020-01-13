import rebeccablack from '../images/accolades/music/rebeccablack.jpg'
import parishilton from '../images/accolades/music/parishilton.jpg'
import vanillaice from '../images/accolades/music/vanillaice.jpg'
import peterandre from '../images/accolades/music/peterandre.jpg'
import littlemix from '../images/accolades/music/littlemix.jpg'
import takethat from '../images/accolades/music/takethat.jpg'
import jayz from '../images/accolades/music/jayz.jpg'
import edsheeran from '../images/accolades/music/edsheeran.jpg'
import adele from '../images/accolades/music/adele.jpg'
import elvispresley from '../images/accolades/music/elvispresley.jpg'
import michaeljackson from '../images/accolades/music/michaeljackson.jpg'

import questionOneImage from '../images/questions/music/questionOneImage.jpg'
import questionTwoImage from '../images/questions/music/questionTwoImage.jpg'
import questionThreeImage from '../images/questions/music/questionThreeImage.jpg'
import questionFourImage from '../images/questions/music/questionFourImage.jpg'
import questionFiveImage from '../images/questions/music/questionFiveImage.jpg'
import questionSixImage from '../images/questions/music/questionSixImage.jpg'
import questionSevenImage from '../images/questions/music/questionSevenImage.jpg'
import questionEightImage from '../images/questions/music/questionEightImage.jpg'
import questionNineImage from '../images/questions/music/questionNineImage.jpg'
import questionTenImage from '../images/questions/music/questionTenImage.jpg'

const musicQuiz = {
  questionLibrary: [
    {
      question: "The Spice Girls smash hit single 'Wannabe', was released in...",
      answer: 1996,
      options: [1998, 1994, 1995, 1996],
      clue: 'In the same year, Baddiel & Skinner released their hit football anthem, \'Three Lions\'',
      supportingImage: questionOneImage
    },
    {
      question: 'Legendary soul singer James Brown, sadly passed away on Christmas day, in...',
      answer: 2006,
      options: [2006, 2012, 2000, 2001],
      clue: 'At the time (in the UK), Leona Lewis\' debut single \'A Moment Like This\' was Christmas Number One ',
      supportingImage: questionTwoImage
    },
    {
      question: "'Sgt. Pepper’s Lonely Hearts Club Band’, the 8th Studio album from the Beatles, was released in...",
      answer: 1962,
      options: [1952, 1971, 1962, 1972],
      clue: 'It was the swinging decade',
      supportingImage: questionThreeImage
    },
    {
      question: "Whitney Houstons rendition of 'I will always Love You' famously spent 10 weeks at Number One in the UK singles chart, back in...",
      answer: 1992,
      options: [1990, 1992, 1993, 1996],
      clue: 'It was the same year Boyz II Men released their hit single, End of the Road',
      supportingImage: questionFourImage
    },
    {
      question: 'The King of Rock Elvis Presley, sadly passed away in the summer of ...',
      answer: 1977,
      options: [1987, 1977, 1985, 1990],
      clue: 'At the time, Jimmy Carter was President of the United States',
      supportingImage: questionFiveImage
    },
    {
      question: 'The first ever Glastonbury Festival was held in...',
      answer: 1970,
      options: [1985, 1978, 1970, 1990],
      clue: 'In the same year, The Beatles released their final album, Let It Be',
      supportingImage: questionSixImage
    },
    {
      question: "Reality television show 'The X Factor' first appeared on UK screens in...",
      answer: 2004,
      options: [2004, 2001, 2009, 2007],
      clue: 'In the same year, TV series - Friends aired its last ever last episode',
      supportingImage: questionSevenImage
    },
    {
      question: "Adele was catapulted into superstardom after her live performance of 'Someone like you', at Brit Awards 20??",
      answer: 2011,
      options: [2008, 2013, 2011, 2014],
      clue: 'In the same year, The X-Factor (UK) was airing its 8th series',
      supportingImage: questionEightImage
    },
    {
      question: "After the disbandment of Destinys Child, star member Beyonce launched her debut solo album 'Dangerously in Love', back in ...",
      answer: 2003,
      options: [2008, 2003, 1995, 2010],
      clue: 'In the same year, 50 Cent released his debut album',
      supportingImage: questionNineImage
    },
    {
      question: "'Top of the Pops', Britains music chart television show, first aired in...",
      answer: 1964,
      options: [1974, 1975, 1985, 1964],
      clue: 'At the time, John F. Kennedy was President of the United States',
      supportingImage: questionTenImage
    }
  ],
  accolades: [
    ['Ouch !', '-', 'Rebecca Black', rebeccablack],
    ['Ouch !', '-', 'Paris Hilton', parishilton],
    ['Oh No !', 'NOVICE', 'Vanilla Ice', vanillaice],
    ['mmmm...', 'ROOKIE', 'Peter Andre', peterandre],
    ['mmmm...', 'ROOKIE', 'Little Mix', littlemix],
    ['Well done !', 'INTERMEDIATE', 'Take That', takethat],
    ['Well done !', 'SEASONED', 'Jay-Z', jayz],
    ['Well done !', 'SEASONED', 'Ed Sheeran', edsheeran],
    ['GREAT !', 'EXPERT', 'Adele', adele],
    ['SUPER !', 'LEGEND', 'Elvis Presley', elvispresley],
    ['WOW !', 'LEGEND', 'Michael Jackson', michaeljackson]
  ]
}

export default musicQuiz
