import React, { FC, useContext } from 'react'

import Button from '../Button/Button'
import CounterRow from './CounterRow/CounterRow'
import { TimerContext } from '../../context/TimerContext'
import s from './WindowNavigation.module.scss'

const WindowNavigation: FC = () => {
	const { startTimer, stopTimer, active } = useContext(TimerContext)
	return (
		<div className={s.container}>
			<CounterRow />
			{active ? (
				<Button
					fn={stopTimer}
					width='100%'
					height='100px'
					font_size='45px'
					color='#ff1f1f'
					text='End Game'
					border_radius='45px'
				/>
			) : (
				<Button
					fn={startTimer}
					width='100%'
					height='100px'
					font_size='45px'
					color='#A3FF9B'
					text='Start Game'
					border_radius='45px'
				/>
			)}
		</div>
	)
}

export default WindowNavigation
