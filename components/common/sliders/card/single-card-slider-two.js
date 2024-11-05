import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function SingleCardSliderTwo({ card }) {
	const [isDarke, setIsDarke] = useState(false);

	return (
		<div className="fugu--card-wrap fugu--card2">
			<div className="fugu--card-thumb">
				<img src={`/images/all-img/v4/${card.img}.jpg`} alt="" />
			</div>
			<div className="fugu--card-data">
				<h3>{card.title}</h3>
				<p>
					<img src="/images/all-img/v4/daimond.png" alt="" /> {card.eth} ETH
				</p>
				<div className="fugu--card-footer">
					<div className="fugu--card-footer-data">
						<h4>{card.name}</h4>
					</div>
					<button
						className={`fugu--btn btn-sm fugu--tigger ${isDarke ? "dark-btn" : ""}`}
						onClick={() => setIsDarke(!isDarke)}
						type="button"
					>
						<img className="black-heart" src="/images/svg2/heart-black.svg" alt="" />
						<img className="red-heart" src="/images/svg2/heart-red.svg" alt="" /> {card.hart}
					</button>
				</div>
			</div>
		</div>
	);
}
