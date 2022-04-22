import React from 'react';
import './frontpage.css';
import TitleBanner from './titleBanner';
import AddItemForm from './addItemForm';

export default function FrontPage(props) {

	return (
		<div class='grid-container'>
			<TitleBanner />
			<AddItemForm />
		</div>
	)
}