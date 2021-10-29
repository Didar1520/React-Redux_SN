import { ChangeEvent, DetailedHTMLProps, FormHTMLAttributes, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { dialogsDataType, messagesDataType } from '../../redux/dialogs-slice';
import s from './dialogs.module.sass'


type PropsType = {
    peopleData: Array<messagesDataType>
    messagesData: Array<dialogsDataType>
    addMessage: (text:string)=>void
}

const Dialog:React.FC<PropsType> = (props) => {

    let peopleData = props.peopleData
    let messageData = props.messagesData

    const DialogsPeople = (props: any) => {

        let path = "/dialogs/" + props.id
        return (
            <div className={s.Dialogs_peoples__item}>
                <NavLink to={path}> {props.name} </NavLink>
            </div>
        )
    }

    const DialogsMessagesItem = (props:any) => {
        return (
            <div className={s.Dialogs_messages__item}>{props.text}</div>
        )
    }


    const [state, setstate] = useState({ value: '' })

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=> {
        setstate({ value: e.currentTarget.value });
}

    const handleSubmit = (e:any) => {
        props.addMessage(state.value)
        setstate({value: ' '})
        e.preventDefault();

}

    // @ts-ignore
    let messagesElements = messageData.map(m => <DialogsMessagesItem text={m.text} key={m.id} />);
    // @ts-ignore
    let dialogsElements = peopleData.map(d => <DialogsPeople name={d.name} id={d.id} key={d.id} />);

    return (
        <div className={s.Dialogs}>
            <div className={s.Dialogs_peoples}>
                {dialogsElements}
            </div>
            <div className={s.Dialogs_messages}>
                {messagesElements}

                <div className={s.formik_wrapper}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Сообщение
                            <input type="text" value={state.value} onChange={handleChange} />

                        </label>
                        <input type="submit" value="Отправить" />
                    </form>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}





export default Dialog;


