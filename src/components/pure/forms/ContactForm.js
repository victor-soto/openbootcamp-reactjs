import { useRef } from "react";
import { PropTypes } from 'prop-types'
import { ContactModel } from "../../../models/contact.model";

const ContactForm = ({ add }) => {
  const nameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const connectedRef = useRef(false);

  function addContact(e) {
    e.preventDefault()
    const newContact = new ContactModel(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      connectedRef.current.checked
    );
    add(newContact);
  }

  return (
    <div className="card">
      <div className='card-body'>
        <h5 className='card-title'>New Contact</h5>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              ref={nameRef}
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              ref={lastNameRef}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="connected"
              id="connected"
              ref={connectedRef}
            />
            <label htmlFor="connected" className="form-check-label">
              Connected?
            </label>
          </div>
          <button type='submit' className='btn btn-primary' onClick={addContact}>Save</button>
        </form>
      </div>
   </div>
  );
};

ContactForm.propTypes = {
  add: PropTypes.func.isRequired
}

export default ContactForm;
