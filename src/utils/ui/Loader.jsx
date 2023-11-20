import { ColorRing } from 'react-loader-spinner'

export const Loader = ({ isLoading }) => (
  <ColorRing
    visible={isLoading}
    height='100'
    width='100'
    ariaLabel='blocks-loading'
    wrapperClass='blocks-wrapper mx-auto'
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
)
