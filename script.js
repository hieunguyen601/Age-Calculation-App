const dayElement = document.querySelector('#day');
const monthElement = document.querySelector('#month');
const yearElement = document.querySelector('#year');

const invalidDayElement = document.querySelector('.invalid-day');
const invalidMonthElement = document.querySelector('.invalid-month');
const invalidYearElement = document.querySelector('.invalid-year');

function validNumbers() {
    let valid = true;

    const dayValue = parseInt(dayElement.value, 10);
    const monthValue = parseInt(monthElement.value, 10);
    const yearValue = parseInt(yearElement.value, 10);

    if (isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
        invalidDayElement.innerHTML = "Must be a valid day";
        valid = false;
    } else {
        invalidDayElement.innerHTML = '';
    }

    if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
        invalidMonthElement.innerHTML = "Must be a valid month";
        valid = false;
    } else {
        invalidMonthElement.innerHTML = '';
    }

    if (isNaN(yearValue) || yearValue > 2025) {
        invalidYearElement.innerHTML = "Must be in the past";
        valid = false;
    } else {
        invalidYearElement.innerHTML = '';
    }

    return valid;
}

const dayNumber = document.querySelector('.day-number');
const monthNumber = document.querySelector('.month-number');
const yearNumber = document.querySelector('.year-number');

function ageCalculation() {
    const day = parseInt(dayElement.value, 10);
    const month = parseInt(monthElement.value, 10) - 1;
    const year = parseInt(yearElement.value, 10);

    const birthDate = new Date(year, month, day);
    const today = new Date();

    if (isNaN(birthDate.getTime()) || birthDate > today) {
        yearNumber.innerHTML = '--';
        monthNumber.innerHTML = '--';
        dayNumber.innerHTML = '--';
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Calculate total days difference
    const diffTime = today - birthDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    yearNumber.innerHTML = years >= 0 ? years : '--';
    monthNumber.innerHTML = months >= 0 ? months : '--';
    dayNumber.innerHTML = diffDays >= 0 ? diffDays : '--';
}

const calculateButton = document.querySelector('.calculate-button');

calculateButton.addEventListener('click', () => {
    if (validNumbers()) {
        ageCalculation();
    }
});

function handleInputKeydown(event) {
    if (event.key === 'Enter') {
        if (validNumbers()) {
            ageCalculation();
        } else {
            event.preventDefault();
            // Optionally, you can focus the first invalid input for better UX
            if (parseInt(dayElement.value, 10) < 1 || parseInt(dayElement.value, 10) > 31) {
                dayElement.focus();
            } else if (parseInt(monthElement.value, 10) < 1 || parseInt(monthElement.value, 10) > 12) {
                monthElement.focus();
            } else if (parseInt(yearElement.value, 10) > 2025) {
                yearElement.focus();
            }
        }
    }
}

[dayElement, monthElement, yearElement].forEach(input => {
    input.addEventListener('keydown', handleInputKeydown);
});

const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
    dayElement.value = '';
    monthElement.value = '';
    yearElement.value = '';

    invalidDayElement.innerHTML = '';
    invalidMonthElement.innerHTML = '';
    invalidYearElement.innerHTML = '';

    yearNumber.innerHTML = '--';
    monthNumber.innerHTML = '--'; 
});