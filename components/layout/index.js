import FooterHomeFive from "./footer/footer-home-five";
import FooterHomeFour from "./footer/footer-home-four";
import FooterHomeOne from "./footer/footer-home-one";
import FooterHomeThree from "./footer/footer-home-three";
import FooterHomeTwo from "./footer/footer-home-two";
import HeaderErrorSix from "./header/header-error-six";
import HeaderHomeFive from "./header/header-home-five";
import HeaderHomeFour from "./header/header-home-four";
import HeaderHomeOne from "./header/header-home-one";
import HeaderHomeThree from "./header/header-home-three";
import HeaderHomeTwo from "./header/header-home-two";

export default function Layout({ children }) {
	const headerChooseFunc = () => {
		switch (children.props.header) {
			case "one":
				return <HeaderHomeOne />;
			case "two":
				return <HeaderHomeTwo />;
			case "three":
				return <HeaderHomeThree />;
			case "four":
				return <HeaderHomeFour />;
			case "five":
				return <HeaderHomeFive />;
			case "six":
				return <HeaderErrorSix />;
			default:
				return <HeaderHomeOne />;
		}
	};
	const footerChooseFunc = () => {
		switch (children.props.footer) {
			case "one":
				return <FooterHomeOne />;
			case "two":
				return <FooterHomeTwo />;
			case "three":
				return <FooterHomeThree />;
			case "four":
				return <FooterHomeFour />;
			case "five":
				return <FooterHomeFive />;
			default:
				return <FooterHomeOne />;
		}
	};
	return (
		<>
			{headerChooseFunc()}
			<main>{children}</main>
			{footerChooseFunc()}
		</>
	);
}
