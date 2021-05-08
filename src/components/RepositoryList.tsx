import { useCallback, useEffect, useState } from 'react';

import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

interface Reporitory {
  name: string;
  description: string;
  html_url: string;
}

// https://api.github.com/orgs/rocketseat/repos

export function ReporitoryList() {
  const [repositories, setRepositories] = useState<Reporitory[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem
            key={repository.name}
            repository={repository}
          />
        ))}       
      </ul>
    </section>
  )
}
