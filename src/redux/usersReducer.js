import { usersPagesApi } from "../API/API";

const SET_USERS = 'SET_USERS'

const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT'

const SET_CURRENTPAGE = 'SET_CURRENTPAGE'

const DELETE_USERS = 'DELETE_USERS'

const UPDATE_USERS_SUCCES = 'UPDATE_USERS_SUCCES'

const TOGGLE_IS_FETCHING = 'LOADER'

const SET_FNAME = 'SET_FNAME' 

const initialState = {

    users: [],
    
    clear: '',

    page: 1,

    per_page: 6,

    total: 12,

    total_pages: 2,

    isFetching: true

}

const usersReducer = (state = initialState, action) => {
 

    switch (action.type) {

        case SET_USERS: {

            
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

        case SET_FNAME: {
          
            return {

                ...state, first_name: action.filter
            }
            
        }

        
        case DELETE_USERS:  {

            let dataInit = [...state.users.data]
            let arr = {...state.users, data: dataInit.filter(t => t.id !== action.payload)}

            return {...state,  users: arr}
        }

        case UPDATE_USERS_SUCCES: {
           
            let data = { 

                ...state.users, 

                data:   [action.payloadSucces.data, ...state.users.data.filter(e => e.id !== action.payloadSucces.id)]
                        .sort((prev, next) => prev.id - next.id)}
            
            return {
                ...state, users: data
            }
        }

        
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
    
        default:

            return state
    }
}

const setUsers = (data) => ({
    type: SET_USERS, data
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

export const updateCurrentUser = (id, data) => ({
    type: UPDATE_USERS_SUCCES, payloadSucces:{id, data}
 })

 export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

export const getUsers =  (page, per_page) => { 
  
    return async (dispatch) => {

        dispatch (toggleIsFetching(true))

        dispatch (setCurrentPage (page)) 
       
        let response = await usersPagesApi.getUsers(page, per_page) 
      
        dispatch (toggleIsFetching(false))
        
        dispatch(setUsers(response.data))

    }
}


export const deleteUsersItems = (userId) => { 
    
    return async (dispatch) => {

     await usersPagesApi.deleteUsers(userId)

            dispatch(deleteUsers(userId)) 
    }
}


export const updateUser = (id, data) => { 
   
    return async (dispatch) => {
     
        await usersPagesApi.updateUser(id, data)

        dispatch(updateCurrentUser(id, data)) 

    }
}

export default usersReducer