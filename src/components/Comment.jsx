import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/WeslleyWashington.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Weslley Washington</strong>

                            <time title='24 de maio as 17:20h' dateTime='2023-05-24 17:20:23'>Cerca de 1h Atrás</time>
                        </div>

                        <button title='Delet'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Dev, Parabéns!!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir <span>20</span>
                    </button>
                </footer>

            </div>  

        </div>
    )
}