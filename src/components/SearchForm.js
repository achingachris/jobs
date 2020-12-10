import React from 'react'
import { Form, Col } from 'react-bootstrap'

const SearchForm = ({ params, onParamChange }) => {
  return (
    <Form className='mb-4'>
      <Form.Row className='align-items-end'>
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.description}
            name='description'
            type='text'
            placeholder='language, stack ...'
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.location}
            name='location'
            type='text'
            placeholder='remote, name of a place'
          />
        </Form.Group>
        <Form.Group as={Col} xs='auto' className='ml-2'>
          <Form.Check
            onChange={onParamChange}
            value={params.full_time}
            name='full_time'
            id='full-time'
            label='Only Full Time'
            type='checkbox'
            className='mb-2'
          />
        </Form.Group>
      </Form.Row>
    </Form>
  )
}

export default SearchForm
