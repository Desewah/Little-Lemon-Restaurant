import { useState } from "react"
import "../App.css"

export default function BookingForm({
    availableTimes,
    dispatch,
    submitData
}) {
    const minDate = new Date().toISOString().split('T')[0];
    const defTime = availableTimes[0];
    const occasions = ['Birthday', 'Anniversary']

    const [date, setDate] = useState(minDate);
    const [time, setTime] = useState(defTime)
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState("occasion");

    const isFieldsValid = () => 
        date !== '' &&
        time !== '' &&
        guests >= 1 &&
        guests <= 10 &&
        occasion !== ''

    const handleDateChange = e => {
        setDate(e.target.value);
        dispatch(e.target.value);
    };

    const clearForm = () => {
        setDate(minDate);
        setTime(defTime);
        setGuests();
        setOccasion("occasion");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table successfully booked")
        submitData({date, time, guests, occasion})
        clearForm();
    };

    return (
        <div className="reservation">
            <form onSubmit={handleSubmit}>
                <fieldset>

                    <div className="Field">
                        <label htmlFor="res-date">
                            Choose Date <sup>*</sup>
                        </label>
                        <input
                            id="res-date"
                            type="date"
                            value={date}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="res-time">
                            Choose Time <sup>*</sup>
                        </label>
                        <select
                            id="res-time"
                            value={time}
                            onChange={(e) => {
                                setTime(e.target.value);
                            }}
                        >
                            {availableTimes.map(time => {
                                return (<option key={time}>{time}</option>);
                            })}
                        </select>
                    </div>
                    <div className="Field">
                        <label htmlFor="guests">
                            No of guests <sup>*</sup>
                        </label>
                        <input
                            id="guests"
                            type="number"
                            value={guests}
                            onChange={(e) => {
                                setGuests(e.target.value);
                            }}
                            placeholder="1"
                            min={1}
                            max={10}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="occasion">
                            Occasion <sup>*</sup>
                        </label>
                        <select 
                            id="occasion"
                            value={occasion}
                            onChange={(e) => {
                                setOccasion(e.target.value);
                            }}
                        >
                            {occasions.map(occasion => 
                                <option key={occasion}>
                                    {occasion}
                                </option>)}
                        </select>
                    </div>
                    
                    <button
                        type="submit"
                        onSubmit={handleSubmit}
                        disabled={!isFieldsValid()}
                    >
                        Make a reservation
                    </button>
                </fieldset>
            </form>
        </div>
    )
}