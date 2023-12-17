import { log } from 'console'
import { useColor } from './useColor'
import { useState } from 'react'

export interface IUserCount {
	count: number
	width: number
	level: number
	increment: () => void
	decrement: () => void
	resetCounter: () => void
	color: string
}

export const useCount = (initialState: number): IUserCount => {
	const { color, changeColor } = useColor()
	const [count, setCount] = useState(initialState)
	const [width, setWidth] = useState(0)
	const [level, setLevel] = useState(0)

	const numbers = [2, 4, 6, 8, 10]

	const resetCounter = () => {
		setCount(prev => (prev = 0))
		setWidth(prev => (prev = 0))
		setLevel(prev => (prev = 0))
	}

	const increment = () => {
		if (width < 100) {
			setCount(prev => prev + 1)
			// setWidth(prev => prev + Math.floor(Math.random() * (5 - 1) + 1))
			setWidth(prev => {
				let randomIndex = Math.floor(Math.random() * numbers.length)
				return prev + numbers[randomIndex]
			})
		}

		if (width >= 99 || width > 100) {
			console.log(width)
			setWidth(prev => (prev = 0))
			setLevel(prev => prev + 1)
			changeColor()
		}
	}
	const decrement = () => {
		if (width > 0) {
			setCount(prev => prev - 1)
			setWidth(prev => prev - Math.floor(Math.random() * (5 - 1) + 1))
		}
	}

	return {
		level,
		count,
		width,
		increment,
		decrement,
		resetCounter,
		color,
	}
}
