const images = [{ uri: 'https://placeimg.com/320/320/tech/grayscale', height: 320 }, { uri: 'https://placeimg.com/320/440/tech/grayscale', height: 440 }, { uri: 'https://placeimg.com/320/560/tech/grayscale', height: 560 }];
const randomImage = () => images[Math.floor(Math.random() * 3)];

export default randomImage;
