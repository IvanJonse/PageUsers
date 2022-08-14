import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getUsers, setCurrentPage, deleteUsersItems, getCurrentUser } from '../../redux/usersReducer'
import ManyPage from './ManyPage'

function ManyPageContainer(props) {
  
useEffect(()=> {

  let {currentPage, pageSize} = props
  props.getUsers(currentPage, pageSize)

}, [])

let onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    let {pageSize} = props
    props.getUsers(pageNumber, pageSize)
}

    return (
        <ManyPage 
          users={props.users} 
          currentPage={props.currentPage}
          onPageChanged={onPageChanged} 
          pageSum={props.pageSum}
          getCurrentUser={props.getCurrentUser}
          deleteUsersItems={props.deleteUsersItems}
        />
    )
}



let mapStateToProps = (state) => ({
    users: state.userPage.users,
    pageSize: state.userPage.users.per_page,
    pageSum: state.userPage.users.total_pages,
    currentPage: state.userPage.users.page
   
})

export default connect(mapStateToProps, {getUsers, setCurrentPage, deleteUsersItems, getCurrentUser})(ManyPageContainer)