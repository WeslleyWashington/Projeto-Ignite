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
        </article>
    )

}