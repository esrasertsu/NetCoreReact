import React, { useState } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity'

interface IProps {
    activity: IActivity;
    setEditMode: (editMode: boolean) => void;
}
const ActivityForm: React.FC<IProps> = ({ activity:initialFormState , setEditMode }) => {
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        } else {
            return {
                id:'',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            };
        }
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title' value={activity.title} />
                <Form.TextArea rows={2} placeholder='Description' value={activity.description} />
                <Form.Input placeholder='Category' value={activity.category} />
                <Form.Input type="date" placeholder='Date' value={activity.date} />
                <Form.Input placeholder='City' value={activity.city} />
                <Form.Input placeholder='Avenue' value={activity.venue}  />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='left' type='cancel' content='Cancel' onClick={() => setEditMode(false)} />
            </Form>
        </Segment>
        )
}

export default ActivityForm