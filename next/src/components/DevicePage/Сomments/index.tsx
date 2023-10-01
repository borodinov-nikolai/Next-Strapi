import React from 'react'
import styles from './Comments.module.scss'

const Comments = () => {
  return (
    <div className={styles.root} >
        <div className={styles.title} >
            Комментарии:
        </div>
        <div className={styles.comment} >
          <div className={styles.userName}>User:</div> <div className={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias ipsam odit similique in voluptatibus impedit hic asperiores fugiat natus voluptate nam possimus ex quae officia, nulla sunt. Nemo, laudantium.</div>
        </div>
        <div className={styles.comment} >
          <div className={styles.userName}>User:</div> <div className={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias ipsam odit similique in voluptatibus impedit hic asperiores fugiat natus voluptate nam possimus ex quae officia, nulla sunt. Nemo, laudantium.</div>
        </div>
        <div className={styles.comment} >
          <div className={styles.userName}>User:</div> <div className={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias ipsam odit similique in voluptatibus impedit hic asperiores fugiat natus voluptate nam possimus ex quae officia, nulla sunt. Nemo, laudantium.</div>
        </div>
    
    </div>
  )
}

export default Comments