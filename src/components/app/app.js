import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

// import style from './App.module.css';

// import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
	margin: 0 auto;
	max-width: 800px;
`;


export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [{
				label: 'Going to learn React',
				important: true,
				like: false,
				id: 1
			}, {
				label: 'That is so good',
				important: false,
				like: false,
				id: 2
			}, {
				label: 'I need a break...',
				important: false,
				like: false,
				id: 3
			}],
			term: '',
			filter: 'all'
		};

		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.switchStateDataByProperty = this.switchStateDataByProperty.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);

		this.maxId = 4;
	}

	deleteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);

			const newData = [...data.slice(0, index), ...data.slice(index + 1)];

			return {
				data: newData
			}
		});
	}

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++
		};

		this.setState(({ data }) => {
			const newData = [...data, newItem];

			return {
				data: newData
			}
		});
	}

	switchStateDataByProperty(property, id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);
			const old = data[index];
			old[property] = !old[property];

			const newArr = [...data.slice(0, index), old, ...data.slice(index + 1)];

			return {
				data: newArr
			}
		});
	}

	onToggleImportant(id) {
		this.switchStateDataByProperty('important', id);
	}

	onToggleLiked(id) {
		this.switchStateDataByProperty('like', id);
	}

	searchPost(items, term) {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item => item.label.indexOf(term) !== -1));
	}

	filterPost(items, filter) {
		if (filter === 'like') {
			return items.filter(item => item.like);
		}
		return items;
	}

	onUpdateSearch(term) {
		this.setState({ term });
	}

	onFilterSelect(filter) {
		this.setState({ filter });
	}

	render() {
		const { data, term, filter } = this.state;
		const liked = data.filter(item => item.like).length;
		const allPosts = data.length;

		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

		return (
			<AppBlock>
				<AppHeader
					liked={liked}
					allPosts={allPosts}
				/>
				<div className="search-panel d-flex">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch} />
					<PostStatusFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect} />
				</div>
				<PostList
					posts={visiblePosts}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
				/>
				<PostAddForm
					onAdd={this.addItem} />
			</AppBlock >
		);
	}

};
