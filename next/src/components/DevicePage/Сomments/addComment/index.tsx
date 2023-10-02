"use client";
import React from "react";
import { Button, Input } from "antd";
import styles from "./addComment.module.scss";
import { addComment } from "@/services/clientApi";
import { useAppSelector } from "@/redux/hooks";

const { TextArea } = Input;

interface Props {
  deviceID: number
}

const AddComment: React.FC<Props> = ({deviceID}) => {
   const[commentText, setCommentText] = React.useState<string>('');
   const user = useAppSelector((state)=> state.user)

   const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCommentText(e.target.value);
  };
  
console.log(deviceID, user.id, commentText)
   return (
  <div className={styles.root}>
    <TextArea
      className={styles.textArea}
      size="large"
      showCount
      maxLength={200}
      onChange={onChange}
      value={commentText}
    />
    <Button onClick={()=> addComment(commentText, deviceID, user.id )} className={styles.button}>Отправить</Button>
  </div>)
};

export default AddComment;
