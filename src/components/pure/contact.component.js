import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.model'

const ContactComponent = ({ contact }) => {

  return (
    <div>
      <h2>{ contact.name + ' ' + contact.lastName }</h2>
      <h3>{ contact.email }</h3>
      <h4>{ contact.connected ? 'Contacto En Línea' : 'Contacto No Disponible' }</h4>
    </div>
  )

}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent