import React, { FC, useContext } from 'react'

import { CounterContext } from '../../../context/context.items/CounterContext'
import { TimerContext } from '../../../context/context.items/TimerContext'
import s from './ProgressRow.module.scss'

const ProgressRow: FC = () => {
	const { width, level, color } = useContext(CounterContext)
	const { formatTimer } = useContext(TimerContext)
	return (
		<>
			<div className={s.characteres}>
				<div>
					<p>{level}</p>
				</div>
				<div>
					<p>{formatTimer()}</p>
				</div>
			</div>
			<div className={s.container}>
				<div className={s.progressContainer}>
					<div
						style={{ width: `${width}%`, backgroundColor: `${color}` }}
						className={s.progressLine}
					></div>
				</div>
				<div className={s.status}>
					<p>{width}%</p>
				</div>
			</div>
		</>
	)
}

export default ProgressRow
