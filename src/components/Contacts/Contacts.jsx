export const Contacts = ({ title, items, onDeleteItem }) => (
  <>
    <h2 className='mb-5 text-center font-serif text-4xl text-white'>{title}</h2>
    <ul className='flex w-96 flex-col items-center justify-end gap-3'>
      {items.map(({ id, name, number }) => (
        <li key={id} className='flex items-center justify-end gap-2'>
          <p className='text-white'>{name}</p>
          <p className='text-white'>{number}</p>
          <button
            type='button'
            className='rounded-md bg-red-600 px-5 py-2 font-serif text-white'
            onClick={() => onDeleteItem(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
)
