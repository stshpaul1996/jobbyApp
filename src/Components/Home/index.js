import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onRedirectToJob = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="home-paragraph">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that your abilities are potential.
        </p>
        <Link className="retry-btn-lnk" to="/jobs">
          <button
            className="home-jobs-button"
            type="button"
            onClick={onRedirectToJob}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
