// Classe Destinada a Setar Todas as Cores Utilizadas no App

export const Colors = { // Exportação do Objeto Que Guarda a Definição de Cores do Projeto

    white: '#FFF',
    black: '#000',
    background: '#F5F5F5',

    semantic: { // A Declaração de Semantics Diz Respeito a Exceções de Estilos Que Cada Tipo de Alerta Tem
        error: {
            bg: '#FFEBEE',
            border: '#B71C1C',
            text: '#B71C1C'
        },
        success: {
            bg: '#E8F5E9',
            border: '#1B5E20',
            text: '#1B5E20'
        },
        warning: {
            bg: '#FFF8E1',
            border: '#FF8F00',
            text: '#FF8F00'
        },
        info: {
            bg: '#E3F2FD',
            border: '#2196F3',
            text: '#0D47A1'
        }
    },

    // É  Também Uma Convenção Especificar as Cores Por Centésimos, Sendo os Valores Menores os Mais Claros
    gray: {
        100: '#F2F2F2',
        500: '#999999',
        800: '#333333',
    }

} as const