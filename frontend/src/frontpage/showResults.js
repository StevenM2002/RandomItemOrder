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

  const noItemsText = (
    <h2 style={{marginTop: "25%"}}>
      You have to add a task for us to decide the order!
    </h2>
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
