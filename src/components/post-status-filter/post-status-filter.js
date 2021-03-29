import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {

	constructor(props) {
		super(props);
		this.buttons = [
			{ name: 'all', label: 'Все' },
			{ name: 'like', label: 'Понравилось' }
		];
	}



	render() {
		const btns = this.buttons.map(({ name, label }) => {
			const { filter, onFilterSelect } = this.props;
			const active = filter === name;
			return (
				<Button key={name}
					outline={!active}
					color={active ? "info" : "secondary"}
					onClick={() => onFilterSelect(name)}
				>
					{label}
				</Button>
			);
		});

		return (
			<div className="btn-group ml-1" >
				{btns}
			</div>
		);
	}

};

