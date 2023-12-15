import { FC, ReactNode, createContext } from 'react'
import { IUseScore, useScore } from '../../hooks/useScore'
import { IUserCount, useCount } from '../../hooks/useCount'

interface ICounterContext extends IUserCount, IUseScore {}
export const CounterContext = createContext<ICounterContext | undefined>(
	undefined
)

export const CounterContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const { increment, decrement, count, width, level, resetCounter, color } =
		useCount(0)
	const { saveUserScore, scoreItems } = useScore()
	const valueContext: ICounterContext = {
		saveUserScore,
		scoreItems,
		count,
		level,
		width,
		increment,
		decrement,
		resetCounter,
		color,
	}
	return (
		<CounterContext.Provider value={valueContext}>
			{children}
		</CounterContext.Provider>
	)
}
