import { Contact } from "../../models/contact.model"
import ContactComponent from "../pure/contact.component"

const ContactListComponent = () => {

  const defaultContact = new Contact('Victor', 'Soto', 'victor.soto@example.com', true);

  return (
    <div>
      <ContactComponent contact={defaultContact} />
    </div>
  )
}

export default ContactListComponent