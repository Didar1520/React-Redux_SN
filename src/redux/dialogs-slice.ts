import { createSlice } from "@reduxjs/toolkit"




export type dialogsDataType = {
    id: number
    name: string
}

export type messagesDataType = {
    id: number
    text: string
}

const initialState = {
    dialogsData: [
        { id: 0, name: "Steve Jobes" },
        { id: 1, name: "Xiao" },
        { id: 2, name: "Curry" }
    ] as Array<dialogsDataType>,
    messagesData: [
        { id: 0, text: 'whassap' },
        { id: 1, text: 'Ni Hao' },
        { id: 2, text: 'Konnichiwa' }
    ] as Array<messagesDataType>,
}



const dialogsSlice = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {

        addMessage(state, action) {
            state.messagesData.push({ id: 6, text: action.payload })
        },
    }
})

export const { addMessage } = dialogsSlice.actions

export default dialogsSlice.reducer

