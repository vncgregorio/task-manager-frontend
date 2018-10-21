import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

// tratando erros
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
// https://stackoverflow.com/questions/50679593/module-not-found-error-cant-resolve-rxjs-add-observable-throw
// import { throwError } from 'rxjs';
import "rxjs/add/observable/throw";

@Injectable()

export class LearningObservables {

  public constructor(private http: Http){

    // CRIANDO UM OBJETO OBSERVADOR
    let observer = {
      next: function(newData){
        console.log("CHAMOU O MÉTODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
      },
      error: function(errorData){
        console.log("CHAMOU O MÉTODO ERROR E PASSOU COMO PARAMETRO O 'errorData' => ", errorData)
      },
      complete: function(){
        console.log("CHAMOU O MÉTODO COMPLETE E ENCERROU")
      }
    };

    // CRIANDO UM OBJETO OBSERVADO E PASSANDO UM OBSERVADOR COMO PARAMETRO
    // this.http.get("api/tasks")
    //   .subscribe(observer);

    this.http.get("api/tasks")
      .catch(this.handleErrors)
      .subscribe({
        next: function(newData){
          console.log("CHAMOU O MÉTODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
        },
        error: function(errorData){
          alert("Ocorreu um erro no servidor, por favor tente mais tarde.");
          console.log("CHAMOU O MÉTODO ERROR E PASSOU COMO PARAMETRO O 'errorData' => ", errorData)
        },
        complete: function(){
          console.log("CHAMOU O MÉTODO COMPLETE E ENCERROU")
        }
      });

    // this.http.get("api/tasks")
    //   .subscribe(
    //     function(newData){
    //       console.log("CHAMOU O MÉTODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
    //     },
    //     function(errorData){
    //       console.log("CHAMOU O MÉTODO ERROR E PASSOU COMO PARAMETRO O 'errorData' => ", errorData)
    //     },
    //     function(){
    //       console.log("CHAMOU O MÉTODO COMPLETE E ENCERROU")
    //     }
    //   );

    // this.http.get("api/tasks")
    //   .subscribe(
    //     newData => console.log("CHAMOU O MÉTODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData),
    //     errorData => console.log("CHAMOU O MÉTODO ERROR E PASSOU COMO PARAMETRO O 'errorData' => ", errorData),
    //     () => console.log("CHAMOU O MÉTODO COMPLETE E ENCERROU")
    //   );

    // this.http.get("api/tasks")
    //   .subscribe(newData => {
    //       console.log("CHAMOU O MÉTODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
    //     });

  }

  public handleErrors(error: Response){
    console.log("SALVANDO ERRO EM BANCO DE DADOS PARA O DESENVOLVEDOR => ", error);
    return Observable.throw(error);
  }

}
