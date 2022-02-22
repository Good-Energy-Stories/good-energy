import sanity from "../lib/sanity";
import styles from "../styles/Home.module.css";

import Link from "next/link";

import { useRef, useEffect, useState, useCallback } from "react";
import { useMobxStores } from "../stores/store";
import { Masthead, StickyNavBar, Meta } from "../components";

const Root = (props) => {
	const store = useMobxStores();
	const {
		uiStore: { updateScrollPosition },
	} = store;

	useEffect(() => {
		window.addEventListener("scroll", updateScrollPosition);
		return () => {
			window.removeEventListener("scroll", updateScrollPosition);
		};
	}, [updateScrollPosition]);

	return (
		<>
			<Meta />
			<Masthead />
			<StickyNavBar />
		</>
	);
};

export const getStaticProps = async () => {
	return {
		props: {},
	};
};

export default Root;
