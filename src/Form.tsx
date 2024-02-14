import {TextInput, StyleSheet, View} from 'react-native';
import {Field} from './Field';

export function Form() {
  return (
    <View style={{padding: 20, gap: 20}}>
      <Field label="Primeiro nome">
        <TextInput style={styles.input} placeholder="Primeiro Nome" />
      </Field>
      <Field label="Sobrenome">
        <TextInput style={styles.input} placeholder="Sobrenome" />
      </Field>
      <Field label="Usuário">
        <TextInput style={styles.input} placeholder="Usuário" />
      </Field>
      <Field label="E-mail">
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
        />
      </Field>
      <Field label="Confirmar e-mail">
        <TextInput
          style={styles.input}
          placeholder="Confirmar e-mail"
          keyboardType="email-address"
        />
      </Field>
      <Field label="Telefone">
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="phone-pad"
        />
      </Field>
      <Field label="CPF">
        <TextInput
          style={styles.input}
          placeholder="CPF"
          keyboardType="number-pad"
        />
      </Field>
      <Field label="RG">
        <TextInput
          style={styles.input}
          placeholder="RG"
          keyboardType="number-pad"
        />
      </Field>
      <Field label="CEP">
        <TextInput
          style={styles.input}
          placeholder="CEP"
          keyboardType="number-pad"
        />
      </Field>
      <Field label="Endereço">
        <TextInput style={styles.input} placeholder="Endereço" />
      </Field>
      <Field label="Número">
        <TextInput style={styles.input} placeholder="Número" />
      </Field>
      <Field label="Bairro">
        <TextInput style={styles.input} placeholder="Bairro" />
      </Field>
      <Field label="Cidade">
        <TextInput style={styles.input} placeholder="Cidade" />
      </Field>
      <Field label="Estado">
        <TextInput style={styles.input} placeholder="Estado" />
      </Field>
      <Field label="Senha">
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      </Field>
      <Field label="Confirmar senha">
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
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
