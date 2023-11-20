export const Error = ({ error }) =>
  error && (
    <p className='text-center text-2xl mb-5 p-10'>We're sorry, but something went wrong. Please try again.</p>
  )

export const RequestError = ({ error, type }) => {
  return type === 'login'
    ? error && <small className='p-error'>Please ensure you have entered email or password correct.</small>
    : error && <small className='p-error'>A user with the same email already exists.</small>
}

export const ErrorInputMessage = ({ errors, field }) =>
  errors[field] && <small className='p-error mt-1'>{errors[field]?.message}</small>
