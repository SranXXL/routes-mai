import conversion from './conversion';

const MINS_IN_HOUR = 60;

const formattedTime = (time) => {
    const hours = (time - (time % MINS_IN_HOUR)) / MINS_IN_HOUR;
    const mins = time % MINS_IN_HOUR;
    let result = '';

    if (hours !== 0) {
        result += `${hours} ${conversion(hours, ['час', 'часа', 'часов'])} `;
    }
    if (mins !== 0) {
        result += `${mins} ${conversion(mins, ['минута', 'минуты', 'минут'])}`;
    }

    return result;
};

export default formattedTime;
