import React, { useState , useEffect, Fragment} from 'react';
import { Header, Icon, List, Container } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
    const [editMode, setEditMode] = useState(false);

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities.filter(a => a.id === id)[0])
    }

    const handleOpenCreateForm = () => {
        setSelectedActivity(null);
        setEditMode(true);
    }

    useEffect(() => {
        axios.get<IActivity[]>('http://localhost:5000/api/activities')
            .then((response) => {
                setActivities(response.data)
            })
    },[]); //[] provides the same functionality with componentDidMounth.. 


    return (
        <Fragment>
            <NavBar openCreateForm={handleOpenCreateForm} />
            <Container style={{ marginTop: '5em' }}>
                <ActivityDashboard activities={activities} selectActivity={handleSelectActivity}
                    selectedActivity={selectedActivity!} editMode={editMode} setEditMode={setEditMode} setSelectedActivity={setSelectedActivity} />
                </Container>  

        </Fragment>
        );
    
  
}

export default App;
