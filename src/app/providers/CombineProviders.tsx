import React, { FC, ReactNode } from 'react'

import {CounterProvider} from "./CounterProvider";
import {TimerProvider} from "./TimerProvider";

const CombineProviders: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<CounterProvider>
			<TimerProvider>{children}</TimerProvider>
		</CounterProvider>
	)
}

export default CombineProviders
