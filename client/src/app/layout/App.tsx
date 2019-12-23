import React, { useState , useEffect, Fragment} from 'react';
import { Header, Icon, List, Container } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities.filter(a => a.id === id)[0])
    }

    useEffect(() => {
        axios.get<IActivity[]>('http://localhost:5000/api/activities')
            .then((response) => {
                setActivities(response.data)
            })
    },[]); //[] provides the same functionality with componentDidMounth.. 


    return (
        <Fragment>
                <NavBar />
            <Container style={{ marginTop: '5em' }}>
                <ActivityDashboard activities={activities} selectActivity={handleSelectActivity} selectedActivity={selectedActivity!} />
                </Container>  

        </Fragment>
        );
    
  
}

export default App;
