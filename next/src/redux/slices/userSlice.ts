import {createSlice, PayloadAction} from '@reduxjs/toolkit'



interface User  {
    isAuth: boolean,
    id: number | null,
    username: string,
    email: string
}



const initialState : User = {
    isAuth: false,
    id: null,
    username: '',
    email: ''
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) =>{
          state.isAuth = action.payload
        },

        setUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id,
            state.username = action.payload.username,
            state.email = action.payload.email,
            state.isAuth = true

        }
    }
})


export const {setIsAuth, setUser} = userSlice.actions;

export default userSlice.reducer;