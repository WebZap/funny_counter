import React, { FC, useContext } from 'react'

import { CounterContext } from '../../../context/context.items/CounterContext'
import ItemScore from './ItemScore/ItemScore'
import s from './ScoreColumn.module.scss'

const ScoreColumn: FC = () => {
	const { scoreItems } = useContext(CounterContext)
	return (
		<div className={s.container}>
			{scoreItems.map((item, index) => (
				<ItemScore lvl={item.lvl} count={item.count} num={index + 1} />
			))}
		</div>
	)
}

export default ScoreColumn
