import { ColorRing } from 'react-loader-spinner'

export const Loader = () => (
  <ColorRing
    height='100'
    width='100'
    ariaLabel='blocks-loading'
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
)
