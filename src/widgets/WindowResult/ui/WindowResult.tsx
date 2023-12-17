import ProgressLine from '../../../entities/ProgressLine/ui/ProgressLine'
import React, {useContext} from 'react'

import UserName from '../../../entities/UserName/ui/UserName'
import s from './WindowResult.module.scss'
import {Count} from "../../../entities/Count";
import {CounterContext} from "../../../app/providers/CounterProvider/lib/CounterContext";
import {ItemScore} from "../../../entities/ItemScore";

const WindowResult = () => {
	const { scoreItems } = useContext(CounterContext)
	return (
		<div className={s.container}>
			<ProgressLine />
			<Count />
			<UserName />
			<div className={s.columnItems}>
				{scoreItems.map((item, index) => (
					<ItemScore lvl={item.lvl} count={item.count} num={index + 1}/>
				))}
			</div>
		</div>
	)
}

export default WindowResult


