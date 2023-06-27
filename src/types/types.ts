export interface iGithubProject {
	name: string;
	description: string;
	url: string;
	stars: number;
	forks: number;
	watchers: number;
}

export interface Repo {
	id: number;
	name: string;
	full_name: string;
	description: string;
	html_url: string;
	language: string;
	stargazers_count: number;
	forks_count: number;
	watchers_count: number;
	created_at: string;
	updated_at: string;
}
