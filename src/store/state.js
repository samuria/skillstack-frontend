import { PERIODS } from './constants';

export default {
  isLoading: true,
  recentPosts: [],
  activePeriod: PERIODS.find((period) => period.isDefault).type,
  featuredPosts: [],
  allPosts: [],
  tags: [],
  availableLocations: [
    'Remote',
    'Adelaide',
    'Melbourne',
    'Sydney',
    'Brisbane',
    'Perth',
  ],
};
