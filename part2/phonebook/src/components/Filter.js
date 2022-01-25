import React from 'react';

const Filter = ({ filterValue, handleFilterChange }) => (
	<div>
		<div>filter shown with <input value={filterValue} onChange={handleFilterChange} /></div>
	</div>
)

export default Filter;