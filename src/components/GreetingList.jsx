const greeting_list = [
  {
    id: 1,
    summary:
      "Welcome to the world of joy and inspiration! Let's explore the magic of moods together.",
  },
  {
    id: 2,
    summary:
      "Hello there! Get ready to embark on a mood-boosting journey filled with laughter and positivity!",
  },
  {
    id: 3,
    summary:
      "Greetings, friend! Step into a realm of happiness where each mood is a new adventure waiting for you.",
  },
  {
    id: 4,
    summary:
      "Hi, and welcome! Your joyous journey begins here – click the mood button and let the fun unfold!",
  },
  {
    id: 5,
    summary:
      "Warmest greetings! Join us on a delightful exploration of emotions, each page a doorway to a brighter mood.",
  },
  {
    id: 6,
    summary:
      "Hello, happiness seeker! Your mood destination awaits – start your uplifting experience now.",
  },
  {
    id: 7,
    summary:
      "Greetings, radiant soul! Dive into a world of moods, where joy and excitement await at every click.",
  },
  {
    id: 8,
    summary:
      "Welcome aboard! Discover the art of feeling good as you navigate through our mood-filled wonderland.",
  },
  {
    id: 9,
    summary:
      "Hey there, joy explorer! Brace yourself for a cheerful ride through the realms of emotions and delight.",
  },
  {
    id: 10,
    summary:
      "Greetings, happiness enthusiast! Your homepage is a gateway to a world of positive vibes and endless smiles.",
  },
];
let index = Math.floor(Math.random() * greeting_list.length);
function Greeting_list(){
 return(
    <h4>{greeting_list[index].summary}</h4>
 );
}
export default Greeting_list;