export const Filter = ({ onChangeFilter }) => (
  <>
    <p className='text-white'>Find contacts by name</p>
    <input type='text' onChange={({ target: { value } }) => onChangeFilter(value)} />
  </>
);
