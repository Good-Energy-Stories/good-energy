import React from "react";
import App, { Container } from "next/app";
import "../styles/globals.css";
import "../styles/fonts.css";
import { useMobxStores, getStores, StoreProvider } from "../stores/store";
import { BrowserRouter as Router } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { isBrowser } from "../lib/helpers";

import { signature } from "../lib/signature";
import { MediaPlayer } from "../components";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

// Console Credits
if (isBrowser) {
	signature;
}

class CustomApp extends App {
	static async getInitialProps(appContext) {
		// On server-side, this runs once and creates new stores
		// On client-side, this always reuses existing stores
		const mobxStores = getStores();

		// Make stores available to page's `getInitialProps`
		appContext.ctx.mobxStores = mobxStores;

		// Call "super" to run page's `getInitialProps`
		const appProps = await App.getInitialProps(appContext);

		// Gather serialization-friendly data from stores

		// Send it to `render`
		return {
			...appProps,
			initialData: mobxStores,
		};
	}

	render() {
		const { Component, pageProps, initialData } = this.props;

		// During SSR, this will create new store instances so having `initialData` is crucial.
		// During the client-side hydration, same applies.
		// From then on, calls to `getStores()` return existing instances.
		const stores = getStores(initialData);

		return (
			<StoreProvider value={stores}>
				<ThemeProvider theme={{ mode: "light" }}>
					{typeof window === "undefined" ? null : (
						<>
							<Component {...pageProps} />
						</>
					)}
				</ThemeProvider>
			</StoreProvider>
		);
	}
}

export default CustomApp;
