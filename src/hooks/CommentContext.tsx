import { createContext, useEffect, ReactNode, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

export interface Comment {
  "id": string,
  "comment": string,
  "name_user": string,
  "post_id": String
}


type CommentInput = Omit<Comment, 'id'>
type CommentEdit = Omit<Comment, 'name_user' | 'post_id'>

interface CommentProviderProps {
  children: ReactNode
}

interface CommentContextData {
  comments: Comment[];
  createComment: (Comment: CommentInput) => Promise<void>
  deleteComment: (id: string) => Promise<void>
  editComment: (Comment: CommentEdit) => Promise<void>
}

export const CommentContext = createContext<CommentContextData>({} as CommentContextData);

export function CommentProvider({ children }: CommentProviderProps) {
  const { token } = useParams<{ token: string }>();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    api({
      method: 'post',
      url: '/comment',
      data: {
        post_id: token
      }
    }).then((response) => {
      console.log(response)
      setComments(response.data)
    });
  }, []);

  async function createComment(Comment: CommentInput) {
    const response = await api({
      method: 'post',
      url: '/comment/create',
      data: Comment
    });
    setComments([...comments, response.data])
  }

  async function deleteComment(id: string) {
    await api({
      method: 'delete',
      url: '/comment',
      data: {
        id: id
      }
    });
    const index = comments.findIndex((comments) => comments.id === id)
    setComments(comments.filter((value, i) => i !== index));
  }

  async function editComment(Comment: CommentEdit) {
    api({
      method: 'put',
      url: '/comment',
      data: Comment
    })
    const index = comments.findIndex((comments) => comments.id === Comment.id)
    const allComments = [...comments];
    allComments[index].comment = Comment.comment;
    setComments(allComments);
  }




  return (
    <CommentContext.Provider value={{ comments, createComment, deleteComment, editComment }}>
      {children}
    </CommentContext.Provider>
  )
}