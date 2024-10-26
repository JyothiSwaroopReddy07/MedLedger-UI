import NavBar from '../components/NavBar';
import CaseForm from './CaseForm'


export default function ResidentDashboardForm() {

  return (
    <>
      <div className="min-h-full">
        <NavBar/>
        <main>
          <CaseForm />
        </main>
      </div>
    </>
  )
}
