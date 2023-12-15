import { FC, ReactNode } from 'react'
import { IUseTimer, useTimer } from '../../hooks/useTimer'

import { createContext } from 'react'

interface ITimerContext extends IUseTimer {}

export const TimerContext = createContext<ITimerContext | undefined>(undefined)

export const TimerContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const { formatTimer, startTimer, stopTimer, active } = useTimer(30)
	const valueForContext: ITimerContext = {
		formatTimer,
		startTimer,
		stopTimer,
		active,
	}
	return (
		<TimerContext.Provider value={valueForContext}>
			{children}
		</TimerContext.Provider>
	)
}
