import PropTypes from 'prop-types'
import { ContactModel } from '../../models/contact.model'
import './Contact.css'

const Contact = ({ contact, toogleConnected, deleteContact }) => {
  return (
    <>
      <tr>
        <td>{contact.name + ' ' + contact.lastName}</td>
        <td>{contact.email}</td>
        <td className='text-center'>
          {contact.connected
            ? <span onClick={() => toogleConnected(contact)} className='actions'><i className='text-success bi bi-toggle-on'></i></span>
            : <span onClick={() => toogleConnected(contact)} className='actions'><i className='text-warning bi bi-toggle-off'></i></span>
          }
        </td>
        <td className='text-center'>
          <span className='actions' data-toogle='tooltip' title='Delete' onClick={() => deleteContact(contact)}>
            <i className="text-danger bi bi-trash-fill"></i>
          </span>
        </td>
      </tr>
    </>
  )
}

Contact.propTypes = {
  contact: PropTypes.instanceOf(ContactModel).isRequired,
  toogleConnected: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}

export default Contact