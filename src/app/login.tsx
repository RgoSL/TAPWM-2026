import Button from "@/components/button"; // Import do Componente de Botão 
import { router } from "expo-router"; // Import do Gerenciador de Rotas Nativo do React
import { useState } from 'react'; // Import do Gerenciador de Estados Nativo do React
import { TextInput } from 'react-native'; // Import do Input Diretamente do React

// Import de Pequenos Estilos Para Garantir Boa Visibilidade Por Padrão
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 

// Função Base do Arquivo 
export default function Login () {

    // Criando Uma Váriavel Para Receber o Nome e um Método Para Alterar Esse Valor
    const [nome, setNome] = useState('');

    // Função de Navegação de Telas Com o Router
    function irHome () {
        router.push({
            pathname: '/dashboard', // Arquivo Que o Router Vai Procurar
            params: {name : nome} // Parâmetros Que o Router Vai Enviar Para Essa Página
        })
    }

    // Retorno Da Tela de Login
    return(

        // O Provider Calcula e Fornece os Dados Para o AreaView, e o View Posiciona os Elementos de Fato
        <SafeAreaProvider>
            <SafeAreaView> 
                <TextInput
                    value={nome} // Onde São Guardados os Valores Digitados
                    onChangeText={setNome} // O Que Fazer Quando o Valor For Alterado
                    placeholder="Digite seu nickname"
                />
                <Button 
                title="Entrar" 
                onPress={irHome} // Ação Que o Botão Executa
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}