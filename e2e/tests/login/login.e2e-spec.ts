import { browser, element, by } from "protractor";
import { AppPage } from "../../app.po";
import { all } from "q";
import { RegisterObjects } from "../../elements/register/register.po";
import { LoginObjects } from "../../elements/login/login.po";

describe('Login',()=>{
    let page : AppPage
    let register : RegisterObjects;
    let login : LoginObjects;

    beforeEach((done)=>{
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 80000;
        page = new AppPage();
        register = new RegisterObjects();
        login = new LoginObjects();
        browser.ignoreSynchronization = true;
        browser.sleep(500); 
        setTimeout(function () {
            done();
        }, 500);
    });

    beforeAll(()=>{
         
    });


        it('Navigate to page',()=>{
            return page.navigateTo().then(()=>{
            return browser.sleep(1000);
            });
        });

        it('Should fail login', ()=>{
            return login.loginForm.click()
        .then(()=>{
            return browser.sleep(1000);
        }).then(()=>{
            return login.signin.click();
        }).then(()=>{
            return browser.sleep(1000);
        }).then(()=>{
            expect(login.error.getText()).toEqual('email or password is invalid'); //Check error
        }).then(()=>{
            return browser.sleep(2000);
            });  
        });         

        it('Should Login', ()=>{
            return login.email.sendKeys('marcis@marcis.lv')
        .then(()=>{
            return login.password.sendKeys('12345678');
        }).then(()=>{
            return login.signin.click();
        }).then(()=>{ 
            return browser.sleep(1000);
        }).then(()=>{
            expect(register.settings.getText()).toEqual(' Settings'); //Check error
        });
    });
});

