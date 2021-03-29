import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
	return (
		<div className="btn-group ml-1">
			<button
				className="btn btn-outline-secondary"
				type='submit'>
				Все
			</button>
			<button
				className="btn btn-outline-secondary"
				type='submit'>
				Понравилось
			</button>
		</div>
	);
};

export default PostStatusFilter;