import "./frontpage.css";
import circularCrossLogo from "./frontPageImages/circularCross.png"
export default function ShowResults({ shuffledItems }) {

	return (
		<div className="popup-overlay" >
			<div className="center-popup">
				{/*The following div fits around the margin of
					popup-content-container so the close-button can appear
					outside of the overflow:auto and appear on top of
					the popup container*/}
				<div style={{border:"solid"}}>
					<button className="top-right circle-button" style={closeButtonStyle}></button>
					<div className="popup-content-container">
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
						<p>Hello</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const closeButtonStyle = {
  backgroundImage: `url(${circularCrossLogo})`,
  backgroundSize: "cover",
}

