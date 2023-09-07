import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'




const getDevices = createAsyncThunk( 'device/getDevices', async (props, {dispatch})=> {
    try {
        const res = await axios.get('http://localhost:1337/api/devices')
        return res
    } catch(e) {
        console.error(e)
    }
          
}) 



interface Device {
    devices: {}
}

const initialState : Device = {
     devices: {}
}


export const deviceSlice = createSlice({
       name: 'device',
       initialState,
       reducers: {

       },
       extraReducers: (builder)=> {
        builder.addCase(getDevices.fulfilled, (state, action: PayloadAction<any>)=> {
            
        })
       }

})


export default deviceSlice.reducer