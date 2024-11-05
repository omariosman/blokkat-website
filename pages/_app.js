import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import Layout from "../components/layout";

import Head from "next/head";
import "react-modal-video/css/modal-video.min.css";
import "swiper/css";
import "swiper/css/effect-cards";
import Preloader from "../components/common/preloader/preloader";
import ScrollTop from "../components/common/scroll-top";
import "../styles/css/app.css";
import "../styles/css/main.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* common title */}
				<title>fugu</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>

			<ScrollTop />
			<Preloader />
		</>
	);
}

export default MyApp;
