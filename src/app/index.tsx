import './index.scss'
import React from 'react'
import s from './styles/App.module.scss'
import {Button} from "../shared/components/Button";
import CombineProviders from "./providers/CombineProviders";
import {WindowResult} from "../widgets/WindowResult";
import {ManageCount} from "../features/ManageCount/ui/ManageCount";
import {StartApp} from "../features/StartApp";

const App: React.FC = () => {
    return (
        <div className={`${s.center} ${s.app}`}>
            <div className={s.container}>
                <Button
                    color='#D5D5D5'
                    width='100%'
                    height='49px'
                    border_radius='35px'
                    text='Change Theme'
                />
                <CombineProviders>
                    <WindowResult />
                    <div>
                        <ManageCount/>
                        <StartApp/>
                    </div>
                </CombineProviders>
            </div>
        </div>
    )
}

export default App
