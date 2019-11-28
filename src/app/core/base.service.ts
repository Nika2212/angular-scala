import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BaseService {
    protected API: string = '';

    constructor(protected http: HttpClient) {}
}
