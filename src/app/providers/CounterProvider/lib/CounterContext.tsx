import { FC, ReactNode, createContext } from 'react'
import { IUseScore, useScore } from '../../../../shared/hooks/useScore'
import { IUserCount, useCount } from '../../../../shared/hooks/useCount'

export interface ICounterContext extends IUserCount, IUseScore {}
export const CounterContext = createContext<ICounterContext | undefined>(
	undefined
)


