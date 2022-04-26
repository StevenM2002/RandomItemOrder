import "./frontpage.css";
import circularCrossLogo from "./frontPageImages/circularCross.png";
export default function ShowResults({
  shuffledItems,
  isShowResults,
  setIsShowResults,
}) {
  function handleCloseOnClick(e) {
    e.preventDefault();
    setIsShowResults(false);
  }

  function shuffledItemToJSX() {
    return(
      <ol>
        {shuffledItems.map((item) => (
          <li>{item}</li>
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
	  			<div className="popup-content-container">
            {shuffledItems.length === 0 ? noItemsText : shuffledItemToJSX()}
	  			</div>
  			</div>
  		</div>

  	</div>
  );
}

const closeButtonStyle = {
  backgroundImage: `url(${circularCrossLogo})`,
  backgroundSize: "cover",
};
