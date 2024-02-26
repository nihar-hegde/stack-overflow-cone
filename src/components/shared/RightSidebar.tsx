"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    { id: "1", title: "How to center a div?" },
    { id: "2", title: "Node js installing how ?" },
    { id: "3", title: "Uninstall git and reninstall " },
    { id: "4", title: "How to center a div?" },
    { id: "5", title: "How to center a div?" },
  ];
  const popularTags = [
    { id: "1", name: "Javascrit", totalQuestion: 12 },
    { id: "2", name: "Typecrit", totalQuestion: 2 },
    { id: "3", name: "C++", totalQuestion: 22 },
    { id: "4", name: "Go Lang", totalQuestion: 14 },
    { id: "5", name: "Rust", totalQuestion: 19 },
  ];
  return (
    <section
      className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px]
      flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden 
    "
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question.id}`}
              key={question.id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag.id}
              id={tag.id}
              name={tag.name}
              totalQuestions={tag.totalQuestion}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
