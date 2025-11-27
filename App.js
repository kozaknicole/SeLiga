import React from 'react';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import FotoPerfil from './componentes/Fotoperfil';
import Titulo from './componentes/Titulo';
import Saudacao from './componentes/Saudacao';
import CartaoUsuario from './componentes/CartaoUsuario';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Titulo texto="Minha Rede de Contatos" />
      <Saudacao nome="Nicole" />
      <FotoPerfil />

      <CartaoUsuario
        nome='Nicole '
        descricao='Departamento de TI'
        img='perfil03'
      />

      <CartaoUsuario
        nome='Maria'
        descricao='Analista de Sistemas'
        img='perfil01'
      />

      <CartaoUsuario
        nome='Ana'
        descricao='Programação Mobile'
        img='perfil02'
      />

      <CartaoUsuario
        nome='Laura'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Lara'
        descricao='Amiga'
        img='perfil05'
      />

      <CartaoUsuario
        nome='Izadora'
        descricao='Dançarina'
        img='perfil06'
      />

      <CartaoUsuario
        nome='Bruno'
        descricao='Colega'
        img='perfil07'
      />

      <CartaoUsuario
        nome='Emanuelly'
        descricao='Amiga'
        img='perfil08'
      />

      <CartaoUsuario
        nome='Natalia'
        descricao='Modelo'
        img='perfil09'
      />

      <CartaoUsuario
        nome='Mariele'
        descricao='Amiga'
        img='perfil10'
      />

      <CartaoUsuario
        nome='Cauan'
        descricao='Engenheiro'
        img='perfil11'
      />

      <CartaoUsuario
        nome='Pedro'
        descricao='Encanador'
        img='perfil12'
      />

      <CartaoUsuario
        nome='João'
        descricao='Vizinho'
        img='perfil13'
      />

      <CartaoUsuario
        nome='Mariana'
        descricao='Pedagoga'
        img='perfil14'
      />

      <CartaoUsuario
        nome='Livia'
        descricao='Dentista'
        img='perfil15'
      />

      <CartaoUsuario
        nome='Diego'
        descricao='Fisioterapeuta'
        img='perfil16'
      />

      <CartaoUsuario
        nome='Camila'
        descricao='Prima'
        img='perfil17'
      />

      <CartaoUsuario
        nome='Elisa'
        descricao='Madrasta'
        img='perfil18'
      />

      <CartaoUsuario
        nome='Felipe'
        descricao='Pai'
        img='perfil19'
      />

      <CartaoUsuario
        nome='Gabriela'
        descricao='Mãe'
        img='perfil20'
      />

      <CartaoUsuario
        nome='Henrique'
        descricao='Irmão'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Isabela'
        descricao='Avó'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Karina'
        descricao='Amiga'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Nicolas'
        descricao='Primo'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Olivia'
        descricao='Madrinha'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Sabrina'
        descricao='Prima'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Thiago'
        descricao='Pedreiro'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Vitoria'
        descricao='Faxineira'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Yasmin'
        descricao='Enfermeira'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Bianca'
        descricao='Promotora'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Eduardo'
        descricao='Garçom'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Caio'
        descricao='Motorista'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Fernanda'
        descricao='Diarista'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Guilherme'
        descricao='Pediatra'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Kauã'
        descricao='Policial'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Igor'
        descricao='Bombeiro'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Juliana'
        descricao='Babá'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Daniela'
        descricao='Médica'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Helena'
        descricao='Assistente Social'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Rodrigo'
        descricao='Personal Trainer'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Samara'
        descricao='Advogada'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Vinicius'
        descricao='Barbeiro'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Zoe'
        descricao='Obstreta'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Ursula'
        descricao='Corretora de Imóveis'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Yago'
        descricao='Designer Gráfico'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Xênia'
        descricao='Arquiteta'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Priscilla'
        descricao='Bibliotecária'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Bianca'
        descricao='Fotógrafa'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Rafaele'
        descricao='Jornalista'
        img='perfil21'
      />

      <CartaoUsuario
        nome='Zeca'
        descricao='Eletrecista'
        img='perfil21'
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
  },
  lista: {
    padding: 12,
  },
});