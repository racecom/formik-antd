import { __rest } from "tslib";
import { TimePicker as $TimePicker } from 'antd';
import * as React from 'react';
import moment from 'moment';
import Field from '../field';
export const TimePicker = (_a) => {
    var { name, validate, fast, onChange, keepOffset } = _a, restProps = __rest(_a, ["name", "validate", "fast", "onChange", "keepOffset"]);
    return (React.createElement(Field, { name: name, validate: validate, fast: fast }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (React.createElement($TimePicker, Object.assign({ value: value ? moment(value) : undefined, onChange: (time, timeString) => {
            setFieldValue(name, time ? time.toISOString(keepOffset) : null);
            setFieldTouched(name, true, false);
            onChange && onChange(time, timeString);
        } }, restProps)))));
};
export default TimePicker;
//# sourceMappingURL=index.js.map