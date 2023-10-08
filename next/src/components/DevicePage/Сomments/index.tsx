import React from 'react'
import styles from './Comments.module.scss'
import AddComment from './addComment'
import { getUser } from '@/services/serverApi'




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

  const user = await getUser()

  return (
    <div className={styles.root} >
      <div className={styles.input} > 
    
       <AddComment deviceID={deviceID} comments={comments} user = {user} />
       {comments.length > 0 && <div className={styles.title} >
            Отзывы:
        </div>}
      </div>
          {comments?.map((item)=> {
            const username = item?.attributes?.users_permissions_user?.data?.attributes?.username;
            return <div key={item.id} className={styles.comment}>
               <div className={styles.userName}>{username}:</div>
               <div>{item?.attributes?.text}</div>
               </div>
          })}
    
    </div>
  )
}

export default Comments