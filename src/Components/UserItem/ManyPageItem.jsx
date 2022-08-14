import React from 'react';
import Table from 'react-bootstrap/Table';
import {AiOutlineEdit} from 'react-icons/ai'
import {VscClose} from 'react-icons/vsc'

export default function ManyPageItem(props) {
    return (
          <tr>
            <td>{props.id}</td>
            <td><img className='block text-start' style={{'minWidth':'60px', 'minHeigh':'60px'}} src={props.avatar} alt="" />{props.first_name}</td>
            <td className='align-middle text-center'>{props.last_name}</td>
            <td className='align-middle text-center'>{props.email}</td>
            <td className='align-middle text-center'>
              <button onClick={()=> props.getCurrentUser(props.data.id)} className='border border-info'><AiOutlineEdit/></button>
              <button onClick={()=> props.deleteUsersItems(props.data.id) } className='border border-info'><VscClose/></button>
            </td>
          
          </tr>

      )

}
