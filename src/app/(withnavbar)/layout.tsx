import SideNav from "@/component/shared/SideNav/SideNav"
import "@/css/AppLayout/AppLayout.css"
import { Toaster} from 'sonner'



const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <>
        <SideNav />
        <div className="app-body">
          <div className="app-contents">
            {children}
          </div>
        </div>
        <Toaster position="top-center" />
    </>
  )
}

export default layout