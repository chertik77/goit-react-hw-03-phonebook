import { disablePageScroll, enablePageScroll } from 'scroll-lock'

export const toggleSidebar = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--SideNavigation-slideIn')
    if (slideIn) {
      enablePageScroll()
      document.documentElement.style.removeProperty('--SideNavigation-slideIn')
    } else {
      disablePageScroll()
      document.documentElement.style.setProperty('--SideNavigation-slideIn', '1')
    }
  }
}
