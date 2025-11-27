import React, { useState } from "react";
import { View,Text, Image, StyleSheet} from "react-native";
import foto from "../img/foto";
import Botao from './Botao';

export default function CartaoUsuario({ nome, descricao, img}){
    const [curtidas, setCurtidas] = useState(0);
    const [mostrarPlusOne, setMostrarPlusOne] = useState(false);

    const handleCurtir = () => {
        setCurtidas(prev => prev + 1);
        setMostrarPlusOne(true);
        setTimeout(() => setMostrarPlusOne(false), 800);
    };

    return(
        <View style={estilos.cartao}>
            <Image source ={foto[img]} style={estilos.foto} />
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            
            <View style={estilos.acoes}>
                <Botao 
                    title="❤ Curtir" 
                    onPress={handleCurtir} 
                    style={{ marginTop: 12, flex: 1, minWidth: 120 }} 
                />
                {mostrarPlusOne && <Text style={estilos.plusOne}>+1</Text>}
                <Text style={estilos.contador}>{curtidas}</Text>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({

    cartao: {
        backgroundColor: '#e1f7f7',
        padding: 16,
        marginTop: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    foto: { width: 80, height: 80, borderRadius: 40, marginBottom: 10, },
    nome: { fontSize: 18, fontWeight: 'bold' },
    descricao: { fontSize: 14, color: '#555', textAlign: 'center' },
    acoes: { flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'center', gap: 8 },
    plusOne: { color: '#16a34a', fontWeight: '700', fontSize: 14 },
    contador: { color: '#333', fontWeight: '600', fontSize: 14 },
})