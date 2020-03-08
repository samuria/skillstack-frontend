export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const SET_ACTIVE_PERIOD = 'SET_ACTIVE_PERIOD';
export const SET_AVAILABLE_LOCATIONS = 'SET_AVAILABLE_LOCATIONS';
export const SET_RECENT_POSTS = 'SET_RECENT_POSTS';
export const RECENT_POST_COUNT = 25;
export const JOB_TYPE_MAP = {
  0: 'Full Time',
  1: 'Full Time',
  2: 'Part Time',
  3: 'Internship',
  4: 'Freelance'
};
export const PERIODS = [
  { type: 'daily', text: 'Last 24 hours', slug: 'today' },
  { type: 'weekly', text: 'Last 7 days', slug: 'week' },
  { type: 'monthly', text: 'Last month', slug: 'month', isDefault: true }
];
export const JOB_TYPES_FOR_DROPDOWN = [
  {
    id: 1,
    text: 'Full Time'
  },
  {
    id: 2,
    text: 'Part Time'
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
