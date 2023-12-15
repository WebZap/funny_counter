import React, { FC } from 'react'

import ItemScore from './ItemScore/ItemScore'
import s from './ScoreColumn.module.scss'

const ScoreColumn: FC = () => {
	return (
		<div className={s.container}>
			<ItemScore />
			<ItemScore />
			<ItemScore />
			<ItemScore />
			<ItemScore />
			<ItemScore />
			<ItemScore />
			<ItemScore />
			<ItemScore />
			<ItemScore />
			<ItemScore />
			<ItemScore />
		</div>
	)
}

export default ScoreColumn
