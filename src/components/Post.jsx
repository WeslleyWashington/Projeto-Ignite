import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <img className={styles.avatar} src="https://github.com/WeslleyWashington.png" />
                    
                    <div className={styles.authorInfo}>

                        <strong>Weslley Washington</strong>
                        <span>Web Developer</span>
                    </div>

                    <time title='24 de maio as 17:20h' dateTime='2023-05-24 17:20:23'>Publicado a 1h</time>
                </div>
            </header>
            <div className={styles.content}>
                <p>Fala Meu Povo!</p>

                <p>Acabei de subir mais um projeto no meu portifólio. 
                    É um projeto que fiz no Ignite da Rocketseat. 
                    O nome do projeto é Ignite Feed 🚀                    
                </p>
                
                <p> 
                    <a href="">#novoprojeto</a> 
                    <a href="">#nlw</a> 
                    <a href=""> #rocketseat</a> 
                </p>



            </div>
        </article>
    )

}