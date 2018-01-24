import { browser, by, element } from 'protractor';


export class ArticleObjects{

    public newArticle = element.all(by.className('nav-item')).get(1);
    public articleTitle = element(by.name('title'));
    public articleAbout = element(by.name('description'));
    public articleText = element(by.name('body'));
    public tags = element(by.name('tag_field'));
    public publish = element(by.className('btn btn-lg pull-xs-right btn-primary'));
    public editArticle = element(by.className('btn-outline-secondary'));
    public editCheck = element(by.className('row article-content'));
    public deleteArticle = element(by.className('btn btn-sm btn-outline-danger'));
    public articleCheck = element(by.className('col-md-9')).element(by.tagName('article-list'));
    public home = element.all(by.className('nav-item')).get(0);
    public globalFeed = element(by.className('feed-toggle')).all(by.className('nav-item')).get(1);
    public likeButton = element(by.className('article-meta')).element(by.tagName('favorite-button'));
    public readMore = element(by.className('preview-link')).element(by.tagName('span'));

}