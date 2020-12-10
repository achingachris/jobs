import React, { useState } from 'react'
import { Container, Spinner, Button } from 'react-bootstrap'

// components
import useFetchJobs from './components/useFetchJobs'
import Job from './components/Job'
import JobsPagination from './components/JobsPagination'
import SearchForm from './components/SearchForm'
import Header from './components/Header'

const App = () => {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  const handleParamChange = (e) => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams((prevParams) => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <>
      <Header />
      <Container className='my-4'>
        <h1 className='mb-4'>Developer Jobs</h1>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
        {loading && (
          <Button
            variant='outline-success'
            disabled
            size='lg'
            block
            className='mb-3'
          >
            <Spinner
              as='span'
              animation='grow'
              variant='success'
              size='sm'
              role='status'
              aria-hidden='true'
            />
            Gathering Avaliable Jobs
          </Button>
        )}
        {error && (
          <Button variant='outline-warning' size='lg' block className='mb-3'>
            <p>sorry, kindly refresh or check your internet connection</p>
          </Button>
        )}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />
        })}
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </Container>
    </>
  )
}

export default App
