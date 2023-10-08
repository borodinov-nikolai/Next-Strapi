"use client";
import React from "react";
import { Button, Input } from "antd";
import styles from "./addComment.module.scss";
import { addComment, removeComment } from "@/services/clientApi";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { TextArea } = Input;

interface Props {
  deviceID: number,
  comments:any,
  user: any
}

const AddComment: React.FC<Props> = ({deviceID, comments, user}) => {
   const[commentText, setCommentText] = React.useState<string>('');
   const[edit, setEdit] = React.useState<boolean>(false);
   const router = useRouter();
   const userComment = comments?.find((item:any)=> item?.attributes?.users_permissions_user?.data?.id === user?.id)

   const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCommentText(e.target.value);
  };
  
  if(!user?.id) {
    return <div>Авторизуйтесь чтобы оставлять отзывы</div>
  } 

  if(userComment && !edit) {
    return (<div className={styles.root}>
      <div>Ваш отзыв:</div>
      <div className={styles.comment} >
        <div className={styles.userName} >{user.username}:</div>
         <div>{userComment.attributes.text}</div>
         <Button onClick={()=>setEdit(true)} className={styles.editBtn} ><EditOutlined /></Button>
         <Button onClick={()=>{removeComment(deviceID, user.id, router)}} className={styles.deleteBtn} ><DeleteOutlined /></Button>
         </div>
    </div>)
  }
    return (
      <div className={styles.root}>
          <div className={styles.inputTitle} >Оставить отзыв:</div>
        <TextArea
          className={styles.textArea}
          size="large"
          showCount
          maxLength={200}
          onChange={onChange}
          defaultValue={userComment?.attributes.text}
         
        />
        <Button onClick={()=> {addComment(commentText, deviceID, user.id, router );setEdit(false)}} className={styles.button}>Отправить</Button>
      </div>)
  

};

export default AddComment;
