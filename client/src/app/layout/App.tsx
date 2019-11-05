import React, { useState , useEffect} from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import NavBar from '../../features/nav/NavBar';

const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    useEffect(() => {
        axios.get<IActivity[]>('http://localhost:5000/api/activities')
            .then((response) => {
                setActivities(response.data)
            })
    },[]); //[] provides the same functionality with componentDidMounth.. 


        return (
            <div className="App">
                <NavBar />
                <Header as='h2'>
                    <Icon name='users' />
                    <Header.Content>Reactivities</Header.Content>
                </Header>
                <List>
                        {activities.map((activity) => (
                            <List.Item key={activity.id}>{activity.title}</List.Item>
                        ))}
                </List>
                   
               
            </div>
        );
    
  
}

export default App;
