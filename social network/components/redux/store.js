import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Хочешь обновить гардероб и выглядеть ярко этим летом?🌄 Наша игровая джерси сезона 2023 ждет тебя в магазине 🔥', likesCount: 453 },
                { id: 2, message: 'Послематчевое интервью с нашим керри Yatoro雨 👌', likesCount: 245 },
                { id: 3, message: 'На Bali Major 2023 мы будем играть в группе А 🔥', likesCount: 745 },
                { id: 4, message: 'Проигрываем на первой карте. Впереди еще одна, не переключайтесь!', likesCount: 241 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('HI');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);

    }

}

export default store;
window.store = store;