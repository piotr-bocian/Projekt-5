import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers'

const SelectDateTime = ({ onChangeDate, labelDate, valueDate, idDate, minDate, maxDate, onChangeTime, labelTime, valueTime, idTime}) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
            />
            <TimePicker
                inputVariant='outlined'
                id={idTime}
                label={labelTime}
                onChange={onChangeTime}
                value={valueTime}
                minutesStep={15}
                ampm={false}
                minTime={new Date(0, 0, 0, 9)}
                maxTime={new Date(0, 0, 0, 17)}
            />
        </MuiPickersUtilsProvider>
    );
};

export default SelectDateTime;