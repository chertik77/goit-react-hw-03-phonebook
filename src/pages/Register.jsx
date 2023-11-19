import { useNavigate } from 'react-router-dom'
import { useCreateNewUserMutation } from 'redux/services'

const Register = () => {
  const navigate = useNavigate()
  const [createNewUser] = useCreateNewUserMutation()

  const onSubmit = async e => {
    e.preventDefault()
    const { name, email, password } = e.target.elements
    try {
      await createNewUser({ name: name.value, email: email.value, password: password.value })
      navigate('/contacts')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div class='relative flex flex-col bg-purple-900 h-112 w-100 overflow-hidden rounded-lg shadow-lg'>
        <form class='flex flex-col space-y-3 p-6' onSubmit={onSubmit}>
          <label
            for='chk'
            class='text-white text-2xl font-bold justify-center flex cursor-pointer transition-all duration-500'>
            Log in
          </label>
          <input
            class='w-full h-10 text-sm bg-gray-200 p-2 mt-4 border-none outline-none rounded-md'
            type='email'
            name='email'
            placeholder='Email'
            required
          />
          <input
            class='w-full h-10 text-sm bg-gray-200 p-2 mt-4 border-none outline-none rounded-md'
            type='password'
            name='pswd'
            placeholder='Password'
            required
          />
          <button class='w-2/3 h-10 mt-4 mb-10 text-white bg-purple-700 text-sm font-bold border-none rounded-md cursor-pointer transition-all duration-200 hover:bg-purple-800 mx-auto'>
            Log in
          </button>
        </form>
        <form class='flex flex-col space-y-3 p-6 bg-gray-200 rounded-lg transition-all duration-800'>
          <label
            for='chk'
            class='text-purple-700 text-2xl font-bold justify-center flex cursor-pointer transition-all duration-500'>
            Register
          </label>
          <input
            class='w-full h-10 text-sm bg-gray-200 p-2 mt-4 border-none outline-none rounded-md'
            type='text'
            name='txt'
            placeholder='Username'
            required
          />
          <input
            class='w-full h-10 text-sm bg-gray-200 p-2 mt-4 border-none outline-none rounded-md'
            type='email'
            name='email'
            placeholder='Email'
            required
          />
          <input
            class='w-full h-10 text-sm bg-gray-200 p-2 mt-4 border-none outline-none rounded-md'
            type='password'
            name='pswd'
            placeholder='Password'
            required
          />
          <button class='w-2/3 h-10 mt-4 mb-10 text-white bg-purple-700 text-sm font-bold border-none rounded-md cursor-pointer transition-all duration-200 hover:bg-purple-800 mx-auto'>
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
