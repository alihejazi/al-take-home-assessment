import supertest from "supertest";
import app from "./app";

const api = supertest(app);

describe("Server End to End", () => {
  it("should return added quantity when presented with a list of values", async () => {
    const res = await api
      .post("/inventory/hello")
      .send({
        quantities: "1,2",
      })
      .expect(200);

    expect(res.body).toStrictEqual({ name: "hello", quantity: 3 });
    // expect(res.body).toHaveProperty("quantity");
    // expect(res.body).toHaveProperty("name");

    // expect(res.body.quantity).toEqual(3);
    // expect(res.body.name).toEqual("hello");
  }, 10000);
});
