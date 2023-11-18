import { Confirm } from 'notiflix/build/notiflix-confirm-aio'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

export const showConfirmMessage = message => {
  disablePageScroll()
  return new Promise(resolve =>
    Confirm.show(
      'Adding the same user',
      message,
      'Yes',
      'No',
      () => {
        resolve()
        enablePageScroll()
      },
      () => {
        enablePageScroll()
      },
      {
        width: '350px',
        titleColor: '#212529',
        messageColor: '#212529',
        okButtonBackground: '#28a745',
        okButtonColor: '#FFFFFF',
        overlayColor: 'rgba(0,0,0,0.5)',
        borderRadius: '25px',
        fontFamily: 'Arial',
        buttonsFontSize: '16px',
        titleFontSize: '22px',
        messageFontSize: '16px',
        cancelButtonColor: '#FFFFFF',
        cancelButtonBackground: '#dc3545',
        animationDuration: 300,
        animationEffect: 'fadeIn'
      }
    )
  )
}
