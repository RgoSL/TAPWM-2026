import Button from "@/components/button"; // Import do Componente de Botão 
import { router } from "expo-router"; // Import do Gerenciador de Rotas Nativo do React
import { useState } from 'react'; // Import do Gerenciador de Estados Nativo do React
import { TextInput, Text, StyleSheet } from 'react-native'; // Import do Input, Dos Estilos e do Texto Diretamente do React

// Import de Pequenos Estilos Para Garantir Boa Visibilidade Por Padrão
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 

// Função Base do Arquivo 
export default function Login () {

    // Criando Uma Váriavel Para Receber o Nome e um Método Para Alterar Esse Valor
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    // Função de Navegação de Telas Com o Router
    function irHome () {
        router.push({
            pathname: '/dashboard', // Arquivo Que o Router Vai Procurar
            params: {name : nome, senha : senha } // Parâmetros Que o Router Vai Enviar Para Essa Página
        })
    }

    // Retorno Da Tela de Login
    return(

        // O Provider Calcula e Fornece os Dados Para o AreaView, e o View Posiciona os Elementos de Fato
        <SafeAreaProvider>
            <SafeAreaView style = {styles.container}> 
                <Text style = {styles.title}> Acesse Sua Conta!</Text> 
                <TextInput
                    style= {styles.input} // Aplicando o Método de Estilo no Input
                    value={nome} // Onde São Guardados os Valores Digitados
                    onChangeText={setNome} // O Que Fazer Quando o Valor For Alterado
                    placeholder="Usuário"
                />
                <TextInput
                    style= {styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Senha"
                />
                <Button 
                title="ENTRAR" 
                onPress={irHome} // Ação Que o Botão Executa
                style={{marginTop: 10 }} // Adicionando um Estilo Inline ao Botão
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

    // Método de Estilização Da Página
    const styles = StyleSheet.create({
        container: { // Estilização do Bloco Que Segura Todos os Componentes
            flex: 1, // Especifica o Quanto da Tela o Elemento Vai Ocupar, Nesse Caso, a Tela Inteira
            justifyContent: 'center', // Alinhamento Dos Elementos Dentro do Container
            padding: 20, // Distância do Centro Em Relação a Todas as 4 Bordas
        },

        title: { // Estilização do Título da Tela
           fontSize: 28, // O Tamanho do Texto
            fontFamily: 'Arial', // Fonte Que o Texto Terá
            fontWeight: 'bold', // O Quão Forte é o Traço do Texto
            textAlign: 'center', // O Alinhamento do Texto
            marginBottom: 30, // A Distância do Texto em Relação a Parte de Baixo da Tela
            color: '#900f25', // A Cor do Texto
        },

        input: { // Estilização Dos Campos Para Dados na Tela
            width: '100%', // Quanto Horizontalmente o Input Vai Ocupar
            borderWidth: 1, // A Espessura da Borda
            borderColor: '#960018', // A Cor da Borda
            borderRadius: 15, // O Quão Arredondado Serão as Bordas
            color: '#424141c4', // A Cor do Texto Dentro do Input
            padding: 12, // A Distância do Centro em Relação as 4 Bordas
            marginBottom: 15, // A Distância Vertical Entre os 2 Inputs e o Botão
        },
    });