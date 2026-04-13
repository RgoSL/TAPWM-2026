// Import de Pequenos Estilos Para Garantir Boa Visibilidade Por Padrão
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 
import { router } from 'expo-router';  // Import do Gerenciador de Rotas Nativo do React
import Button from '@/components/button'; // Import do Componente de Botão 
import { Text, StyleSheet } from 'react-native'; // Import Do Componente Texto e da Propriedade de Estilos

// Função Base do Arquivo 
export default function Index () {
    
     // Função de Navegação de Telas Com o Router
    function irAoLogin(){
        router.push({
            pathname: '/login' // Arquivo Que o Router Vai Procurar
        })
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style = {styles.container}> {/* Aplicando os Estilos do Método a Área Segura */}
                <Text style = {styles.title}>Primeiro App</Text> {/* Aplicando os Estilos do Método ao Título */}
                <Button
                    title='Fazer Login'
                    onPress={irAoLogin} // Ação Que o Botão Executa
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
        }
    });