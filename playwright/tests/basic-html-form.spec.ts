import { test, expect, Page } from "@playwright/test";
import path from "path";
interface Results {
  username: string;
  //password: string;
  comments: string;
  dropdownValue: string;
}

const results: Results = {
  username: "testUser",
  //password: "secret",
  comments: "Test comment",
  dropdownValue: "dd2",
};

const fillFields = async (page: Page, resultsObj: Results) => {
  //Locate and fill username input
  await test.step("Enter username", async () => {
    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill(resultsObj.username);
    await expect(usernameInput).toHaveValue(resultsObj.username);
  });

  //locate and fill comments fild
  await test.step("Fill comments field", async () => {
    const commentsField = page.locator('xpath=//textarea[@name="comments"]');
    await expect(commentsField).toBeVisible();
    await commentsField.fill(resultsObj.comments);
    await expect(commentsField).toHaveValue(resultsObj.comments);
  });

  //Locate and mark checkbox
  await test.step("Select checkbox", async () => {
    const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
    await expect(checkboxEl).toBeVisible();
    await checkboxEl.check();
    await expect(checkboxEl).toBeChecked();
  });

  //Locate and check the radio button
  await test.step("Select radio buton", async () => {
    const radio2 = page.locator('xpath=//input[@value="rd2"]');
    await radio2.check();
    await expect(radio2).toBeChecked();
  });

  //locate and fill dropdown
  await test.step("Select dropdown optin", async () => {
    const dropdown = page.locator('xpath=//select[@name="dropdown"]');
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption(resultsObj.dropdownValue);
    await expect(dropdown).toHaveValue(resultsObj.dropdownValue);
  });
  //Locate upload file
  await test.step("Upload file", async () => {
    const uploadBtn = page.locator('xpath=//input[@type="file"]');
    const filePath = path.resolve(__dirname, "./tests.txt");
    await expect(uploadBtn).toBeVisible();
    await uploadBtn.setInputFiles(filePath);
  });
};

test.describe("Test Basic HYML Form", () => {
  test.beforeEach("Navigate to HTML Form Page", async ({ page }) => {
    const htmlFormUrl = process.env.BASE_HTML_FORM_URL as string;
    await page.goto(htmlFormUrl);
  });

  test("Has h1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Reset Form", async ({ page }) => {
    const cancelBtn = page.locator('xpath=//input[@type="reset"]');
    await expect(cancelBtn).toBeVisible();
    await fillFields(page, results);
    await cancelBtn.click();

    await expect(page.locator("xpath=//input[@name='username']")).toHaveValue(
      ""
    );
    await expect(page.locator("xpath=//input[@value='cb3']")).toBeChecked();
  });

  test("Submit Form", async ({ page }) => {
    const submitButton = page.locator('xpath=//input[@type="submit"]');
    await expect(submitButton).toBeVisible();
    await fillFields(page, results);
    await submitButton.click();

    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );
    const usernameVal = page.locator('xpath=//li[@id="_valueusername"]');
    await expect(usernameVal).toHaveText(results.username);
    const dropdownVal = page.locator('xpath=//li[@id="_valuedropdown"]');
    await expect(dropdownVal).toHaveText(results.dropdownValue);
  });

  //test("Test username field", async ({ page }) => {
  //  const usernameInput = page.locator("xpath=//input[@name='username']");
  //  await expect(usernameInput).toBeVisible();
  //  await usernameInput.fill("testUser");
  //  await expect(usernameInput).toHaveValue("testUser");
  //});

  //test("Comments field", async ({ page }) => {
  //const commentsField = page.locator('xpath=//textarea[@name="comments"]');
  //await expect(commentsField).toBeVisible();
  //await commentsField.fill("Test comment");
  //await expect(commentsField).toHaveValue("Test comment");
  //});
  // test("Test checkbox selecttion", async ({ page }) => {
  // const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
  //await expect(checkboxEl).toBeVisible();
  //await checkboxEl.check();
  //await expect(checkboxEl).toBeChecked();
  //});

  //test("Select dropdawn option", async ({ page }) => {
  //const dropdown = page.locator('xpath=//select[@name="dropdown"]');
  //await expect(dropdown).toBeVisible();
  //await dropdown.selectOption("dd2");
  //await expect(dropdown).toHaveValue("dd2");
  //});
  // test("Upload file", async ({ page }) => {
  // const uploadBtn = page.locator('xpath=//input[@type="file"]');
  // const filePath = path.resolve(__dirname, "./tests.txt");
  // await expect(uploadBtn).toBeVisible();
  // await uploadBtn.setInputFiles(filePath);
  // });
});
