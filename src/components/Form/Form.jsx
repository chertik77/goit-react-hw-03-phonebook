import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  confirmForAddingNewUser,
  userIsAlreadyExistsByNumber,
} from '~/Notifications/Notifications';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    const contactId = nanoid();
    const name = this.state.name;
    const number = this.state.number;

    if (this.isUserExistsByName(name)) {
      confirmForAddingNewUser(name, number, contactId, this.isUserExistsByNumber, this.addNewUser);
      return this.resetForm();
    } else if (this.isUserExistsByNumber(number)) {
      userIsAlreadyExistsByNumber(number);
      return this.resetForm();
    } else {
      this.addNewUser(contactId, name, number);
    }
  };

  isUserExistsByName = name =>
    this.props.contacts.some(contact => {
      const contactNameToCheck = contact.name.toLowerCase();
      const inputNameToCheck = name.toLowerCase();
      return contactNameToCheck.split(' ').includes(inputNameToCheck);
    });

  isUserExistsByNumber = number => this.props.contacts.some(contact => contact.number === number);

  addNewUser = (id, name, number) => {
    const newContact = { id, name, number };
    this.props.newUser(newContact);
    this.resetForm();
  };

  resetForm = () =>
    this.setState({
      name: '',
      number: '',
    });

  render = () => (
    <form onSubmit={this.onFormSubmit}>
      <input
        type='text'
        value={this.state.name}
        name='name'
        required
        className='mb-2 block'
        onChange={({ target: { value } }) => this.setState({ name: value })}
      />
      <input
        type='tel'
        value={this.state.number}
        name='number'
        required
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
      <button type='submit' className='bg-orange-400'>
        Add contact
      </button>
    </form>
  );
}
