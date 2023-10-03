import React from 'react'
import styles from './Comments.module.scss'
import AddComment from './addComment'




interface Props {
  deviceID: number,
  comments: {
    id: number,
      attributes: {
        text: string,
        users_permissions_user: {
          data: {
            attributes: {
              username: string
            }
          }
        }
      }
    }[]
  }


const Comments:React.FC<Props> = async ({deviceID, comments}) => {


  
  return (
    <div className={styles.root} >
      <div className={styles.input} > 
      <div className={styles.inputTitle} >Оставить отзыв:</div>
       <AddComment deviceID={deviceID} />
        <div className={styles.title} >
            Отзывы:
        </div>
      </div>
          {comments.map((item)=> {
            const username = item?.attributes?.users_permissions_user?.data.attributes.username;
            console.log(username)
            return <div key={item.id} className={styles.comment}>
               <div className={styles.userName}>{username}:</div>
               <div>{item?.attributes?.text}</div>
               </div>
          })}
    
    </div>
  )
}

export default Comments