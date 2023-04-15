import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Character, { getStaticProps } from "./[id].page";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import character from "dh-marvel/test/mocks/character";


describe("Character page", () => {
  describe("when rendering name character", () => {
    it("should fetch the data", async () => {
      render(
          <Character character={character}/>
      );
      const name = screen.getByText("Abomination (Ultimate)");
      expect(name).toBeInTheDocument();
    });
    it("when rendering name description", async () => {
      render(
          <Character character={character}/>
      );
      const description = screen.getByText("idont like testing");
      expect(description).toBeInTheDocument();
    });
    it("should fetch the data", async () => {
        const context = {
            query : { id: "1"} as ParsedUrlQuery,
          };
      const value = await getStaticProps(context as GetStaticPropsContext);
      expect(value).toStrictEqual({"props": {"character": null}, "revalidate": 10})
      
    })
  });
});
