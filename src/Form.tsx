import {TextInput, StyleSheet, View} from 'react-native';
import {Field} from './Field';
import {useRef} from 'react';

export function Form() {
  const refs = useRef<{key: string; el: TextInput | null}[]>([]);

  const focus = (key: string) => {
    refs.current.find(obj => obj.key === key)?.el?.focus?.();
  };

  return (
    <View style={{padding: 20, gap: 20}}>
      <Field label="Primeiro nome">
        <TextInput
          style={styles.input}
          placeholder="Primeiro Nome"
          ref={el => refs.current.push({key: 'Primeiro nome', el})}
          onSubmitEditing={() => focus('Sobrenome')}
        />
      </Field>
      <Field label="Sobrenome">
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          ref={el => refs.current.push({key: 'Sobrenome', el})}
          onSubmitEditing={() => focus('Usuário')}
        />
      </Field>
      <Field label="Usuário">
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          ref={el => refs.current.push({key: 'Usuário', el})}
          onSubmitEditing={() => focus('E-mail')}
        />
      </Field>
      <Field label="E-mail">
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          ref={el => refs.current.push({key: 'E-mail', el})}
          onSubmitEditing={() => focus('Confirmar e-mail')}
        />
      </Field>
      <Field label="Confirmar e-mail">
        <TextInput
          style={styles.input}
          placeholder="Confirmar e-mail"
          ref={el => refs.current.push({key: 'Confirmar e-mail', el})}
          onSubmitEditing={() => focus('Telefone')}
        />
      </Field>
      <Field label="Telefone">
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          ref={el => refs.current.push({key: 'Telefone', el})}
          onSubmitEditing={() => focus('CPF')}
        />
      </Field>
      <Field label="CPF">
        <TextInput
          style={styles.input}
          placeholder="CPF"
          ref={el => refs.current.push({key: 'CPF', el})}
          onSubmitEditing={() => focus('RG')}
        />
      </Field>
      <Field label="RG">
        <TextInput
          style={styles.input}
          placeholder="RG"
          ref={el => refs.current.push({key: 'RG', el})}
          onSubmitEditing={() => focus('CEP')}
        />
      </Field>
      <Field label="CEP">
        <TextInput
          style={styles.input}
          placeholder="CEP"
          ref={el => refs.current.push({key: 'CEP', el})}
          onSubmitEditing={() => focus('Endereço')}
        />
      </Field>
      <Field label="Endereço">
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          ref={el => refs.current.push({key: 'Endereço', el})}
          onSubmitEditing={() => focus('Número')}
        />
      </Field>
      <Field label="Número">
        <TextInput
          style={styles.input}
          placeholder="Número"
          ref={el => refs.current.push({key: 'Número', el})}
          onSubmitEditing={() => focus('Bairro')}
        />
      </Field>
      <Field label="Bairro">
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          ref={el => refs.current.push({key: 'Bairro', el})}
          onSubmitEditing={() => focus('Cidade')}
        />
      </Field>
      <Field label="Cidade">
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          ref={el => refs.current.push({key: 'Cidade', el})}
          onSubmitEditing={() => focus('Estado')}
        />
      </Field>
      <Field label="Estado">
        <TextInput
          style={styles.input}
          placeholder="Estado"
          ref={el => refs.current.push({key: 'Estado', el})}
          onSubmitEditing={() => focus('Senha')}
        />
      </Field>
      <Field label="Senha">
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          ref={el => refs.current.push({key: 'Senha', el})}
          onSubmitEditing={() => focus('Confirmar senha')}
        />
      </Field>
      <Field label="Confirmar senha">
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
          ref={el => refs.current.push({key: 'Confirmar senha', el})}
        />
      </Field>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 4,
  },
});
