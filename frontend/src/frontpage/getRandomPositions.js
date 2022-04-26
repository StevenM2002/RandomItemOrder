const apiRoute = "http://localhost:5000/getRandomPositions";
/*
// The following function is for api usage
export default function GetRandomPosition(unchangedItems, setRes) {
  const unchangedArray = {
    unchangedItems: unchangedItems,
  };
  async function retriveRandomPositions() {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unchangedArray),
    };
    const response = await fetch(apiRoute, options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    setRes(data["shuffledItems"]);
  }

  retriveRandomPositions();
}
*/

//This following function is for non-api usage
export default function GetRandomPosition(unchangedItems, setRes) {
  const trimmedUnchangedItems = unchangedItems.filter(item => item !== "");
  const shuffledItems = doShuffle(trimmedUnchangedItems);
  setRes(shuffledItems);
}
function doShuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}