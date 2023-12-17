import { FC, useContext, useState } from 'react'

import { CounterContext } from '../../app/providers/CounterProvider/lib/CounterContext'

export interface IUseTimer {
	formatTimer: () => string
	active: boolean
	startTimer: () => void
	stopTimer: () => void
}

export const useTimer = (initSeconds: number): IUseTimer => {
	const { saveUserScore } = useContext(CounterContext)
	const { resetCounter, level, count } = useContext(CounterContext)
	const [seconds, setSeconds] = useState(initSeconds)
	const [active, setActive] = useState(false)
	const [interval, setInter] = useState<NodeJS.Timeout | null>(null)

	console.log(interval)

	const stopTimer = () => {
		clearInterval(interval)
		resetCounter()
		setActive(false)
		setSeconds(30)
		saveUserScore(level, count)
	}

	const startTimer = () => {
		setActive(true)
		const intervalTimer = setInterval(() => {
			setSeconds(prev => {
				if (prev === 0) {
					clearInterval(intervalTimer)
					console.log(level, count)
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
