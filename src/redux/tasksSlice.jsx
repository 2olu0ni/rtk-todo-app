import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[
        // { id:1, title:"task1", completed: false },
        // { id:2, title:"task2", completed: false },
        // { id:3, title:"task3", completed: true }
    ],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },

        // toggleComplete: ( state,action ) => {
        //     const index = state.findIndex(
        //         (todo) => todo.id === action.payload.id
        //     );
        //     state[index].completed = action.payload.completed
        // },

        deleteTask: (state, action) => {
            return state.filter((todo)=>todo.id !== action.payload.id)
        }
    }
});

export const {addTask,  deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;