import { Component } from 'react';
import { Form } from '~~/Form/Form';
import { Filter } from '~~/Filter/Filter';
import { Contacts } from '~~/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (!savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = value =>
    this.setState({
      filter: value,
    });

  addNewUser = newUser =>
    this.setState(({ contacts }) => ({
      contacts: [newUser, ...contacts],
    }));

  visibleItems = () => {
    return this.state.contacts.filter(contact => {
      if (!this.state.filter) {
        return this.state.contacts;
      } else {
        const topicFilter = this.state.filter.toLowerCase();
        return contact.name.toLowerCase().includes(topicFilter);
      }
    });
  };

  deleteItem = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  render = () => (
    <>
      <h1 className='mb-3 font-mono text-white'>PhoneBook</h1>
      <Form contacts={this.state.contacts} newUser={this.addNewUser} />
      <Filter onChangeFilter={this.changeFilter} />
      <Contacts title='Statistics:' items={this.visibleItems()} onDeleteItem={this.deleteItem} />
    </>
  );
}
