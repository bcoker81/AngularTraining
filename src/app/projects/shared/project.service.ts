import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Project } from './project.model';
import { MOCK_PROJECTS } from './mock-projects';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = environment.backendurl + '/projects/';

  constructor(private http: HttpClient) {}

  find(id: number): Observable<Project> {
    const url = this.projectsUrl + id;
    return this.http.get<Project>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError('an error occured loading the project.');
      })
    );
  }

  put(project: Project): Observable<Project> {
    const url = this.projectsUrl + project.id;
    return this.http.put<Project>(url, project, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('an error occurred updating the projects.');
      })
    );
  }

  list(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('an error occurred loading the projects.');
      })
    );
  }
}
