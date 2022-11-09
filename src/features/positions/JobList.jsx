import {  useDispatch} from 'react-redux';
import { JobPosition } from './JobPosition';

import { addFilter } from '../filter/filter-slice.js';
import { usePositions } from './use-positions';
import { useFetchPositions } from './use-fetch-position';


const JobList = () => {
  useFetchPositions()

  const position = usePositions();
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {position.map(item => (
        <JobPosition 
        key={item.id}
        handleAddFilter={handleAddFilter} 
        {...item} />
      ))}
    </div>
  )
}

export {JobList};