import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import AppHeader from './components/app-header';

function WhoAmI({name, surname, link}) {
    return (
        <>
            <h1>My name is {name}, surname - {surname}</h1>
            <a href={link}> My profile</a>
        </>
    )
}

const All = () => {
	return (
		<>
			<WhoAmI name="Jhon" surname="Smith" link="facebook.com" />
			<WhoAmI name="Ivan" surname="Smith" link="vk.com" />
			<WhoAmI name="Alex" surname="Smith" link="facebook.com" />
		</>
	)
}

ReactDOM.render(<All/>, document.getElementById('root'));

