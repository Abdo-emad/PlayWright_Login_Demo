import test, { expect } from "@playwright/test";
import { configurationsPage } from "../Page/configurationsPage";
import { loginPages } from "../Page/loginPages";
import loginPageTestData from "../Data/loginPageTestData.json"

let configPage:configurationsPage;
let loginpage:loginPages;
test.beforeEach('OPen Browser URL',async({page,baseURL})=>{
configPage = new configurationsPage(page);
loginpage = new loginPages(page);
await test.step('Open URL',async()=>{

    await configPage.UrlNavigtion("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    page.pause();
}
)
})
test.afterEach('Close Browser',async()=>{
   await configPage.closeBrowser();
})
//To run tests in playwright inspector mode>> Write this command in terminal >> npx playwright test --debug 
test.describe('Login Functionality',async()=>{
    test('Login with valid credentials',async()=>{

         await test.step('Login',async()=>{
          await  loginpage.EnterAllFields(loginPageTestData.username,loginPageTestData.password);
          
          expect(loginpage.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
         
          loginpage.page.pause();
          
         })
           
    
   })

   test('Loginwithinvalidate',async()=>{
await test.step('Negativelogin',async()=>{
    loginpage.EnterAllFields("test","test")
    loginpage.page.pause();
    expect(loginpage.page.getByRole('heading', { name: 'Dashboard' })).toBeHidden();
    
})

   })
})
