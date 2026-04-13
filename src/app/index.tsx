// Import de Pequenos Estilos Para Garantir Boa Visibilidade Por Padrão
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 

import { router } from 'expo-router';  // Import do Gerenciador de Rotas Nativo do React
import Button from '@/components/button'; // Import do Componente de Botão 

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
            <SafeAreaView>
                <Button
                    title='Fazer Login'
                    onPress={irAoLogin} // Ação Que o Botão Executa
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
