import { browser, element, by } from "protractor";
import { AppPage } from "../../app.po";
import { all } from "q";
import { ArticleObjects } from "../../elements/article/article.po";

describe('Article',()=>{
    let page : AppPage
    let article : ArticleObjects;

    beforeEach((done)=>{
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 80000;
        page = new AppPage();
        article = new ArticleObjects();
        browser.ignoreSynchronization = true;
        browser.sleep(500); 
        setTimeout(function () {
            done();
        }, 500);
    });

    beforeAll(()=>{
         
    });


        it('New article',()=>{
            return article.newArticle.click()
        .then(()=>{
            return browser.sleep(1000);
        }).then(()=>{
            return article.articleTitle.sendKeys('Test');
        }).then(()=>{
            return article.articleAbout.sendKeys('TestingAbout');
        }).then(()=>{
            return article.articleText.sendKeys('This is only test!');
        }).then(()=>{
            return article.tags.sendKeys('#testing');
        }).then(()=>{
            return article.publish.click();
        }).then(()=>{
            return browser.sleep(2000);
        }).then(()=>{
            expect(article.editArticle.getText()).toEqual('Edit Article');
        }).then(()=>{
            return browser.sleep(3000); 
            });
        });

        it('Edit Article',()=>{
            return article.editArticle.click()
        .then(()=>{
            return browser.sleep(1000);
        }).then(()=>{
            return article.articleTitle.clear();
        }).then(()=>{
            return article.articleTitle.sendKeys('EditTest');
        }).then(()=>{
            return article.articleAbout.clear();
        }).then(()=>{
            return article.articleAbout.sendKeys('EditTestingAbout');
        }).then(()=>{
            return article.articleText.clear();
        }).then(()=>{
            return article.articleText.sendKeys('Edit. This is only test!');
        }).then(()=>{
            return article.tags.clear();
        }).then(()=>{
            return article.tags.sendKeys('#editesting');
        }).then(()=>{
            return article.publish.click();
        }).then(()=>{
            return browser.sleep(1000);
        }).then(()=>{
            expect(article.editCheck.getText()).toEqual('Edit. This is only test!');
        }).then(()=>{
            return browser.sleep(2000);
            });
        });

        it('Like Global Feed',()=>{
            return article.home.click()
        .then(()=>{
            return browser.sleep(1000);
        }).then(()=>{
            return article.globalFeed.click();
        }).then(()=>{
            return browser.sleep(2000);
        }).then(()=>{
            return article.likeButton.click();
        }).then(()=>{
            return browser.sleep(1000);
        }).then(()=>{
            expect(article.likeButton.getText()).toEqual('1');
        }).then(()=>{
            return browser.sleep(2000);
            });
        });


        it('Delete Article',()=>{
            return article.readMore.click()
        .then(()=>{
            return browser.sleep(2000);
        }).then(()=>{
            return article.deleteArticle.click();
        }).then(()=>{
            return browser.sleep(2000);
        }).then(()=>{
            expect(article.articleCheck.getText()).toEqual('No articles are here... yet.');

            });
        });


});