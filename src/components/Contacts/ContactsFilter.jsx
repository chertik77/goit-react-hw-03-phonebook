export const Filter = ({ onChange }) => (
  <>
    <h2 className='mb-5 mt-10 text-center text-4xl'>Find contacts</h2>
    <input
      type='text'
      className='mx-auto mb-6 block h-9 rounded p-2 placeholder:text-sm text-black'
      placeholder='Find someone..'
      onChange={e => onChange(e.target.value)}
    />
  </>
)
