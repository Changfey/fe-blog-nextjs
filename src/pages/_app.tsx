import { AppProps } from "next/app";
import Nav from "../components/Nav/Nav";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='app_warpper'>
			<Nav />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
