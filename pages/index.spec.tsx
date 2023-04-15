import { render, screen } from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";
import { comicsMock } from "test/mocks/comics";

describe("IndexPage", () => {
  describe("when rendering default", () => {
    it("should render card title", () => {
      render(<Index comics={comicsMock} />);
      const title = screen.getByText("Marvel Previews (2017)");
      expect(title).toBeInTheDocument();
    });
    it("should render card image", () => {
      render(<Index comics={comicsMock} />);
      const title = screen.getByAltText("Marvel Previews (2017)");
      expect(title).toBeInTheDocument();
    });
  });
});
