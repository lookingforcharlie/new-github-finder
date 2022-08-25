import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Create an instance of axios, we can call this whatever we want.
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  // In axios, we don't need to do 'await res.json()' like we do with fetch api. This will give us the response, including JASON data, and it's gonna in an object called 'data'
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// One single function for both 'Get a single user' and 'get user repos'
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
