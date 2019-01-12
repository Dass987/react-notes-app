import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
	constructor(props) {
		super(props);
		this.noteId = props.noteId;
		this.noteContent = props.noteContent;
	}

	handleRemove(id) {
		console.log(id);
		const response = window.confirm('¿Estás seguro de eliminar la nota?');
		if (response) {
			this.props.removeNote(id);
		}
		return;
	}

	render() {
		return(
			<div className="Note">
				<span className="btnClose" onClick={() => this.handleRemove(this.noteId)}>&times;</span>
				<p>{this.noteContent}</p>
			</div>
		);
	}
}

export default Note;