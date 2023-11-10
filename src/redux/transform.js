import createTransform from 'redux-persist/es/createTransform'

export const contactsTransform = createTransform(
  inboundState => inboundState.items,
  outboundState => ({ items: outboundState })
)
