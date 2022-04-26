
export default function GetRandomPositions(req, res) {
	const { unchangedItems } = req.body;
	const trimmedUnchangedItems = unchangedItems.filter(item => item !== "");
	const shuffledItems = doShuffle(trimmedUnchangedItems);
	res
		.status(200)
		.send({
			"shuffledItems": shuffledItems,
		});
}

function doShuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}