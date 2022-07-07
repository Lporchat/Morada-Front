import { createContext, useEffect, ReactNode, useState } from "react";
import { api } from "./services/api";

export interface Post {
  "id": string,
  "name": string,
  "body": string,
  "likes": number
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext<Post[]>([]);

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get("post").then((response) => {

      setPosts(response.data)
    });
  }, []);

  console.log(posts)

  return (
    <PostContext.Provider value={posts}>
      {children}
    </PostContext.Provider>
  )
}