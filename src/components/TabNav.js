import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import CharacterList from './CharacterList.js';
import LocationsList from "./LocationsList.js";
import EpisodeList from "./EpisodeList.js";
import WelcomePage from "./WelcomePage.js";
import { NavLink } from 'react-router-dom'

const panes = [
    { menuItem: { key: 'Home', icon: 'home', content: 'Home' }, render: () => <Tab.Pane><WelcomePage/></Tab.Pane> },
    { menuItem: { key: 'Characters', icon: 'users', content: 'Characters' }, render: () => <Tab.Pane><CharacterList/></Tab.Pane> },
    { menuItem: { key: 'Locations', icon: 'location arrow', content: 'Locations' }, render: () => <Tab.Pane><LocationsList/></Tab.Pane> },
    { menuItem: { key: 'Episodes', icon: 'video', content: 'Episodes' }, render: () => <Tab.Pane><EpisodeList/></Tab.Pane> },
    ]

    const TabNav = () => <Tab panes={panes} />

    export default TabNav;

