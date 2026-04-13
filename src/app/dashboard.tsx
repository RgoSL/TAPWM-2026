// Import Utilizado Para a Página Poder Receber os Dados Enviados Pelo Login Via Router
import { useLocalSearchParams } from 'expo-router';
import {Text} from 'react-native'; // Import Do Texto Utilizado

// Import de Pequenos Estilos Para Garantir Boa Visibilidade Por Padrão
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 

// Função Base do Arquivo 
export default function Dashboard() {   
    
    // Váriavel Que Recebe o Valor Passado Pela Página Login
    const { name } = useLocalSearchParams(); 

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Bem Vindo, {name}</Text> 
            </SafeAreaView>
        </SafeAreaProvider>
    )
}