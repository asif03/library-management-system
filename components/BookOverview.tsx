import React from "react";
import { BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCover from "@/components/BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  coverColor,
  coverUrl,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-white">{title}</h1>
        <div className="book-info">
          <p>
            By <span className="font-semibold text-primary">{author}</span>
          </p>
          <p>
            Category <span className="font-semibold text-primary">{genre}</span>
          </p>
          <div className="flex flex-row gap-1">
            <Star className="h-5 w-5" />
            <p>{rating}</p>
          </div>
        </div>
        <div className="book-copies">
          <p>
            Total Books <span>{total_copies}</span>
          </p>
          <p>
            Available Books <span>{available_copies}</span>
          </p>
        </div>
        <p className="book-description">{description}</p>
        <Button className="book-overview_btn">
          <BookOpen className="h-5 w-5" />
          <p className="font-besas-neue font-semibold uppercase text-dark-100">
            Borrow Book Request
          </p>
        </Button>
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={coverColor}
            coverImage={coverUrl}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              coverColor={coverColor}
              coverImage={coverUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookOverview;
