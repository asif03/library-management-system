import Header from "@/components/Header";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <BookOverview {...sampleBooks[0]} />
      <BookList title="Popular Books" books={sampleBooks} />
    </main>
  );
}
