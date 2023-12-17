import { FC, ReactNode } from 'react'
import { IUseTimer, useTimer } from '../../../../shared/hooks/useTimer'

import { createContext } from 'react'

export interface ITimerContext extends IUseTimer {}

export const TimerContext = createContext<ITimerContext | undefined>(undefined)

