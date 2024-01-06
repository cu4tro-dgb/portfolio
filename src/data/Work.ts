export interface Work {
  date: DateClass
  title: string
  description: string
}

export interface DateClass {
  month: number
  year: number
}

export const works: Work[] = [
  {
    date: {
      month: 8,
      year: 2021
    },
    title: 'Desarrollador Web',
    description:
      'Responsable de la maquetación y diseño de determinadas secciones del sitio web. Implementación de una base de datos para almacenar los clientes interesados en el producto. Asimismo desarrollando una calculadora contable y una herramienta de presupuesto en línea.'
  },
]
