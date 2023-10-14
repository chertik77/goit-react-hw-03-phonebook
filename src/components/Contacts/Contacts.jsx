export const Contacts = ({ title, items, onDeleteItem }) => (
  <>
    <h2 className='font-mono text-white'>{title}</h2>
    <ul>
      {items.map(({ id, name, number }) => (
        <li key={id} className='font-mono text-white'>
          {name}
          {number}
          <button type='button' className='bg-red-600' onClick={() => onDeleteItem(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);
