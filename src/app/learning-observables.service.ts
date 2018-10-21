import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

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

    // this.http.get("api/tasks")
    //   .subscribe({
    //     next: function(newData){
    //       console.log("CHAMOU O MÉTODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
    //     },
    //     error: function(errorData){
    //       console.log("CHAMOU O MÉTODO ERROR E PASSOU COMO PARAMETRO O 'errorData' => ", errorData)
    //     },
    //     complete: function(){
    //       console.log("CHAMOU O MÉTODO COMPLETE E ENCERROU")
    //     }
    //   });

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

    this.http.get("api/tasks")
      .subscribe(newData => {
          console.log("CHAMOU O MÉTODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
        });

  }

}
