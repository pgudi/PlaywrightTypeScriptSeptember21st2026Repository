const {test, expect} = require("@playwright/test")

test("Launch Browser and Capture URL and Title", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Capture URL & Title
    const url=await page.url()
    console.log("URL of Application :"+url)
    const title=await page.title()
    console.log("Title of Application :"+title)
})