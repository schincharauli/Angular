import { Component, OnInit } from '@angular/core';
import { IArticle, IArticleResponse } from './article';
import {ArticleService} from './article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
   articles: IArticle[] = [];
    constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
    this._articleService
    .getArticles()
    .subscribe((Response: IArticleResponse) => {
      if ((Response.status = 'ok')) {
        this.articles = Response.articles; 
      }
    });

  }


}
