import { usersPagesApi } from "../API/API";

const SET_USERS = 'SET_USERS'

const SET_CURRENT_USERS = 'SET_CURRENT_USERS'

const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT'

const SET_CURRENTPAGE = 'SET_CURRENTPAGE'

const DELETE_USERS = 'DELETE_USERS'

const DELETE_USERS_SUCCES = 'DELETE_USERS_SUCCES'

const initialState = {

    users: [

    ],

    page: 1
}

const usersReducer = (state = initialState, action) => {

//   console.log(state, 'state')

    switch (action.type) {

        case SET_USERS: {

            return {
               ...state, users: action.data
            }
        }

        case SET_CURRENT_USERS: {

            return {
               ...state, users: action.data
            }
        }
        
        case SET_TOTAL_ITEMS_COUNT: {
            return {...state, total_pages: action.count}
        }

        case SET_CURRENTPAGE: {
            return {
                ...state, page: action.currentPage
            }
        }
        
        case DELETE_USERS:  {

            let users = {...state, users: Object.values(state.users)}
        
            let arr = {...state.users, data: users.users[4].filter(t => t.id !== action.payload)}
            
            return {...state,  users: arr}
        }
    
        default:

            return state
    }
}

const setUsers = (data) => ({
    type: SET_USERS, data
})

const setCurrentUser = (id) => ({
    type: SET_CURRENT_USERS, id
})

export const setTotalUsersCount = (count) => ({
    type: SET_TOTAL_ITEMS_COUNT, count
})


export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENTPAGE, currentPage
 })

export const deleteUsers = (payload) => ({
    type: DELETE_USERS, payload
 })

export const deleteUsersSucces = (payloadSucces) => ({
    type: DELETE_USERS_SUCCES, payloadSucces
 })



export const getUsers = (page, per_page, total, total_pages) => { 
  
    return async (dispatch) => {
       
        dispatch (setCurrentPage (page))

        let response = await usersPagesApi.getUsers(page, per_page, total, total_pages)

        dispatch(setUsers(response.data))

        dispatch (setTotalUsersCount (response.total))
       
    }
}


export const deleteUsersItems = (userId) => { 
    
    return async (dispatch) => {

     await usersPagesApi.deleteUsers(userId)

            dispatch(deleteUsers(userId)) 
    }
}

export const getCurrentUser = (userId) => { 
    
    return async (dispatch, getState) => {
       
    let res = await usersPagesApi.getCurrentUser(userId)

    dispatch(setCurrentUser(userId)) 
    
    console.log(res)
   
    }
}

export default usersReducer