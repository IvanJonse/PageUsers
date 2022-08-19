import React, {useState, useEffect} from 'react';
import {AiOutlineEdit} from 'react-icons/ai'
import {VscClose} from 'react-icons/vsc'
import Modal from 'react-bootstrap/Modal';
import ProfileForm from './ProfileFormItem';
import { reduxForm } from "redux-form";

export default function ManyPageItem(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const onSubmit = (users) => {  

      props.updateUser(props.data.id, users)
      setShow(false)
  }

  return (

        <>
          <tr>
            <td>{props.id}</td>
            <td><img className='block text-start' style={{'minWidth':'60px', 'minHeigh':'60px'}} src={props.avatar} alt="" /> <span style={{'marginLeft' : '35px', 'fontSize' : '20px', 'fontWeight' : '500'}}>{props.first_name}</span> </td>
            <td className='align-middle text-center' >{props.last_name}</td>
            <td className='align-middle text-center'>{props.email}</td>
            <td className='align-middle text-center'>
              <button className='border border-info' onClick={handleShow}> <AiOutlineEdit/></button>
              <button onClick={()=> props.deleteUsersItems(props.data.id) } className='border border-info'><VscClose/></button>
            </td>
          </tr>
          
          <Modal show={show} onHide={handleClose} className='mx-5'>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img className='d-flex justify-content-center m-auto' src={props.avatar} alt="" />
                <ProfileReduxform onSubmit={onSubmit} data={props.users.data} initialValues={props.data} />
              </Modal.Body>
          </Modal>

        </>
      )
}

const ProfileReduxform = reduxForm ({
  form: 'FormEditContact', enableReinitialize : true, destroyOnUnmount: false 
}) (ProfileForm)





