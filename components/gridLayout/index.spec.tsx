import { render } from "@testing-library/react";
import GridLayout from ".";
import { comicsMock } from "dh-marvel/test/mocks/comics";


describe("GridLayout", () => {
  const comics = comicsMock.data.results;

  it("should render the correct number of comics", () => {
    const { getAllByTestId } = render(<GridLayout comics={comics} />);
    expect(getAllByTestId("card-component")).toHaveLength(comics.length);
  });

  it("should render each comic with the correct props", () => {
    const { getAllByTestId } = render(<GridLayout comics={comics} />);
    const renderedComics = getAllByTestId("card-component");
    renderedComics.forEach((comic, index) => {
      expect(comic).toHaveTextContent(comics[index].title);
    });
  });

  it("should use the default props if no props are passed", () => {
    const { getByTestId } = render(<GridLayout comics={comics} />);
    const grid = getByTestId("grid-layout");
    expect(grid.getAttribute("rowSpacing")=== "3 2 4");
    expect(grid.getAttribute("columnSpacing")=== "2 4");
    expect(grid.getAttribute("xs")=== "12");
    expect(grid.getAttribute("sm")=== "12");
    expect(grid.getAttribute("md")=== "6");
    expect(grid.getAttribute("lg")=== "4");
    expect(grid.getAttribute("xl")=== "3");
  });

  it("should use the passed props if they are provided", () => {
    const { getByTestId } = render(
      <GridLayout comics={comics} xs={6} sm={6} md={3} lg={2} xl={1} />
    );
    const grid = getByTestId("grid-layout");
    expect(grid.getAttribute("xl") === "1");
    expect(grid.getAttribute("sm") === "6");
    expect(grid.getAttribute("md") === "3");
    expect(grid.getAttribute("lg") === "2");
    expect(grid.getAttribute("xs") === "6");
    expect(grid.getAttribute("xs") === "6");
  });
});

