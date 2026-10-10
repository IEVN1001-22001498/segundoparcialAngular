import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IZodiaco, obtenerZodiaco } from './zodiacoChino';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco implements OnInit {
  formulario!: FormGroup;
  zodiaco: IZodiaco = {
    nombre: 'Alma Paola',
    apaterno: 'Zamora',
    amaterno: 'Muñoz',
    dia: '23',
    mes: '11',
    anio: '2002',
    sexo: 'Femenino'
  };

  signoChino: string = 'Caballo';
  edad: number = 23;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    });

    const anioNum = Number(this.zodiaco.anio);
    const mesNum = Number(this.zodiaco.mes);
    const diaNum = Number(this.zodiaco.dia);

    this.signoChino = obtenerZodiaco(anioNum, mesNum, diaNum);
    this.obtenerEdad(anioNum);
  }

  obtenerEdad(anio: number): void {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;
    const diaActual = fechaActual.getDate();

    this.edad = anioActual - anio;

    const mesNac = Number(this.formulario.value.mes || this.zodiaco.mes);
    const diaNac = Number(this.formulario.value.dia || this.zodiaco.dia);

    if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
      this.edad--;
    }
  }

  muestraZodiaco(): void {
    this.zodiaco.nombre = this.formulario.value.nombre;
    this.zodiaco.apaterno = this.formulario.value.apaterno;
    this.zodiaco.amaterno = this.formulario.value.amaterno;
    this.zodiaco.dia = this.formulario.value.dia;
    this.zodiaco.mes = this.formulario.value.mes;
    this.zodiaco.anio = this.formulario.value.anio;
    this.zodiaco.sexo = this.formulario.value.sexo;

    const anioNumero = Number(this.zodiaco.anio);
    const mesNumero = Number(this.zodiaco.mes);
    const diaNumero = Number(this.zodiaco.dia);

    this.signoChino = obtenerZodiaco(anioNumero, mesNumero, diaNumero);
    this.obtenerEdad(anioNumero);
  }

  obtenerEnlace(signo: string): string {
    const enlaces: { [key: string]: string } = {
      'Rata': 'https://tse2.mm.bing.net/th/id/OIP.XH4DNFIfMrQrX3VNObMgpQHaIY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'Buey': 'https://tse1.mm.bing.net/th/id/OIP.X-fphEa8GxmY4Hj0G0Tl9QHaIY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'Tigre': 'https://tse3.mm.bing.net/th/id/OIP.6IP1skY0fbMegvOn95Ti4wHaIQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'Conejo': 'https://tse3.mm.bing.net/th/id/OIP.3HKx3boD0Sa2RngIXg0lfQHaIT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'Dragon': 'https://tse4.mm.bing.net/th/id/OIP.b6KC_Olqse02zBT_1TlZQgAAAA?r=0&w=416&h=416&rs=1&pid=ImgDetMain&o=7&rm=3',
      'Serpiente': 'https://tse4.mm.bing.net/th/id/OIP.qoXIvfso4agKAtsysp9m9wHaIY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'Caballo': 'https://tse4.mm.bing.net/th/id/OIP.l2RV3y67gV8Rojy4WsmyjwHaHc?r=0&pid=ImgDet&w=474&h=476&rs=1&o=7&rm=3',
      'Cabra': 'https://tse4.mm.bing.net/th/id/OIP.oGRFdYfCMzmblFrcqpKdwgHaIT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'Mono': 'https://tse4.mm.bing.net/th/id/OIP.BPLYETKxLvHZ5JoN0BN49QHaIT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'Gallo': 'https://tse1.mm.bing.net/th/id/OIP.hFS-SOm-SQ5wEHfBIZXbZgHaIY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'Perro': 'https://tse1.mm.bing.net/th/id/OIP.Y-5aZL4hII7INpYdnR6gAgHaIR?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'Cerdo': 'https://tse3.mm.bing.net/th/id/OIP.XSLbQOR-nj-Bo0MEhKs10wHaIT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    };
    return enlaces[signo] || '#';
  }
}