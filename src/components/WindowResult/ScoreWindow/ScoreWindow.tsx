import React, { FC, useContext } from 'react'

import { CounterContext } from '../../../context/CounterContext'
import s from './ScoreWindow.module.scss'
import { useCount } from '../../../hooks/useCount'

const ScoreWindow: FC = () => {
	const { count } = useContext(CounterContext)
	return (
		<div className={s.container}>
			<p>{count}</p>
		</div>
	)
}

export default ScoreWindow
