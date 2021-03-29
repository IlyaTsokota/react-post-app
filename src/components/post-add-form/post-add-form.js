import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.onValueChanged = this.onValueChanged.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	onValueChanged(e) {
		this.setState({
			text: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const { text } = this.state;
		if (text !== '') {
			this.props.onAdd(this.state.text);
			this.setState({
				text: ''
			});
		}
	}

	render() {
		return (
			<form
				className="bottom-panel d-flex"
				onSubmit={this.onSubmit}>
				<input
					className="form-control new-post-label"
					type="text"
					placeholder="О чем вы думаете сейчас?"
					onChange={this.onValueChanged}
					value={this.state.text}
				/>
				<button
					className="btn btn-outline-secondary"
					type='submit'
				>
					Добавить
				</button>
			</form>
		);
	}

};

