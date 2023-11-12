import { useDispatch } from 'react-redux'
import { changeFilter } from '~/redux/filterSlice'

export const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = e => dispatch(changeFilter(e.target.value))

  return (
    <>
      <h2 className='mb-5 mt-10 text-center text-4xl'>Find contacts</h2>
      <input
        type='text'
        className='mx-auto mb-6 block h-9 rounded p-2 placeholder:text-sm text-black'
        placeholder='Find someone..'
        onChange={handleChange}
      />
    </>
  )
}
