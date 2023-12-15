import Button from './components/Button/Button'
import CombineProviders from './context/CombineProviders'
import { CounterContextProvider } from './context/context.items/CounterContext'
import React from 'react'
import { TimerContextProvider } from './context/context.items/TimerContext'
import WindowNavigation from './components/WindowNavigation/WindowNavigation'
import WindowResult from './components/WindowResult/WindowResult'
import s from './App.module.scss'

const App: React.FC = () => {
	return (
		<div className={`${s.center} ${s.app}`}>
			<div className={s.container}>
				<Button
					color='#D5D5D5'
					width='100%'
					height='49px'
					border_radius='35px'
					text='Change Theme'
				/>
				<CombineProviders>
					<WindowResult />
					<WindowNavigation />
				</CombineProviders>
				{/* <CounterContextProvider>
					<TimerContextProvider></TimerContextProvider>
				</CounterContextProvider> */}
			</div>
		</div>
	)
}

export default App
