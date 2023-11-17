import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from 'redux/filterSlice'
import { selectFilter } from 'redux/selectors'

export const Filter = () => {
  const filterValue: string = useSelector(selectFilter)
  const dispatch = useDispatch()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeFilter(e.target.value))

  return (
    <>
      <h2 className='mb-5 mt-10 text-center text-4xl'>Find contacts</h2>
      <input
        type='text'
        value={filterValue}
        className='mx-auto mb-6 block h-9 rounded p-2 placeholder:text-sm text-black'
        placeholder='Find someone..'
        onChange={handleChange}
      />
    </>
  )
}
