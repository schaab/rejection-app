import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import QuestionMeta from "../QuestionMeta";

describe("<QuestionMeta />", () => {
  afterEach(cleanup);

  test("given nothing it should render a default component", () => {
    const { getByTestId } = render(<QuestionMeta data-testid="meta" />);
    const actual = getByTestId("meta");
    const expected = "";

    expect(actual).toHaveTextContent(expected);
  });

  test("given a question it should render", () => {
    const { getByTestId } = render(
      <QuestionMeta content="What is the answer to life?" data-testid="meta" />
    );
    const actual = getByTestId("meta");
    const expected = "What is the answer to life?";

    expect(actual).toHaveTextContent(expected);
  });
});
