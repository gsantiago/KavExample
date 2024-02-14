import React, {useState} from 'react';
import {View, Button, Text, Switch, StyleSheet, Platform} from 'react-native';
import Select from 'react-native-picker-select';
import {ScreenProps, DemoScreenProps} from './types';
import {Field} from '../Field';

const FORM_FIELDS = {
  SOLUCAO: [
    {label: 'useKeyboardHeight', value: 'useKeyboardHeight'},
    {label: 'KeyboardAvoidingView', value: 'KeyboardAvoidingView'},
    {label: 'useAnimatedKeyboard', value: 'useAnimatedKeyboard'},
  ],
  ESTRATEGIA: [
    {label: 'padding', value: 'padding'},
    {label: 'position', value: 'position'},
    {label: 'height', value: 'height'},
  ],
  CONTEUDO: [
    {label: 'chat', value: 'chat'},
    {label: 'webview', value: 'webview'},
  ],
};

export function IndexScreen({navigation}: ScreenProps<'Index'>) {
  const [solucao, setSolucao] =
    useState<DemoScreenProps['type']>('useKeyboardHeight');

  const [estrategia, setEstrategia] =
    useState<DemoScreenProps['behavior']>('padding');

  const [conteudo, setConteudo] = useState<DemoScreenProps['content']>('chat');

  const [displayHeader, setDisplayHeader] =
    useState<DemoScreenProps['hasHeader']>(false);

  return (
    <View style={styles.screen}>
      <Field label="Solução">
        <Select
          value={solucao}
          onValueChange={s => {
            setSolucao(s);

            if (s === 'useAnimatedKeyboard') {
              setEstrategia('padding');
            }
          }}
          items={FORM_FIELDS.SOLUCAO}
        />
      </Field>
      <Field label="Estratégia">
        <Select
          value={estrategia}
          onValueChange={setEstrategia}
          items={
            solucao === 'useAnimatedKeyboard'
              ? [FORM_FIELDS.ESTRATEGIA[0]]
              : FORM_FIELDS.ESTRATEGIA
          }
        />
      </Field>
      <Field label="Conteúdo">
        <Select
          value={conteudo}
          onValueChange={setConteudo}
          items={FORM_FIELDS.CONTEUDO}
        />
      </Field>
      <View style={styles.switch}>
        <Text style={styles.switchLabel}>Display Header</Text>
        <Switch value={displayHeader} onValueChange={setDisplayHeader} />
      </View>
      <Button
        title="Gerar"
        onPress={() =>
          navigation.navigate('Demo', {
            type: solucao,
            behavior: estrategia,
            content: conteudo,
            hasHeader: displayHeader,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: Platform.select({ios: 50, android: 30}),
    gap: 20,
  },
  switch: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  switchLabel: {
    flexGrow: 1,
    color: '#111',
    fontSize: 18,
  },
});
