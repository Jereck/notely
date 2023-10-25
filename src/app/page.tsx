import NotesList from "./_components/notes/notes-list";
import NotesPage from "./_components/notes/note-page";
import SideMenu from "./_components/side-menu";

export default function Home() {
  return (
    <main className="grid md:grid-cols-12 grid-cols-1 h-screen">
      <div className="col-span-1 md:col-span-3 border">
        <SideMenu />
      </div>
      <div className="col-span-1 md:col-span-3 border">
        <NotesList />
      </div>
      <div className="col-span-1 md:col-span-6 border">
        <NotesPage />
      </div>
    </main>
  );
}
