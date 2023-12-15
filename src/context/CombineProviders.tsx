import React, { FC, ReactNode } from 'react'

import { CounterContextProvider } from './context.items/CounterContext'
import { TimerContextProvider } from './context.items/TimerContext'

const CombineProviders: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<CounterContextProvider>
			<TimerContextProvider>{children}</TimerContextProvider>
		</CounterContextProvider>
	)
}

export default CombineProviders
