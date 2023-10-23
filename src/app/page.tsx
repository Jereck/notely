import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  const posts = await api.post.getAllPosts.query()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      { posts.map((post) => {
        return (
          <div key={post.id}>
            { post.name }
          </div>
        )
      })}
      <CreatePost />
    </main>
  );
}
