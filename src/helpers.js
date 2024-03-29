import moment from 'moment';

// checkOverdue and checkDueTodayTomorrow share these variables
let today = moment();
let tomorrow = moment().add(1, 'days');

// checks whether dueDate is before today
export function checkOverdue(todo) {
  let isOverdue = false;
  // including 'day' as the second parameter lets moment calculate day instead of millisecond
  if (!todo.completed && moment(todo.date, 'MM-DD-YYYY').isBefore(today, 'day')) {
    isOverdue = true;
  }
  // return here so that a value is returned whether t or f
  return isOverdue;
}

export function checkDueTodayTomorrow(todo) {
  let isDueTodayTomorrow = false;
  // no need to separate if you use parenthesis
  if (!todo.completed && (moment(todo.date).isSame(today, 'day') || moment(todo.date).isSame(tomorrow, 'day'))) {
    isDueTodayTomorrow = true;
  }

  return isDueTodayTomorrow;
}