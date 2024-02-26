import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    id: "1",
    title: "How to center a div?",
    tags: [
      { id: "1", name: "HTML" },
      { id: "2", name: "CSS" },
    ],
    author: {
      id: "john-doe",
      name: "John Doe",
      picture: "https://example.com/avatar.png",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2023-09-01T12:00:00.0000Z"),
  },
  {
    id: "2",
    title: "How to quit vim?",
    tags: [
      { id: "1", name: "Neovim" },
      { id: "2", name: "vim" },
    ],
    author: {
      id: "john-doe-third",
      name: "John Doe the third",
      picture: "https://example.com/avatar2.png",
    },
    upvotes: 100,
    views: 1000,
    answers: [],
    createdAt: new Date("2023-09-01T12:00:00.0000Z"),
  },
];

const Home = async () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 ">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Question"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses={"min-h-[56px] sm:min-w-[170px]"}
          containerClasses={"hidden max-md:flex"}
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              answers={question.answers}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no questions to show"
            description="Be the first to break the silence! 🚀 Ask a question and kick start the discussion. Your query could be the next big thing others learn form.Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};
export default Home;
