const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Керри' },
        { id: 2, message: 'Мидлейнер' },
        { id: 3, message: 'Офлейнер' },
        { id: 4, message: 'Частичная поддержка' },
        { id: 5, message: 'Полная поддержка' },
        { id: 6, message: 'Тренер' }
    ],
    dialogs: [
        { id: 1, name: 'Илья "Yatoro" Мулярчук' },
        { id: 2, name: 'Денис "larI" Сигитов' },
        { id: 3, name: 'Магомед "Collapse" Халилов' },
        { id: 4, name: 'Денис "larI" Сигитов' },
        { id: 5, name: 'Ярослав "Miposhka" Найденов' },
        { id: 6, name: 'Айрат "Silent" Газиев' }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;