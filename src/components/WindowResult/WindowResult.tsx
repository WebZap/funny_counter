import ProgressRow from './ProgressRow/ProgressRow'
import React from 'react'
import ScoreColumn from './ScoreColumn/ScoreColumn'
import ScoreWindow from './ScoreWindow/ScoreWindow'
import UserName from './UserName/UserName'
import s from './WindowResult.module.scss'

const WindowResult = () => {
	return (
		<div className={s.container}>
			<ProgressRow />
			<ScoreWindow />
			<UserName />
			<ScoreColumn />
		</div>
	)
}

export default WindowResult
