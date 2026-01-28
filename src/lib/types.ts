export interface GitHubUser {
  login: string
  avatar_url: string
  name: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
  html_url: string
  created_at: string
}
export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics: Array<string>
  license: {
    spdx_id: string
  } | null
}
export interface APIError {
  message: string
  status: number
  documentation_url?: string
}
