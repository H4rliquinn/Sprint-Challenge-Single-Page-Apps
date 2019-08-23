import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from 'react-router-dom'

// const panes = [
//     { menuItem: { key: 'Home', icon: 'home', content: 'Home'}, render: () => <Tab.Pane><WelcomePage/></Tab.Pane> },
//     { menuItem: { key: 'Characters', icon: 'users', content: 'Characters' }, render: () => <Tab.Pane><CharacterList/></Tab.Pane> },
//     { menuItem: { key: 'Locations', icon: 'location arrow', content: 'Locations' }, render: () => <Tab.Pane><LocationsList/></Tab.Pane> },
//     { menuItem: { key: 'Episodes', icon: 'video', content: 'Episodes' }, render: () => <Tab.Pane><EpisodeList/></Tab.Pane> },
//     ]

const TabNav = () =>{
    return(
        <Menu tabular>
            <Menu.Item as={NavLink} exact={true} to="/">
            <Icon name='home' />Home
            </Menu.Item>
            <Menu.Item as={NavLink} to="/characters">
            <Icon name='users' />Characters
            </Menu.Item>
            <Menu.Item as={NavLink} to="/locations">
            <Icon name='location arrow' />Locations
            </Menu.Item>
            <Menu.Item as={NavLink} to="/episodes">
            <Icon name='video' />Episodes
            </Menu.Item>
        </Menu>
    ) 
}

// const TabNav = () => <Tab panes={panes} />

    export default TabNav;

