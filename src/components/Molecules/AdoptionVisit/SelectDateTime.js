import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers'
import { pl } from 'date-fns/locale';

const SelectDateTime = ({ onChangeDate, labelDate, valueDate, idDate, minDate, maxDate, onChangeTime, labelTime, valueTime, idTime, error, helperText}) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pl}>
            <DatePicker 
                disableToolbar
                inputVariant='outlined'
                id={idDate}
                format='dd/MM/yyyy'
                label={labelDate}
                onChange={onChangeDate}
                value={valueDate}
                minDate={minDate}
                maxDate={maxDate}
                cancelLabel="Anuluj"
            />
            <TimePicker
                inputVariant='outlined'
                id={idTime}
                label={labelTime}
                onChange={onChangeTime}
                value={valueTime}
                minutesStep={15}
                ampm={false}
                cancelLabel="Anuluj"
                error = {error}
                helperText = {helperText ? helperText : 'Schronisko działa w godzinach 09:00-16:00'}
            />
        </MuiPickersUtilsProvider>
    );
};

export default SelectDateTime;