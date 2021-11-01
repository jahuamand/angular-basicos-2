import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
       ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [ //Sólo módulos
    
    ]
})
export class ContadorModule{

}