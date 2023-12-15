import { FC, useContext, useState } from 'react'

import { CounterContext } from '../context/CounterContext'
import { log } from 'console'

export interface IUseTimer {
	formatTimer: () => string
	active: boolean
	startTimer: () => void
	stopTimer: () => void
}

export const useTimer = (initSeconds: number): IUseTimer => {
	const { resetCounter } = useContext(CounterContext)
	const [seconds, setSeconds] = useState(initSeconds)
	const [active, setActive] = useState(false)
	const [interval, setInter] = useState<NodeJS.Timeout | null>(null)

	console.log(interval)

	const stopTimer = () => {
		clearInterval(interval)
		resetCounter()
		setActive(false)
		setSeconds(60)
	}

	const startTimer = () => {
		setActive(true)
		const intervalTimer = setInterval(() => {
			setSeconds(prev => {
				if (prev === 0) {
					clearInterval(intervalTimer)
					stopTimer()
				}
				return prev - 1
			})
		}, 1000)
		setInter(intervalTimer)
	}

	const formatTimer = () => {
		return seconds < 10 ? `00:0${seconds}` : `00:${seconds}`
	}

	return {
		formatTimer,
		active,
		startTimer,
		stopTimer,
	}
}
