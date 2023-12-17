import React, { FC, useContext } from 'react'

import { CounterContext } from '../../../app/providers/CounterProvider/lib/CounterContext'
import s from './Count.module.scss'
import { useCount } from '../../../shared/hooks/useCount'

const Count: FC = () => {
	const { count } = useContext(CounterContext)
	return (
		<div className={s.container}>
			<p>{count}</p>
		</div>
	)
}

export default Count
