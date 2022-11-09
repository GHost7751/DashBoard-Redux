import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { removeFilter,clearFilter,selectorFilter } from './filter-slice.js';

const FilterPanel = () => {
  const currentFilter = useSelector(selectorFilter)
  const dispatch = useDispatch()

  if ( currentFilter === 0 ){
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
        {
          currentFilter.map(filter => 
            <Badge 
            key={filter}
            onClear={() => dispatch(removeFilter(filter))}
            variant="clearable"
            >{filter}</Badge>)
        }
        </Stack>

        <button 
        className='link'
        onClick={() => dispatch(clearFilter)}
        >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};