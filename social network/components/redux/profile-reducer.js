const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        { id: 1, message: 'Хочешь обновить гардероб и выглядеть ярко этим летом?🌄 Наша игровая джерси сезона 2023 ждет тебя в магазине 🔥', likesCount: 453 },
        { id: 2, message: 'Послематчевое интервью с нашим керри Yatoro雨 👌', likesCount: 245 },
        { id: 3, message: 'На Bali Major 2023 мы будем играть в группе А 🔥', likesCount: 745 },
        { id: 4, message: 'Проигрываем на первой карте. Впереди еще одна, не переключайтесь!', likesCount: 241 }
    ],
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
            default: 
            return state;
    }
}  

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;