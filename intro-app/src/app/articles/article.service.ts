import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IArticle, IArticleResponse } from './article';
import { BASE_API_URL, API_KEY } from '../../config';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    private baseUrl: string = BASE_API_URL;
    private apiKey: string = API_KEY;

    constructor(private http: HttpClient) { }

    getArticles(
        query: string,
        pageSize: number,
        page: number
    ): Observable<IArticleResponse> {
        return this.http.get<IArticleResponse>(
            `${this.baseUrl}/everything?apiKey=${this.apiKey}&q=${query}&pageSize=${pageSize}&page=${page}&sortBy=popularity`
        )
            .pipe(
                tap(null, catchError(this.handleError))
            );
    }

    getArticle(articleTitle: string): Observable<IArticleResponse> {
        return this.http.get<IArticleResponse>(
            `${this.baseUrl}/everything?apiKey=${this.apiKey}&qInTitle=${articleTitle}&pageSize=1&page=1`);

    }


    private handleError(error: HttpErrorResponse) {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {

            errorMessage = `An error occured: ${error.error.message}`;
        } else {
            errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
        }
        // console.log('HandleError', errorMessage);
        return throwError(errorMessage);
    }


}