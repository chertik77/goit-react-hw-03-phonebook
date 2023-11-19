import 'primeicons/primeicons.css'
import { ScrollTop } from 'primereact/scrolltop'
import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
// import { AppBar } from './AppBar'

export const Layout = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster />
      <ScrollTop
        className='w-2rem h-2rem border-round-md bg-white text-black'
        icon='pi pi-chevron-up text-black'
      />
    </div>
  )
}
