import { CreatePost } from "~/app/_components/create-post";
import WysiwygMenu from "./_components/wysiwyg-menu";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center border rounded-lg">
      <WysiwygMenu />
    </main>
  );
}
