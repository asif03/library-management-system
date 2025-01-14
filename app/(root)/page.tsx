import Header from "@/components/Header";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <BookOverview />
      <BookList />
    </main>
  );
}
