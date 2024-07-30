import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });
  it("Deve renderizar dois comentários", () => {
    const { debug } = render(<PostComment />);

    const textarea = screen.getByTestId("textarea");
    const form = screen.getByTestId("comment-form");

    fireEvent.change(textarea, {
      target: { value: "Comentário 1" },
    });

    fireEvent.submit(form);

    fireEvent.change(textarea, {
      target: { value: "Comentário 2" },
    });

    fireEvent.submit(form);

    debug();

    expect(screen.getAllByTestId("comment")).toHaveLength(2);
  });
});
