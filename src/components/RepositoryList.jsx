import { RepositoryItem } from './RepositoryItem';

export function ReporitoryList() {
  const repositoryUnform = {
    name: 'unform',
    description: 'About Performance-focused API for React forms rocket',
    link: 'https://github.com/unform/unform'
  }

  const repositoryReactNative = {
    name: 'react-native',
    description: 'A framework for building native apps with React.',
    link: 'https://github.com/facebook/react-native'
  }

  const repositoryReact = {
    name: 'react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    link: 'https://github.com/facebook/react'
  }

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem 
          repository={repositoryUnform}
        />
        <RepositoryItem 
          repository={repositoryReactNative}
        />
        <RepositoryItem 
          repository={repositoryReact}
        />          
      </ul>
    </section>
  )
}
