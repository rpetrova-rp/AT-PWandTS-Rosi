import { test, expect } from "@playwright/test";

test.describe("Playwright home page testing", () => {
  test.beforeEach("Navigate to the home page", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);
  });
});

test("Has Logo exist", async ({ page }) => {
  //get image by alt text
  const logo = page.getByAltText("Playwright logo").first();
  await expect(logo).toBeVisible();
});

// Playwright enables reliable end-to-end testing for modern web apps.
test("Has heading exist", async ({ page }) => {
  //locate heading one by locator tag name
  const headingTtitle = page.locator("h1");
  //log in the test results located element value
  console.log(headingTtitle.innerText().valueOf());
  await expect(headingTtitle).toBeVisible();
});

test("Have nav links exist", async ({ page }) => {
  //locate nav link Docs by role and text
  const docsLink = page.getByRole("link", { name: "Docs" });
  const apiLink = page.getByRole("link", { name: "API" });
  await expect(docsLink).toBeVisible();
  await expect(apiLink).toBeVisible();
});

test("Click Community nav link and chesk the path", async ({ page }) => {
  //locate nav link community by role and text
  const communityLink = page.getByRole("link", { name: "Community" });

  await communityLink.click();
  //expect the current page to have passed url
  await expect(page).toHaveURL("https://playwright.dev/community/welcome");
  const headingTwo = page.getByRole("heading", { name: "Ambassadors" });
  await expect(headingTwo).toBeVisible();
});

//select dropdown list
test("Select Playwright env from the list", async ({ page }) => {
  const Initialenv = page.getByRole("button", { name: "Node.js" });
  await Initialenv.hover();

  const envList = page.locator(".dropdown_menu");
  await expect(envList).toBeVisible();
  const listItem = page.locator("ul.dropdwon__menu a").getByText("Python");
  await listItem.click();
  await expect(page).toHaveURL("https://playwright.dev/paython");
});

test("Check  if logos list exist", async ({ page }) => {
  //locate logos list by locator class name syntax
  const logosListItems = page.locator(".logosList_zAAF li");
  //expect the count of list items
  await expect(logosListItems).toHaveCount(9);
});
