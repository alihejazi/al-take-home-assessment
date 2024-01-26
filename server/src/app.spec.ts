import supertest from "supertest";
import app from "./app";

const api = supertest(app);

describe("Server End to End", () => {
  it("should return added quantity when presented with a list of values", async () => {
    const name = "hello";
    const quantities = "1,2";

    const res = await api
      .post(`/inventory/${name}`)
      .send({
        quantities,
      })
      .expect(200);

    expect(res.body).toStrictEqual({ name, quantity: 3 });
  }, 10000);
});
