import { createContext, useEffect, ReactNode, useState } from "react";
import { api } from "./services/api";

export interface Post {
  "id": string,
  "name": string,
  "body": string,
  "likes": number
}

type PostInput = Omit<Post, 'id' | 'likes'>
type PostEdit = Omit<Post, 'likes'>

interface PostProviderProps {
  children: ReactNode
}

interface PostContextData {
  posts: Post[];
  createPost: (post: PostInput) => Promise<void>
  deletePost: (id: string) => Promise<void>
  editPost: (post: PostEdit) => Promise<void>
}

export const PostContext = createContext<PostContextData>({} as PostContextData);

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get("post").then((response) => {

      setPosts(response.data)
    });
  }, []);

  async function createPost(post: PostInput) {
    const response = await api({
      method: 'post',
      url: '/post/create',
      data: post
    });
    setPosts([...posts, response.data])
  }

  async function deletePost(id: string) {
    await api({
      method: 'delete',
      url: '/post',
      data: {
        id: id
      }
    });
    const index = posts.findIndex((posts) => posts.id === id)
    setPosts(posts.filter((value, i) => i !== index));
  }

  async function editPost(post: PostEdit) {
    api({
      method: 'put',
      url: '/post',
      data: post
    })
    const index = posts.findIndex((posts) => posts.id === post.id)
    const allposts = [...posts];
    allposts[index].body = post.body;
    allposts[index].name = post.name;
    setPosts(allposts);
  }




  return (
    <PostContext.Provider value={{ posts, createPost, deletePost, editPost }}>
      {children}
    </PostContext.Provider>
  )
}