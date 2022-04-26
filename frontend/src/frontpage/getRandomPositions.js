
const apiRoute = "http://localhost:5000/getRandomPositions";

export default function GetRandomPosition(unchangedItems, res, setRes) {
	//console.log("\nasdasdasda" + unchangedItems + "\nasdasda");
  //const [res, setRes] = useState();
  // useEffect(() => {
  //   retriveRandomPositions();
  // }, [unchangedItems]);
  const unchangedArray = {
    unchangedItems: unchangedItems,
  };

 	retriveRandomPositions();

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
}
