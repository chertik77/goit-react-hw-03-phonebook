export const RequestError = ({ error, type }) => {
  return type === 'login'
    ? error && (
        <small className='p-error'>You have entered email or password incorrect, please try again.</small>
      )
    : error && <small className='p-error'>A user with the same email already exists, please try again.</small>
}
