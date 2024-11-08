import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: string = "";
  edad: number | null = null;
  errorMensaje: string = "";
  succesMensaje: string = "";



  constructor() {}

  sumar(a: number, b: number){
    return a+b;
  }

  convertirMayusculas(texto: string){
    return texto.toUpperCase();
  }

  onValidate(){
    if (!this.nombre || this.nombre.trim()===""){
      this.errorMensaje = "Debe rellenar el campo nombre";
    }
    else if (!this.edad || this.edad <= 14){
      this.errorMensaje = "Debe tener una edad superior a 14 años"
    }
    else{
      this.errorMensaje = "";
    }
  }

}
