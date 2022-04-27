import "./frontpage.css";
import circularCrossLogo from "./frontPageImages/circularCross.png";
import circularRefreshLogo from "./frontPageImages/circularRefresh.png";
import GetRandomPositions from "./getRandomPositions";
export default function ShowResults({
  shuffledItems,
  setShuffledItems,
  setIsShowResults,
}) {
  function handleCloseOnClick(e) {
    e.preventDefault();
    setIsShowResults(false);
  }

  function shuffledItemToJSX() {
    return(
      <ol>
        {shuffledItems.map((item, index) => (
          <li key={index} >{item}</li>
        ))}
      </ol>
    )
  }
  const noItemsTextStyle = {
    textAlign:"center",
    marginTop:"30%",
    marginBottom:"30%"
  }
  const noItemsText = (
    <div style={noItemsTextStyle}>
      <h2>
        You have to add a task for us to decide the order!
      </h2>
    </div>
  )

  function handleRefreshItems(e) {
    e.preventDefault();
    GetRandomPositions(shuffledItems, setShuffledItems);
  }

  return (
  	<div>

  		<div className="popup-overlay" onClick={handleCloseOnClick}></div>
  		
  		<div className="center-popup">
  			<div>
  				<button
	            onClick={handleCloseOnClick}
	            className="top-right circle-button"
	            style={closeButtonStyle}
          >
          </button>
          <button onClick={handleRefreshItems} className="circle-button" style={refreshStyle}></button>
	  			<div className="popup-content-container">
            {shuffledItems.length === 0 ? noItemsText : shuffledItemToJSX()}
	  			</div>
  			</div>
  		</div>

  	</div>
  );
}

const refreshStyle = {
  position:"fixed",
  backgroundImage: `url(${circularRefreshLogo})`,
  backgroundSize:"cover"
}

const closeButtonStyle = {
  backgroundImage: `url(${circularCrossLogo})`,
  backgroundSize: "cover",
};
