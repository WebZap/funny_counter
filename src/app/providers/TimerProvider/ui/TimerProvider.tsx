import {FC, ReactNode} from "react";
import {useTimer} from "../../../../shared/hooks/useTimer";
import {ITimerContext, TimerContext} from "../lib/TimerContext";

export const TimerProvider: FC<{ children: ReactNode }> = ({
                                                                      children,
                                                                  }) => {
    const { formatTimer, startTimer, stopTimer, active } = useTimer(30)
    const valueForContext: ITimerContext = {
        formatTimer,
        startTimer,
        stopTimer,
        active,
    }
    return (
        <TimerContext.Provider value={valueForContext}>
            {children}
        </TimerContext.Provider>
    )
}
