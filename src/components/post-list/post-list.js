import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';


const PostList = ({
	posts,
	onDelete,
	onToggleImportant,
	onToggleLiked }) => {
	const elements = posts.map(item => {
		const { id, ...itemProps } = item;

		return (
			<li key={id} className='list-group-item'>
				<PostListItem {...itemProps}
					onDelete={() => onDelete(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleLiked={() => onToggleLiked(id)}
				/>
			</li>
		);
	});



	return (
		<ListGroup className="app-list">
			{elements.length > 0 ? elements : <h2 className="text-center">Постов пока нет!</h2>}
		</ListGroup>
	);
};

export default PostList;