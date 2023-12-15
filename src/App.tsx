import Button from './components/Button/Button'
import { CounterContextProvider } from './context/CounterContext'
import React from 'react'
import { TimerContextProvider } from './context/TimerContext'
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
				<CounterContextProvider>
					<TimerContextProvider>
						<WindowResult />
						<WindowNavigation />
					</TimerContextProvider>
				</CounterContextProvider>
			</div>
		</div>
	)
}

export default App
