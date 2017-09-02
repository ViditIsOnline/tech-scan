const BASE_URL = 'https://api.github.com/';
const USER_URL = BASE_URL + 'users/';

export const URLs = {
    repos: BASE_URL + 'search/repositories',
    user: (user) => USER_URL + `${user}`,
    userRepos: (user) => USER_URL + `${user}/repos`,
    starredRepos: (user) => USER_URL + `${user}/starred`,
    followers: (user) => USER_URL + `${user}/followers`,
    following: (user) => USER_URL + `${user}/following`,
};

export const ROWS_PER_VIEW = 9;
