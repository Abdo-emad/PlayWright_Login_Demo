import { Locator, Page } from "@playwright/test";

export class loginPages{

    readonly page :Page;
    readonly UserName :Locator;
    readonly password: Locator;
    readonly submit :Locator;
    constructor(page:Page){
        this.page=page;
        this.UserName=page.getByPlaceholder('Username');
        this.password=page.getByPlaceholder('Password');
        this.submit=page.getByRole('button', { name: 'Login' });
    }
    async EnterAllFields(username:string,password:string){

        await this.UserName.fill(username);
        await this.password.fill(password);
        await this.submit.click();
    }

}