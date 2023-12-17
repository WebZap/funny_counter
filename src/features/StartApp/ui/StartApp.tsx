import React, {useContext} from 'react';
import {TimerContext} from "../../../app/providers/TimerProvider/lib/TimerContext";
import {Button} from "../../../shared/components/Button";

export const StartApp = () => {
    const { startTimer, stopTimer, active } = useContext(TimerContext)
    return (
        <div>
            {active ? (
                <Button
                    fn={stopTimer}
                    width='100%'
                    height='100px'
                    font_size='45px'
                    color='#ff1f1f'
                    text='End Game'
                    border_radius='45px'
                />
            ) : (
                <Button
                    fn={startTimer}
                    width='100%'
                    height='100px'
                    font_size='45px'
                    color='#A3FF9B'
                    text='Start Game'
                    border_radius='45px'
                />
            )}
        </div>
    );
};

