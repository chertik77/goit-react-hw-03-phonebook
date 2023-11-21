import 'primeicons/primeicons.css'
import { ScrollTop } from 'primereact/scrolltop'
import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import { Loader } from 'utils/ui/Loader'

export const Layout = () => (
  <>
    <Suspense
      fallback={
        <div className='grid items-center justify-center h-screen'>
          <Loader />
        </div>
      }>
      <Outlet />
    </Suspense>
    <Toaster />
    <ScrollTop
      className='w-2rem h-2rem border-round-md bg-white text-black'
      icon='pi pi-chevron-up text-black'
    />
  </>
)
