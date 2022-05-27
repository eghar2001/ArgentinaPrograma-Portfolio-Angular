import { Injectable } from '@angular/core';
import{HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private auth:AutenticacionService
    
  ) { 
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const currentUser = this.auth.UsuarioAutenticado;
    
    if(currentUser && currentUser.token){
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }
    return next.handle(req)
  }

}
