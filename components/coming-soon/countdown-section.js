import Countdown from "react-countdown";
export default function CountdownSection() {
	return (
		<>
			<div className="fugu-countdown-item wow fadeInUpX" data-wow-delay="0s">
				<div className="countdown-days">
					<div className="number">
						<Countdown date={Date.now() + 1000000000} renderer={({ days }) => days} />
					</div>
				</div>
				<p>Days</p>
			</div>
			<div className="fugu-countdown-item wow fadeInUpX" data-wow-delay=".10s">
				<div className="countdown-hours">
					<div className="number">
						<Countdown date={Date.now() + 1000000000} renderer={({ hours }) => hours} />
					</div>
				</div>
				<p>Hours</p>
			</div>
			<div className="fugu-countdown-item wow fadeInUpX" data-wow-delay=".20s">
				<div className="countdown-minutes">
					<div className="number">
						<Countdown date={Date.now() + 1000000000} renderer={({ minutes }) => minutes} />
					</div>
				</div>
				<p>Minutes</p>
			</div>
			<div className="fugu-countdown-item wow fadeInUpX" data-wow-delay=".30s">
				<div className="countdown-seconds">
					<div className="number">
						<Countdown date={Date.now() + 1000000000} renderer={({ seconds }) => seconds} />
					</div>
				</div>
				<p>Seconds</p>
			</div>
		</>
	);
}
