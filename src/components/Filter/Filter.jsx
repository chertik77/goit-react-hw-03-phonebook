export const Filter = ({ onChangeFilter }) => (
  <>
    <h2 className='mb-5 mt-10 text-center font-serif text-4xl text-white'>Find contacts</h2>
    <input
      type='text'
      className='mx-auto mb-6 block h-9 rounded p-2 font-serif placeholder:text-sm'
      placeholder='Find someone..'
      onChange={({ target: { value } }) => onChangeFilter(value)}
    />
  </>
);
