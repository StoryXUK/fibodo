/**
 * downCount: Simple Countdown clock with offset
 * Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
 * Modified for 1 July 2025 countdown
 */

(function ($) {

    $.fn.downCount = function (options, callback) {
        var settings = $.extend({
            date: null,
            offset: null
        }, options);

        // Throw error if date is not set
        if (!settings.date) {
            $.error('Date is not defined.');
        }

        // Throw error if date is set incorrectly
        if (!Date.parse(settings.date)) {
            $.error('Incorrect date format, it should look like this: 2025-07-01T00:00:00.');
        }

        // Save container
        var container = this;

        /**
         * Get current date adjusted for offset
         */
        var currentDate = function () {
            var date = new Date();
            var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
            var new_date = new Date(utc + (3600000 * settings.offset));
            return new_date;
        };

        /**
         * Countdown logic
         */
        function countdown() {
            var target_date = new Date(settings.date),
                current_date = currentDate();

            var difference = target_date - current_date;

            if (difference < 0) {
                clearInterval(interval);
                if (callback && typeof callback === 'function') callback();
                return;
            }

            var _second = 1000,
                _minute = _second * 60,
                _hour = _minute * 60,
                _day = _hour * 24;

            var days = Math.floor(difference / _day),
                hours = Math.floor((difference % _day) / _hour),
                minutes = Math.floor((difference % _hour) / _minute),
                seconds = Math.floor((difference % _minute) / _second);

            days = (String(days).length >= 2) ? days : '0' + days;
            hours = (String(hours).length >= 2) ? hours : '0' + hours;
            minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
            seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

            var ref_days = (days === '01') ? 'day' : 'days',
                ref_hours = (hours === '01') ? 'hour' : 'hours',
                ref_minutes = (minutes === '01') ? 'minute' : 'minutes',
                ref_seconds = (seconds === '01') ? 'second' : 'seconds';

            container.find('.days').text(days);
            container.find('.hours').text(hours);
            container.find('.minutes').text(minutes);
            container.find('.seconds').text(seconds);

            container.find('.days_ref').text(ref_days);
            container.find('.hours_ref').text(ref_hours);
            container.find('.minutes_ref').text(ref_minutes);
            container.find('.seconds_ref').text(ref_seconds);
        }

        // Start countdown
        var interval = setInterval(countdown, 1000);
    };

})(jQuery);

// Initialize the countdown on page ready
$(document).ready(function () {
    $('.countdown-main').downCount({
        date: '2025-09-04T00:00:00',
        offset: 1 // UK local time (BST in summer)
    });
});

