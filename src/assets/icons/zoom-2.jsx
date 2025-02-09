import React from 'react';

function Zoom2(props) {
	const title = props.title || "zoom 2";

	return (
		<svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
			<title>{title}</title>
			<g fill="#020202" stroke="#a445ed" strokeLinecap="square" strokeWidth="2">
				<line fill="none" x1="22" x2="16.4" y1="22" y2="16.4" />
				<circle cx="10" cy="10" fill="none" r="9" stroke="#a445ed" />
			</g>
		</svg>
	);
};

export default Zoom2;