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

  function doNothing(e) {
    console.log("Fuck you");
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
	  			<div className="popup-content-container">
	  				<ol>
		  				{shuffledItems.map((item) => (
	              <li style={myListStyle} >{item}</li>
	            ))}
            </ol>
	  			</div>
  			</div>
  		</div>

  	</div>
  );
}

const myListStyle = {
	// borderTop:"solid",
  // borderBottom:"solid"
  justifyContent:"flexStart"
}

const closeButtonStyle = {
  backgroundImage: `url(${circularCrossLogo})`,
  backgroundSize: "cover",
};
