const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    try {
        if (!date) {
            return 'Unable to determine the time of year!';
        }

        if (
            typeof date === 'object' &&
            date !== null &&
            typeof date.getTime === 'function' &&
            !isNaN(date)
        ) {
            const month = Number(date.getMonth()) + Number(1);
            switch (month) {
                case 3:
                case 4:
                case 5:
                    return 'spring';
                case 6:
                case 7:
                case 8:
                    return 'summer';
                case 9:
                case 10:
                case 11:
                    return 'autumn';
                default:
                    return 'winter';
            }
        }
    } catch (e) {
        throw new Error('Invalid date!');
    }
}

module.exports = {
    getSeason,
};
