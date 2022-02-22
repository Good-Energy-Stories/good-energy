import css from "styled-jsx/css";

import { motion } from "framer-motion";

const Label = ({ label }) => {
	return (
		<>
			<div>{label}</div>

			<style jsx>{`
				div {
					font-size: 18px;
					text-decoration: underline;
					margin-bottom: 0.625rem;
				}
			`}</style>
		</>
	);
};

export default Label;
