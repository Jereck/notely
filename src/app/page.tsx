import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  const posts = await api.post.getAllPosts.query()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      { posts.map((post) => {
        return (
          <div>
            { post.name }
          </div>
        )
      })}
      <CrudShowcase />
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      <CreatePost />
    </div>
  );
}