import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSeteActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSeteActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        //TODO: llegar al backend
        //TODO: salio bien
        if (calendarEvent._id) {
            //Actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }));
        } else {
            // Creando
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
        }
    }

    const startDeletingEvent = () => {
        //TODO: llegar al backend
        dispatch(onDeleteEvent());
    }

    return {
        //* Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //* Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }

}
