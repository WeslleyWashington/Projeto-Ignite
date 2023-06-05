import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/WeslleyWashington.png',
      name: 'Weslley Washington',
      role: 'Dev Front-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala Meu Povo!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
    ],
    publishedAt: new Date('2023-06-05 07:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/WeslleyWashington.png',
      name: 'Matheus Nascimento',
      role: 'Dev Fullstack Pleno'
    },
    content: [
      { type: 'paragraph', content: 'Fala Meu Povo!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
    ],
    publishedAt: new Date('2023-06-04 12:00:00')
  },

  {
    id: 3,
    author: {
      avatarUrl: 'https://www.linkedin.com/in/joaov1ct0r/overlay/photo',
      name: 'João Victor',
      role: 'Dev Fullstack'
    },
    content: [
      { type: 'paragraph', content: 'Fala Meu Povo!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
    ],
    publishedAt: new Date('2023-06-03 20:00:00')
  },
];


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />,

              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />,
              
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div> 
    
    
  )
}




