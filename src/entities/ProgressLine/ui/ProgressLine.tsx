import React, { FC, useContext } from 'react'

import { CounterContext } from '../../../app/providers/CounterProvider/lib/CounterContext'
import { TimerContext } from '../../../app/providers/TimerProvider/lib/TimerContext'
import s from './ProgressLine.module.scss'

const ProgressLine: FC = () => {
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

export default ProgressLine
