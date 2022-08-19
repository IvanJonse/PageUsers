import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getUsers, setCurrentPage, deleteUsersItems, updateUser } from '../../redux/usersReducer'
import ManyPage from './ManyPage'
import Preloader from '../Preloader/Preloader'


function ManyPageContainer(props) {
   
useEffect(()=> {

  let {currentPage, pageSize} = props
 props.getUsers(currentPage, pageSize, '')

}, [])


let onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    let {pageSize} = props
    props.getUsers(pageNumber, pageSize, '')
}

    return (
      <>
        {   !props.isFetching ?
          <ManyPage 
            isFetching={props.isFetching}
            users={props.users} 
            updateUser={props.updateUser}
            currentPage={props.currentPage}
            onPageChanged={onPageChanged} 
            pageSum={props.pageSum}
            deleteUsersItems={props.deleteUsersItems}
          />  : <Preloader/>
        }
      </>
      
    )
}

let mapStateToProps = (state) => ({
    users: state.userPage.users,
    pageSize: state.userPage.per_page,
    pageSum: state.userPage.total_pages,
    currentPage: state.userPage.page,
    isFetching: state.userPage.isFetching,
})

export default  connect(mapStateToProps, {getUsers, setCurrentPage, deleteUsersItems, updateUser})(ManyPageContainer)