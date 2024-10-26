import SupervisiorDashBoard from './SupervisiorDashBoard'
import NavBar from '../components/NavBar'

export default function ResidentDashboardHistory() {

  return (
    <>
      <div className="min-h-full">
      
        <NavBar/>
        <main>
          <SupervisiorDashBoard />
        </main>
      </div>
    </>
  )
}
