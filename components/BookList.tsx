import React from "react";
import BookCard from "@/components/BookCard";

interface BookListProps {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: BookListProps) => {
  return (
    <div className="py-10">
      <h4 className="font-bebas-neue text-secondary">{title}</h4>
      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </ul>
    </div>
  );
};
export default BookList;
