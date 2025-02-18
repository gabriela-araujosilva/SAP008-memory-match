export const shuffle = (array) => {
  let shuffled = [...array];
    let currentIndex = array.length,  randomIndex;
     while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [shuffled[currentIndex], shuffled[randomIndex]] = [
          shuffled[randomIndex], shuffled[currentIndex]];
      }
    
    return shuffled;
  };

  export const createDeckFrom = (array) => {
    return [...array, ...array];
  };