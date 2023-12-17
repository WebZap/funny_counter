import React, {FC, useContext} from "react";
import s from "./ManageCount.module.scss";
import {CounterContext} from "../../../app/providers/CounterProvider/lib/CounterContext";
import {Button} from "../../../shared/components/Button";
import {TimerContext} from "../../../app/providers/TimerProvider/lib/TimerContext";

export const ManageCount: FC = () => {
    const { increment, decrement } = useContext(CounterContext)
    const { active} = useContext(TimerContext)
    return (
        <div className={s.container}>
            <Button
                fn={active ? increment : undefined}
                text='+1'
                color='#A3FF9B'
                border_radius='45px'
                height='100px'
                width='100%'
                font_size='40px'
            />
            <Button
                fn={active ? decrement : undefined}
                text='-1'
                color='#FF9B9B'
                border_radius='45px'
                height='100px'
                width='100%'
                font_size='40px'
            />
        </div>
    )
}

