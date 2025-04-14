import { test, expect } from "@playwright/test";
import { REQUEST_URL, PRODUCT_ID } from "../test-data/constants";
import REQUEST_BODY from "../test-data/request_body.json";

test.describe("Matchers example", () => {
  test("toContainEqual example", async () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    await expect(users).toContainEqual({ id: 1, name: "Alice" });
  });

  test("toEqual", async () => {
    await expect({ name: "Alice", age: 30 }).toEqual({
      name: "Alice",
      age: 30,
    });
  });

  test("toMatchObject example", async () => {
    const user = {
      id: 1,
      name: "Alice",
      age: 30,
    };

    await expect(user).toMatchObject({ name: "Alice", age: 30 });
  });

  test("toHaveProperty example", async () => {
    const user = {
      profile: {
        name: "Alice",
      },
    };
    await expect(user).toHaveProperty("profile.name");
  });
});

test.describe("CRUD Operations", () => {
  test("API Test - GET Products", async ({ request }) => {
    const response = await request.get(REQUEST_URL);

    const responseBody = await response.json();

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);

    expect(responseBody).toContainEqual(
      expect.objectContaining({
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      })
    );
  });

  test("API TEST 2 - GET Product", async ({ request }) => {
    const response = await request.get(`${REQUEST_URL}/${PRODUCT_ID}`);

    const responseBody = await response.json();

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);

    expect(responseBody).toEqual(
      expect.objectContaining({
        title: "Solid Gold Petite Micropave ",
      })
    );

    expect(responseBody).toMatchObject({ price: 168, category: "jewelery" });

    expect(responseBody).toHaveProperty("image");
    expect(responseBody).toHaveProperty("rating.rate");
  });

  test("API TEST 3 - CREATE Product", async ({ request }) => {
    const response = await request.post(REQUEST_URL, {
      data: REQUEST_BODY,
      // data: {
      //   id: 0,
      //   title: "string",
      //   price: 0.1,
      //   description: "string",
      //   category: "string",
      //   image: "http://example.com",
      // },
    });

    const responseBody = await response.json();

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);

    expect(responseBody).toEqual({
      id: 21,
      title: "string",
      price: 0.1,
      description: "string",
      image: "http://example.com",
      category: "string",
    });

    expect(responseBody).toHaveProperty("price", 0.1);
  });

  test("API TEST 4 - UPDATE PRODUCT", async ({ request }) => {
    const response = await request.put(`${REQUEST_URL}/${PRODUCT_ID}`, {
      data: {
        id: 6,
        title: "Test",
        price: 0.3,
        description: "Test",
        category: "string",
        image: "http://example.com",
      },
    });

    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);

    expect(responseBody).toMatchObject({
      title: "Test",
      price: 0.3,
      description: "Test",
    });
  });
});
