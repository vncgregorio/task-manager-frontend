import { Component } from "@angular/core";

@Component({
  selector: 'learning-bindings',
  templateUrl: './learning-bindings.component.html'
})

export class LearningBindingsComponent {
  // mouse events
  public onClick(){
    console.log("evento onClick disparado!")
  }

  public onMouseOver(){
    console.log("evento onMouseOver disparado")
  }

  // key events
  public onKeyDown(){
    console.log("evento onKeyDown disparado")
  }

  public onKeyUp(){
    console.log("evento onKeyUp disparado")
  }
}
