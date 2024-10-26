import UserCases from './UserCases'
import NavBar from '../components/NavBar'

export default function ResidentDashboardHistory() {

  return (
    <>
      <div className="min-h-full">
      
        <NavBar/>
        <main>
          <UserCases/>
        </main>
      </div>
    </>
  )
}
