import { useState } from 'react'

interface IUseColor {
	color: string
	changeColor: () => void
}

export const useColor = (): IUseColor => {
	const [color, setColor] = useState<string>()
	const HEX = '0123456789ABCDEF'

	const hexNumbers = HEX.split('')

	const randomNumHex = () => {
		return Math.floor(Math.random() * HEX.length)
	}

	const changeColor = () => {
		let rawHex = ''
		for (let i = 0; i < 6; i++) {
			rawHex += hexNumbers[randomNumHex()]
		}
		let hexColor = `#${rawHex}`
		setColor(prev => (prev = hexColor))
	}

	return {
		color,
		changeColor,
	}
}
