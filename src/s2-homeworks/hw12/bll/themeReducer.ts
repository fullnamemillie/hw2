const initState = {
    themeId: 1,
}

type InitStateType = typeof initState;

type ChangeThemeActionType = {
    type: 'SET_THEME_ID',
    id: number
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        case('SET_THEME_ID'): {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeActionType => ({ type: 'SET_THEME_ID', id })
