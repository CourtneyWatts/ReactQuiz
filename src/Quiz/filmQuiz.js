import tommywiseau from '../images/accolades/films/tommywiseau.jpg'
import orlandobloom from '../images/accolades/films/orlandobloom.jpg'
import adamsandler from '../images/accolades/films/adamsandler.jpg'
import melissamccarthy from '../images/accolades/films/melissamccarthy.jpg'
import dwaynejohnson from '../images/accolades/films/dwaynejohnson.jpg'
import paulgiamatti from '../images/accolades/films/paulgiamatti.jpg'
import harrisonford from '../images/accolades/films/harrisonford.jpg'
import leonardodicaprio from '../images/accolades/films/leonardodicaprio.jpg'
import merylstreep from '../images/accolades/films/merylstreep.jpg'
import stevenspielberg from '../images/accolades/films/stevenspielberg.jpg'
import marlonbrando from '../images/accolades/films/marlonbrando.jpg'

import questionOneImage from '../images/questions/films/questionOneImage.jpg'
import questionTwoImage from '../images/questions/films/questionTwoImage.jpg'
import questionThreeImage from '../images/questions/films/questionThreeImage.jpg'
import questionFourImage from '../images/questions/films/questionFourImage.jpg'
import questionFiveImage from '../images/questions/films/questionFiveImage.jpg'
import questionSixImage from '../images/questions/films/questionSixImage.jpg'
import questionSevenImage from '../images/questions/films/questionSevenImage.jpg'
import questionEightImage from '../images/questions/films/questionEightImage.jpg'
import questionNineImage from '../images/questions/films/questionNineImage.jpg'
import questionTenImage from '../images/questions/films/questionTenImage.jpg'

const filmQuiz = {
  questionLibrary: [
    {
      question: "The worlds first, feature length computer-animated film, 'Toy Story', was released in the US, in...",
      answer: 1995,
      options: [1995, 1999, 2002, 1990],
      clue: 'The O. J. Simpson murder case, was one of the biggest news stories this year',
      supportingImage: questionOneImage
    },
    {
      question: "The release of Steven Spielberg’s 'Jaws', is believed to have marked the birth of the 'summer blockbuster', back in...",
      answer: 1975,
      options: [1965, 1985, 1975, 1960],
      clue: 'In the same year, The Godfather Part II won the Academy Award for best picture',
      supportingImage: questionTwoImage
    },
    {
      question: 'The Marvel Cinematic Universe began with the release of Iron Man, back in...',
      answer: 2008,
      options: [2011, 2008, 2012, 2013],
      clue: 'In the same year, Robert Downey Jr also starred in Tropical Thunder',
      supportingImage: questionThreeImage
    },
    {
      question: "Leonardo Dicaprio won an Oscar for Best Actor, for his performance in 'The Revenant', back in...",
      answer: 2016,
      options: [2017, 2012, 2011, 2016],
      clue: 'This award came two years after his Best Actor nomination, for The Wolf of Wall Street',
      supportingImage: questionFourImage
    },
    {
      question: "Found footage classic 'The Blair Witch Project', took audiences by storm when it was released in...",
      answer: 1999,
      options: [2002, 1999, 1994, 2006],
      clue: 'In the UK, the film was released two weeks before The Sixth Sense',
      supportingImage: questionFiveImage
    },
    {
      question: "Daniel Craig’s first appearance as James Bond came in the movie 'Casino Royale', released in...",
      answer: 2006,
      options: [2002, 2010, 2011, 2006],
      clue: 'In the same year, Mission Impossible III was released',
      supportingImage: questionSixImage
    },
    {
      question: 'The impact DVDs had on the film industry won`t be forgotten any time soon, but when were they first released in UK shops?',
      answer: 1998,
      options: [1998, 2000, 2002, 2005],
      clue: 'It was 2 years before the Playstation 2 (the worlds most popular DVD Player), was released',
      supportingImage: questionSevenImage
    },
    {
      question: "'Forrest Gump', 'The Lion King' and 'Pulp Fiction' were all released in ...",
      answer: 1994,
      options: [1996, 1994, 1990, 1998],
      clue: 'In the same year that The Shawshank Redemption was released',
      supportingImage: questionEightImage
    },
    {
      question: 'The 1st Acadamy Awards was hosted in...',
      answer: 1929,
      options: [1935, 1943, 1940, 1929],
      clue: 'It was before World War II',
      supportingImage: questionNineImage
    },
    {
      question: "American entrepreneur, animator, film producer, 'Walt Disney' was born in...",
      answer: 1901,
      options: [1892, 1925, 1901, 1940],
      clue: 'It was over 20 years before the first ever Acadamy Awards',
      supportingImage: questionTenImage
    }
  ],
  accolades: [
    ['Ouch !', '-', 'Tommy Wiseau', tommywiseau],
    ['Ouch !', '-', 'Orlando Bloom', orlandobloom],
    ['Oh No !', 'NOVICE', 'Adam Sandler', adamsandler],
    ['mmmm...', 'ROOKIE', 'Melissa McCarthy', melissamccarthy],
    ['OK...', 'ASSURED', 'Dwayne Johnson', dwaynejohnson],
    ['Well done !', 'STEADY PRO', 'Paul Giamatti', paulgiamatti],
    ['Well done !', 'SEASONED PRO', 'Harrison Ford', harrisonford],
    ['Well done !', 'SEASONED PRO', 'Leonardo Dicaprio', leonardodicaprio],
    ['GREAT !', 'ULTIMATE PRO', 'Meryl Streep', merylstreep],
    ['SUPER !', 'WORLDS BEST', 'Steven Spielberg', stevenspielberg],
    ['WOW !', 'LEGENDARY', 'Marlon Brando', marlonbrando]
  ]
}

export default filmQuiz
