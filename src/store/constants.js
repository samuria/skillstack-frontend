export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const SET_ACTIVE_PERIOD = 'SET_ACTIVE_PERIOD';
export const SET_AVAILABLE_LOCATIONS = 'SET_AVAILABLE_LOCATIONS';
export const JOB_TYPE_MAP = {
  0: 'Full time',
  1: 'Full time',
  2: 'Part time',
  3: 'Internship',
  4: 'Freelance'
};
export const PERIODS = [
  { type: 'daily', text: 'Today', slug: 'today' },
  { type: 'weekly', text: 'This week', slug: 'week' },
  { type: 'monthly', text: 'This month', slug: 'month', isDefault: true }
];
export const JOB_TYPES_FOR_DROPDOWN = [
  {
    id: 1,
    text: 'Full time'
  },
  {
    id: 2,
    text: 'Part time'
  },
  {
    id: 3,
    text: 'Intern'
  },
  {
    id: 4,
    text: 'Casual'
  },
  {
    id: 5,
    text: 'Freelance'
  }
];
