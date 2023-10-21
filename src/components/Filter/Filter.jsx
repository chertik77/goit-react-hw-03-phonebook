export const Filter = ({ onChangeFilter }) => (
  <>
    <p className='text-white'>Find contacts by name or by number</p>
    <input type='text' onChange={({ target: { value } }) => onChangeFilter(value)} />
  </>
);
