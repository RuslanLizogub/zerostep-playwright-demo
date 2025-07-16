require('dotenv').config()
const { test, expect } = require('@playwright/test')
const { ai } = require('@zerostep/playwright')

test.describe('Google', () => {
  const searchTerm = 'software testing'

  test('search and verify the first organic search result', async ({ page }) => {
    await page.goto('https://www.google.com')

    await ai(`Search for '${searchTerm}'`, { page, test })
    await page.keyboard.press('Enter')

    await page.waitForURL('https://www.google.com/search**')

    const title = await ai(`What is the title of the first organic search result?`, { page, test })

    console.log('First organic search result is: ', title)
  })
})
