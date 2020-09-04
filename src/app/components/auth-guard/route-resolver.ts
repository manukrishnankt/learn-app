import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouteService } from 'src/app/service/route.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouteResolver implements Resolve<any> {
    constructor(private service: RouteService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.service.getResolveData();
    }
}