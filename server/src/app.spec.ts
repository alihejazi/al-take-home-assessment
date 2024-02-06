import supertest from "supertest";
import app from "./app";

const api = supertest(app);

describe("Server End to End", () => {
  it("should return added quantity when presented with a list of values", async () => {
    const name = "hello";
    const quantities = "1,2";
    const username = "user1";

    const res = await api
      .post(`/inventory/${name}`)
      .send({
        quantities,
        username
      })
      .expect(200);

    expect(res.body).toStrictEqual({ message: 'success', name, quantity: 3 });
  }, 10000);

  it("should throw 400 error if missing quantities", async () => {
    const name = "hello";
    const username = "user1";

    const res = await api
      .post(`/inventory/${name}`)
      .send({
        username
      })
      .expect(400);

      expect(res.body).toStrictEqual({ message: 'Missing data!' });
  }, 10000);

  it("should throw 400 error if missing username", async () => {
    const name = "hello";
    const quantities = "1,2";

    const res = await api
      .post(`/inventory/${name}`)
      .send({
        quantities,
      })
      .expect(400);

      expect(res.body).toStrictEqual({ message: 'Missing data!' });
  }, 10000);

  it("should throw 404 error if missing item name (because endpoint in such case does not exist)", async () => {
    const quantities = "1,2";
    const username = "user1";

    const res = await api
      .post(`/inventory/`)
      .send({
        quantities,
        username
      })
      .expect(404); // should be 404 as endpoint doesn't exist

    expect(res.body).toStrictEqual({});
  }, 10000);

  it("should throw 400 error if invalid quantities example 1", async () => {
    const name = "hello";
    const quantities = "1,e32";
    const username = "user1";

    const res = await api
      .post(`/inventory/${name}`)
      .send({
        quantities,
        username
      })
      .expect(400);

      expect(res.body).toStrictEqual({ message: 'Invalid number(s) found in quantities!' });
  }, 10000);

  it("should throw 400 error if invalid quantities example 2", async () => {
    const name = "hello";
    const quantities = "2.5,3.8,4.99";
    const username = "user1";

    const res = await api
      .post(`/inventory/${name}`)
      .send({
        quantities,
        username
      })
      .expect(400);

      expect(res.body).toStrictEqual({ message: 'Invalid number(s) found in quantities!' });
  }, 10000);

  it("should throw 400 error if invalid quantities example 3", async () => {
    const name = "hello";
    const quantities = "ajkad@9873dfjdf!!r,0q9843";
    const username = "user1";

    const res = await api
      .post(`/inventory/${name}`)
      .send({
        quantities,
        username
      })
      .expect(400);

      expect(res.body).toStrictEqual({ message: 'Invalid number(s) found in quantities!' });
  }, 10000);
});
