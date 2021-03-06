import { Injectable } from "@angular/core";

export interface IArticleResponse {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface IArticle{
    source: any;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;

}

export interface IArticleSource{
    id: string;
    name: string;

}
