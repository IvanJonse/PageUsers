import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ManyPageItem from '../UserItem/ManyPageItem';
import Paginator from './Paginator';

export default function ManyPage(props) {

    return (
     
      <Container>
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
                  </thead>
                  <tbody>
                    { 
                      props.users.data &&
                      props.users.data.map((d, i) => 
                      
                      <ManyPageItem 
                        key={i} 
                        id={d.id} 
                        data={d} 
                        getCurrentUser={props.getCurrentUser}
                        deleteUsersItems={props.deleteUsersItems} 
                        email={d.email} 
                        first_name={d.first_name} 
                        last_name={d.last_name} 
                        avatar={d.avatar}
                      />)
                    }
                </tbody>
              </Table>
          </Col>
        </Row>

      </Container>
      
    )
} 