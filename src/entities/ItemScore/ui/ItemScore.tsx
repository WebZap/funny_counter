import React, { FC } from 'react'

import s from './ItemScore.module.scss'

interface IItemScore {
	num: number
	lvl: number
	count: number
}

const ItemScore: FC<IItemScore> = ({ lvl, count, num }) => {
	return (
		<div className={s.container}>
			<p>{`${num}. Level - ${lvl} Count - ${count}`}</p>
		</div>
	)
}

export default ItemScore
