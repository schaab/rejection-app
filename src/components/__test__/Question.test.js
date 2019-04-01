import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Question from "../Question";

describe("<Question />", () => {
  afterEach(cleanup);

  test("given no props it should render a default component", () => {
    const { getByTestId } = render(<Question />);

    expect(getByTestId("question-text")).toHaveTextContent("");
    expect(getByTestId("question-askee")).toHaveTextContent("Unknown");
  });

  test("given a valid question it should render a question", () => {
    const { getByTestId } = render(
      <Question
        question="What is best in life?"
        askee="Arnold"
        status="Rejected"
      />
    );

    expect(getByTestId("question-text")).toHaveTextContent(
      "What is best in life?"
    );
    expect(getByTestId("question-askee")).toHaveTextContent("Arnold");
  });

  test("given a partial question it should render a question", () => {
    const { getByTestId } = render(
      <Question question="What is best in life?" status="Rejected" />
    );

    expect(getByTestId("question-text")).toHaveTextContent(
      "What is best in life?"
    );
    expect(getByTestId("question-askee")).toHaveTextContent("Unknown");
  });
});
