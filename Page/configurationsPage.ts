import { Page } from "@playwright/test";

export class configurationsPage{

    readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }

    async UrlNavigtion(url:string){
        await this.page.goto(url);
    }
    async closeBrowser(){
     await   this.page.close();
    }
}