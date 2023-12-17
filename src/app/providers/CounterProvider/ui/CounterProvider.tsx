import {FC, ReactNode} from "react";
import {useCount} from "../../../../shared/hooks/useCount";
import {useScore} from "../../../../shared/hooks/useScore";
import {CounterContext, ICounterContext} from "../lib/CounterContext";
import {ITimerContext} from "../../TimerProvider/lib/TimerContext";

export const CounterProvider: FC<{ children: ReactNode }> = ({
                                                                        children,
                                                                    }) => {
    const { increment, decrement, count, width, level, resetCounter, color } =
        useCount(0)
    const { saveUserScore, scoreItems } = useScore()
    const valueContext: ICounterContext = {
        saveUserScore,
        scoreItems,
        count,
        level,
        width,
        increment,
        decrement,
        resetCounter,
        color,
    }
    return (
        <CounterContext.Provider value={valueContext}>
            {children}
        </CounterContext.Provider>
    )
}