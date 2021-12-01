/* global VK */
import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import bridge from '@vkontakte/vk-bridge';


 
var timesClicked = 0;

const Home = ({ id, go, fetchedUser,werter, qwert1}) => (
	<Panel id={id}>
		<PanelHeader>Самый простой кликер</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Div>Добро пожаловать!</Div>
		</Group>}
		<Group title="Navigation Example">
			<Div align="center" id="timesClicked">0</Div>
			
			<Div>
				<Button onClick={function werter() {
	bridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
.then(data => console.log(data.result))
.catch(error => console.log(error));
timesClicked+=40;
    
    document.getElementById('timesClicked').innerHTML = timesClicked;
    return true 
}}>
					БОНУС КЛИК(+40)
				</Button>
			</Div>
			
			<Div> 
				<Button size="xl" level="2" onClick={function qwertyyy() {


    timesClicked ++;     
    document.getElementById('timesClicked').innerHTML = timesClicked;
    return true 
}

				}>
				 клик
				</Button>
			</Div>
		</Group>






	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;

