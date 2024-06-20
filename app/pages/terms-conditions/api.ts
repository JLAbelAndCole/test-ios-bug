export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
  
    const data: Post[] = await response.json();
    return data;
  }