// Classe de Interface do Alert Criado

// Define um Contrato Que os Componentes de Alerta Devem Seguir
export interface AlertProps { 
    title: string; // Título do Alerta
    message: string; // Conteúdo do Alerta
    visible: boolean; // Váriavel do Estado da Visibilidade do Alerta
    onClose: () => void; // Função Interna do Alerta Para Encerrá-lo Sem Retorno 

    // Propriedade de Variações do Alerta
    type?: 'success' | 'error' | 'warning' | 'info'
}