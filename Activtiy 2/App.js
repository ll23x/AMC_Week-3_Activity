import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [address, setAdress] = React.useState('');
  const [school, setSchool] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [email, setEMail] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [value, setMulti] = React.useState('');
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[
          styles.container,
          {
            backgroundColor: value,
          },
        ]}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAge}
          value={age}
          placeholder="Age:"
        />
         <TextInput
          style={styles.input}
          onChangeText={setAdress}
          value={address}
          placeholder="Address:"
          
        />
         <TextInput
          style={styles.input}
          onChangeText={setSchool}
          value={school}
          placeholder="School:"
          
        />
         <TextInput
          style={styles.input}
          onChangeText={setCourse}
          value={course}
          placeholder="Course:"
         
        />
         <TextInput
          style={styles.input}
          onChangeText={setEMail}
          value={email}
          placeholder="Email:"
        
        />
         <TextInput
          style={styles.input}
          onChangeText={setContact}
          value={contact}
          placeholder="Contact No:"
        />

         <TextInput
          editable
          multiline
          numberOfLines={5}
          maxLength={100}
          onChangeText={text => setMulti(text)}
          value={value}
          style={styles.textInput}
          placeholder="ALL ABOUT ME:"
        />
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  textInput: {
    padding: 10,
  },
});

export default TextInputExample;