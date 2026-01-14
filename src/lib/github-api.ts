import type { APIError, GitHubRepo, GitHubUser } from './types'

export async function fetchGithubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`)

  if (!response.ok) {
    const error: APIError = await response.json()
    throw new Error(error.message || 'Failed to fetch user data')
  }

  return response.json()
}

export async function fetchGithubRepos(
  username: string,
): Promise<Array<GitHubRepo>> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`,
  )

  if (!response.ok) {
    const error: APIError = await response.json()
    throw new Error(error.message || 'Failed to fetch repositories')
  }

  return response.json()
}
