import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Route,NavLink } from "react-router-dom";
import CharacterList from './CharacterList.js';
import LocationsList from "./LocationsList.js";
import EpisodeList from "./EpisodeList.js";
import WelcomePage from "./WelcomePage.js";

const panes = [
    { menuItem: 'Home', render: () => <Tab.Pane><WelcomePage/></Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList/></Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane><LocationsList/></Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane><EpisodeList/></Tab.Pane> },
    ]
    const TabNav = () => <Tab panes={panes} />

    export default TabNav;

