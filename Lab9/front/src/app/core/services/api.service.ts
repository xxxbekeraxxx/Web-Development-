import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Category, OrderPayload, PaginatedResponse, Product } from '../models/shop.models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories/`);
  }

  getProducts(params: {
    page?: number;
    category?: string;
    search?: string;
    sort?: string;
  }): Observable<PaginatedResponse<Product>> {
    let httpParams = new HttpParams();
    if (params.page) httpParams = httpParams.set('page', params.page);
    if (params.category) httpParams = httpParams.set('category', params.category);
    if (params.search) httpParams = httpParams.set('search', params.search);
    if (params.sort) httpParams = httpParams.set('sort', params.sort);

    return this.http.get<PaginatedResponse<Product>>(`${this.baseUrl}/products/`, {
      params: httpParams
    });
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}/`);
  }

  getCategoryProducts(id: number, page = 1): Observable<PaginatedResponse<Product>> {
    return this.http.get<PaginatedResponse<Product>>(`${this.baseUrl}/categories/${id}/products/`, {
      params: new HttpParams().set('page', page)
    });
  }

  createOrder(payload: OrderPayload): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/orders/`, payload);
  }
}
