import { useState } from "react"
import { ContactModel } from "../../models/contact.model"
import Contact from "../pure/Contact"
import ContactForm from "../pure/forms/ContactForm"

const ContactList = () => {
  const initialData = [
    new ContactModel('Victor', 'Soto', 'victor.soto@example.com', true),
    new ContactModel('John', 'Smith', 'john.smith@example.com', true),
    new ContactModel('Charles', 'Diaz', 'charles.diaz@example.com', false)
  ]

  const [contacts, setContacts] = useState(initialData)

  function updateConnected(contact) {
    const index = contacts.indexOf(contact)
    let contactList = [...contacts]
    contactList[index].connected = !contactList[index].connected
    setContacts(contactList)
  }

  function deleteContact(contact) {
    const index = contacts.indexOf(contact)
    let contactList = [...contacts]
    contactList.splice(index, 1)
    setContacts(contactList)
  }

  function addContact(contact) {
    let contactList = [...contacts]
    contactList.push(contact)
    setContacts(contactList)
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Connected?</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          { contacts.map((contact, index) => 
            <Contact 
              key={index}
              contact={contact}
              toogleConnected={updateConnected}
              deleteContact={deleteContact} />) }
        </tbody>
      </table>
      <div>
        <ContactForm add={addContact} />
      </div>
    </div>
  )
}

export default ContactList