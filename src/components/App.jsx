import { Component } from 'react';
import { Form } from '~~/Form/Form';
import { Filter } from '~~/Filter/Filter';
import { Contacts } from '~~/Contacts/Contacts';
import users from '~/Users/users.json';

export class App extends Component {
  state = {
    contacts: users,
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
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
      const topicFilter = this.state.filter.toLowerCase();
      return (
        contact.name.toLowerCase().includes(topicFilter) ||
        contact.number.split('-').join('').includes(topicFilter)
      );
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
