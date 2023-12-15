import React, { FC, useContext } from 'react'

import Button from '../../Button/Button'
import { CounterContext } from '../../../context/CounterContext'
import { TimerContext } from '../../../context/TimerContext'
import { log } from 'console'
import s from './CounterRow.module.scss'
import { useCount } from '../../../hooks/useCount'

const CounterRow: FC = () => {
	const { increment, decrement } = useContext(CounterContext)
	const { active } = useContext(TimerContext)
	return (
		<div className={s.container}>
			<Button
				fn={active ? increment : undefined}
				text='+1'
				color='#A3FF9B'
				border_radius='45px'
				height='100px'
				width='100%'
				font_size='40px'
			/>
			<Button
				fn={active ? decrement : undefined}
				text='-1'
				color='#FF9B9B'
				border_radius='45px'
				height='100px'
				width='100%'
				font_size='40px'
			/>
		</div>
	)
}

export default CounterRow
