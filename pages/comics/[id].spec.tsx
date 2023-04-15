import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getStaticProps } from "./[id].page";
import { GetServerSidePropsContext } from "next";
import { comicMock } from "dh-marvel/test/mocks/comic";
import { ParsedUrlQuery } from "querystring";
import Comic from "./[id].page";



describe("ComicIDPage", () => {
  describe("when rendering default page", () => {
    it("should fetch the data", async () => {
      render(
          <Comic comic={comicMock} />
      );
      const title = screen.getByText("Marvel Previews (2017)");
      expect(title).toBeInTheDocument();
    });
    it("get static props good path", async () => {
      const context = {
        query : { id: "1"} as ParsedUrlQuery,
      };
      const value = await getStaticProps(context as GetServerSidePropsContext);
      
      expect(value).toEqual({"props": {"comic": null}, "revalidate": 10})
    }),
    it("get static props bad path", async () => {
      const context = {
        query : { id: ""} as ParsedUrlQuery,
      };
      const value = await getStaticProps(context as GetServerSidePropsContext);
      expect(value).toEqual({"props": {"comic": null,},"revalidate": 10,})
    })
  });
});
