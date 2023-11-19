export const Error = ({ error }) =>
  error && (
    <p className='text-center text-2xl mb-5 p-10'>We're sorry, but something went wrong. Please try again.</p>
  )

export const RequestError = ({ error }) =>
  error && <small className='p-error'>Please ensure you have entered email or password correct.</small>
