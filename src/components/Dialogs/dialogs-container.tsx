import { AppStateType } from '../../redux/redux-toolkit';
import { connect } from 'react-redux'
import { addMessage} from '../../redux/dialogs-slice'

import Dialog from './dialogs'
import './dialogs.module.sass'



let mapStateToProps = (state:AppStateType) => {
    return {
        peopleData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}

//@ts-ignore
const DialogsContainer = connect(mapStateToProps, { addMessage})(Dialog);

    
export default DialogsContainer;


