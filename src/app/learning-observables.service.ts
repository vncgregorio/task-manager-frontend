import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()

export class LearningObservables {

  public constructor(private http: Http){

    // CRIANDO UM OBJETO OBSERVADOR
    let observer = {
      name: "Nome qualquer",
      email: "email@qualquer",

      nameAndEmail: function(){
        return this.name + " - "+ this.email
      }
    }

    console.log(observer.nameAndEmail);

  }

}
