import React from 'react'

interface IButton {
	text: string
	color: string
	width: string
	height: string
	border_radius: string
	font_size?: string
	fn?: () => void
}

const Button: React.FC<IButton> = ({
	text,
	color,
	width,
	height,
	border_radius,
	font_size,
	fn,
}) => {
	return (
		<button
			onClick={fn}
			style={{
				backgroundColor: color,
				width,
				height,
				borderRadius: border_radius,
				fontSize: font_size,
			}}
		>
			{text}
		</button>
	)
}

export default Button
