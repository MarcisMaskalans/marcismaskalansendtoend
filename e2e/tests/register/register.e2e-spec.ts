import { browser, element, by } from "protractor";
import { AppPage } from "../../app.po";
import { all } from "q";
import { RegisterObjects } from "../../elements/register/register.po";
import { LoginObjects } from "../../elements/login/login.po";

describe('Register',()=>{
    let page: AppPage
    let register : RegisterObjects;
    let login : LoginObjects;
    let date = new Date();
    let genName = 'test' + date.getTime();
    let genEmail = 'test' + date.getTime() + '@test.com';

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

        it('Should fail registration', ()=>{
            return register.registerForm.click()
        .then(()=>{
            return browser.sleep(1000);
        }).then(()=>{
            return register.signup.click();
        }).then(()=>{
            return browser.sleep(1000);
        }).then(()=>{
            expect(register.errorEmail.getText()).toEqual('email can\'t be blank'); //Check error
            expect(register.errorPassword.getText()).toEqual('password can\'t be blank'); //Check error
            expect(register.errorUser.getText()).toEqual('username can\'t be blank,is too short (minimum is 1 character),is too long (maximum is 20 characters)'); //Check error
        }).then(()=>{
            return browser.sleep(1000);
        });  
    });         
        
        it('Should register', ()=>{
            return register.username.sendKeys(genName)
        .then(()=>{
            return login.email.sendKeys(genEmail);
        }).then(()=>{
            return login.password.sendKeys('12345678');
        }).then(()=>{
            return register.signup.click();
        }).then(()=>{
            return browser.sleep(5000);
        }).then(()=>{
            expect(register.settings.getText()).toEqual(' Settings');
        }).then(()=>{
            return register.settings.click();
        }).then(()=>{
            return register.logout.click();
       });
    });
});