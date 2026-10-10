export interface IZodiaco {
  nombre: string;
  apaterno: string;
  amaterno: string;
  dia: string;
  mes: string;
  anio: string;
  sexo: string;
}

export const zodiacoAnimales = [
    'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragon', 'Serpiente',
    'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
];

export function obtenerZodiaco(anio: number, mes: number, dia: number): string {
    let anioAjustado = anio;
    if (mes === 1) {
        anioAjustado = anio - 1;
    } else if (mes === 2) {
        const diasCorteFeb: { [key: number]: number } = {
            2000: 5, 2001: 24, 2002: 12, 2003: 1, 2004: 22, 2005: 9, 2006: 29, 2007: 18, 2008: 7, 2009: 26
        };
        const corte = diasCorteFeb[anio] || 4;
        if (dia < corte) {
            anioAjustado = anio - 1;
        }
    }

    const diferencia = anioAjustado - 1930;
    const base = (6 + diferencia) % 12;
    const basePositiva = (base + 12) % 12;
    return zodiacoAnimales[basePositiva];
}