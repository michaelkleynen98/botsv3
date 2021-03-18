import { Injectable } from '@angular/core';
import { Bot } from '../model/dbots.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
constructor(private http: HttpClient){}
url:string = "https://syntra.terugsamen.be/fastbutnotfurious/public/api/bots";

    getBots(): Observable<Bot[]> {
        return this.http
            .get<Bot[]>(this.url)
            .pipe(
                tap (result => console.log('Via onze eigen API:', result))
            )
    }
    getBot(id:number) {
        console.log(id);
        return this.http
        .get<Bot>(this.url+'/'+id)
        .pipe()
    }

    addBot(newBot:Bot): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url,newBot,{headers:headers});
    }

    updateBot(newBot:Bot): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url+'/'+newBot.id,newBot, {headers:headers});
    }


    deleteBot(id: number){
        return this.http.delete(this.url+'/'+id);
    }

}