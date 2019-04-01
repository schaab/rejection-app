import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import QuestionList from "../QuestionList";

describe("<QuestionList />", () => {
  afterEach(cleanup);

  test("given nothing it should render an encouraging message to get asking", () => {
    const { container } = render(<QuestionList />);
    const actual = container.firstChild;
    const expected = "Get asking to earn points!";

    expect(actual).toHaveTextContent(expected);
  });
  const createQuestion = ({ question = "", askee = "", status = "" }) => ({
    question,
    askee,
    status
  });

  test("given a list containing a single question it should render it", () => {
    const questions = [
      createQuestion({
        question: "May I have a $10,000 raise?",
        askee: "boss",
        status: "Rejected"
      })
    ];
    const { getByText } = render(<QuestionList questions={questions} />);

    const actual = getByText("May I have a $10,000 raise?");

    expect(actual).toHaveLength(1);
  });
});
