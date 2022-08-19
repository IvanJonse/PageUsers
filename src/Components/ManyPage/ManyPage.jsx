import React, {useState} from 'react'
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ManyPageItem from '../UserItem/ManyPageItem';
import Paginator from './Paginator';
import Preloader from '../Preloader/Preloader'

export default function ManyPage(props) {
  
 const [fName, setFname] = useState('')
 const [LName, setLname] = useState('')
 const [Email, setEmail] = useState('')

 return (
     <>
        <Container className='mt-1'>
          <Row>
            <Col md='12'>
                <Paginator 
                  onPageChanged={props.onPageChanged} 
                  currentPage={props.currentPage}
                  pageSum={props.pageSum}
                />
    
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>

                      </tr>

                      <tr>

                        <th></th>

                        <th><FormControl className='border-info' placeholder='Search by first name...' onChange={(e)=> setFname(e.target.value)} type="text" /></th>

                        <th><FormControl className='border-info' placeholder='Search by last name...' onChange={(e)=> setLname(e.target.value)} type="text" /></th>

                        <th><FormControl className='border-info' placeholder='Search by email...' onChange={(e)=> setEmail(e.target.value)} type="email" /></th>

                      </tr>
                     
                    </thead>
                    
                    <tbody>
                
                    { 
                        !props.isFetching ?

                         props.users.data.filter((val) => {
            
                          if (fName == '' && LName == '' && Email == '') return val
                         
                             else if (
                              val.first_name.toLowerCase().includes(fName.toLowerCase()) 
                              && val.last_name.toLowerCase().includes(LName.toLowerCase())
                              && val.email.toLowerCase().includes(Email.toLowerCase())
                               ) return val

                          }).map((d, i) => 
                        
                          <ManyPageItem 
                            users={props.users}
                            key={i} 
                            id={d.id} 
                            data={d} 
                            updateUser={props.updateUser}
                            deleteUsersItems={props.deleteUsersItems} 
                            email={d.email} 
                            first_name={d.first_name} 
                            last_name={d.last_name} 
                            avatar={d.avatar}
                          />
                        )

                        : <Preloader/>
                         
                    }
                            
                  </tbody>
                </Table>
            </Col>
          </Row>
        </Container>
        <>
      
        </>
      </>
    )
} 

