import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Messages, MessageType} from './Messages';
import {Input} from './Input';

export function Chat() {
  const [messages, setMessages] = useState<MessageType[]>(() =>
    mockMessages.reverse(),
  );

  return (
    <View style={styles.container}>
      <Messages messages={messages} />
      <Input
        onSubmit={message =>
          setMessages(msgs => [{body: message, from: 'user'}, ...msgs])
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
});

const mockMessages = [
  {
    body: 'Olá, Fulano, tudo bem?',
    from: 'user',
  },
  {
    body: 'Olá, estou bem e você? O que está fazendo?',
    from: 'guest',
  },
  {
    body: 'Estou aprendendo um pouco de React Native! Uma tecnologia interessante que permite desenvolver apps para Android e iOS com a mesma base de código!',
    from: 'user',
  },
  {
    body: 'Ah, que legal! Tipo Flutter?',
    from: 'guest',
  },
  {
    body: 'Sim, tipo Flutter...',
    from: 'user',
  },
  {
    body: 'E o que aprendeu até o momento?',
    from: 'guest',
  },
  {
    body: 'Algumas coisas básicas como Views, estilos, FlatLists, etc. Estou inclusive desenvolvendo um pequeno chat de exemplo, com firebase real time e tudo!',
    from: 'user',
  },
  {
    body: 'E tem funcionando bem?',
    from: 'guest',
  },
  {
    body: 'Por enquanto está tudo certo!',
    from: 'user',
  },
  {
    body: 'Conseguiu testar tanto no iOS como no Android?',
    from: 'guest',
  },
  {
    body: 'Não... por enquanto só estou testando no emulador do Android',
    from: 'user',
  },
  {
    body: 'Lembre-se que é importante testar no iOS também. Não só em emuladores e simuladores, mas também em dispositivos físicos!',
    from: 'guest',
  },
  {
    body: 'Verdade! Vou aproveitar para testar no iOS para ver como está ficando o meu app',
    from: 'user',
  },
  {
    body: 'Boa sorte!',
    from: 'guest',
  },
];
