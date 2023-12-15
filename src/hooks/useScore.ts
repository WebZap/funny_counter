import { useState } from 'react'

interface IUserScore {
	lvl: number
	count: number
}

type TScoreItems = IUserScore[]

export interface IUseScore {
	scoreItems: TScoreItems
	saveUserScore: (lvl: number, count: number) => void
}

export const useScore = (): IUseScore => {
	// const [score, setScore] = useState<IUserScore | null>(null)
	const [scoreItems, setScoreItems] = useState<TScoreItems>([])

	const saveUserScore = (lvl: number, count: number) => {
		const userScore: IUserScore = {
			lvl,
			count,
		}
		setScoreItems(prevState => [...prevState, userScore])
	}
	return {
		scoreItems,
		saveUserScore,
	}
}
