import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../utils/metaAPI'

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes
}

const initializeTimes = initialAvailableTimes =>
    [...initialAvailableTimes, ...fetchAPI(new Date())]

export function Main() {
    const [
        availableTimes, dispatch
    ] = useReducer(updateTimes, [], initializeTimes)

    const navigate = useNavigate();

    const submitData = formData => {
        const response = submitAPI(formData);
        if (response) navigate('/about');
        
    }

    return (
        <>
            <h2>Table Reservation </h2>
            <BookingForm 
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitData={submitData}
            />
        </>
    )
}