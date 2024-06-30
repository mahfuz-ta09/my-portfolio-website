import SideNav from "@/component/shared/SideNav/SideNav"
import "@/css/AppLayout/AppLayout.css"
import { Toaster} from 'sonner'


const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="app-holder">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="window">
          {/* <div className="nav"> */}
            <SideNav />
          {/* </div> */}
          <div className="childCnt">
            {children}
          </div>
        </div>
        <Toaster position="top-center" />
    </div>
  )
}

export default layout