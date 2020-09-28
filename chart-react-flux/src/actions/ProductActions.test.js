import dispatcher from "../dispatcher";
import { getProductList } from "./ProductActions";
import mockList from "../mocks/products";

jest.mock("../dispatcher");
jest.dontMock("./ProductActions");

describe("ProductActions", () => {
  const productId = 1;
  it("Should return product List", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve(mockList);
    });
    await getProductList();
    const firstResult = dispatcher.dispatch.mock.calls[0][0].data[0];
    expect(firstResult.id).toEqual(productId);
  });
});
