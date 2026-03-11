import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  StatusBar
} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('Insira os dados');
  const [cor, setCor] = useState('#2C2C2C'); 

  const handleAlturaChange = (text) => {
    const apenasNumeros = text.replace(/\D/g, '');
    let alturaFormatada = apenasNumeros;
    
    if (apenasNumeros.length > 2) {
      alturaFormatada = `${apenasNumeros.slice(0, 1)}.${apenasNumeros.slice(1, 3)}`;
    } else if (apenasNumeros.length > 1) {
       alturaFormatada = `${apenasNumeros.slice(0, 1)}.${apenasNumeros.slice(1)}`;
    }
    
    setAltura(alturaFormatada.slice(0, 4));
  };

  const calcularIMC = () => {
    const p = parseFloat(peso.replace(',', '.'));
    const a = parseFloat(altura); 

    if (isNaN(p) || isNaN(a) || a <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const valorImc = (p / (a * a)).toFixed(1);
    setImc(valorImc);

    if (valorImc < 18.5) {
      setClassificacao('Magreza');
      setCor('#3498db'); 
    } else if (valorImc >= 18.5 && valorImc <= 24.9) {
      setClassificacao('Normal');
      setCor('#2ecc71'); 
    } else if (valorImc >= 25 && valorImc <= 29.9) {
      setClassificacao('Sobrepeso');
      setCor('#f1c40f'); 
    } else if (valorImc >= 30 && valorImc <= 39.9) {
      setClassificacao('Obesidade');
      setCor('#e67e22'); 
    } else {
      setClassificacao('Obesidade Grave');
      setCor('#e74c3c'); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>WSP</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.title}>REACT NATIVE - IMC</Text>
          
          <View style={styles.inputGroup}>
            <View style={[styles.resultBox, { backgroundColor: cor }]}>
              <Text style={styles.resultLabel}>Seu IMC</Text>
              <Text style={styles.resultValue}>{imc !== null ? imc : '--'}</Text>
              <Text style={styles.resultStatus}>{classificacao}</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Peso (kg) ex: 75.5"
              keyboardType="numeric"
              value={peso}
              onChangeText={setPeso}
              placeholderTextColor="#A0A0A0" 
            />

            <View>
              <TextInput
                style={styles.input}
                placeholder="Altura (ex: 175 para 1.75m)"
                keyboardType="numeric"
                value={altura}
                onChangeText={handleAlturaChange} 
                maxLength={4} 
                placeholderTextColor="#A0A0A0" 
              />
              <Text style={styles.helpText}>Digite apenas os números (ex: 175)</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={calcularIMC}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>VEJA A INTERPRETAÇÃO DO IMC</Text>
          </View>
          <View style={styles.tableRowLabel}>
            <Text style={styles.columnHeader}>IMC</Text>
            <Text style={styles.columnHeader}>CLASSIFICAÇÃO</Text>
            <Text style={styles.columnHeader}>GRAU</Text>
          </View>
          <TableRow label="MENOR QUE 18,5" desc="MAGREZA" grau="0" />
          <TableRow label="ENTRE 18,5 E 24,9" desc="NORMAL" grau="0" />
          <TableRow label="ENTRE 25,0 E 29,9" desc="SOBREPESO" grau="I" />
          <TableRow label="ENTRE 30,0 E 39,9" desc="OBESIDADE" grau="II" />
          <TableRow label="MAIOR QUE 40,0" desc="OBESIDADE GRAVE" grau="III" />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const TableRow = ({ label, desc, grau }) => (
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>{label}</Text>
    <Text style={styles.tableCell}>{desc}</Text>
    <Text style={[styles.tableCell, { textAlign: 'center' }]}>{grau}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  logoContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20, 
  },
  logoText: {
    fontSize: 56,
    fontWeight: '900',
    color: '#8E2DE2', // Roxo principal da sua marca
    letterSpacing: 4,
    textShadowColor: 'rgba(142, 45, 226, 0.4)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
  },
  card: {
    backgroundColor: '#1E1E1E', 
    width: '90%',
    maxWidth: 400,
    borderRadius: 15,
    padding: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E0E0', 
    marginBottom: 20,
  },
  resultBox: {
    width: 140, 
    height: 110,
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1, 
    borderColor: '#333',
  },
  resultLabel: { color: '#E0E0E0', fontSize: 13 },
  resultValue: { color: '#E0E0E0', fontSize: 26, fontWeight: 'bold' },
  resultStatus: { color: '#E0E0E0', fontSize: 15, fontWeight: '500' },
  inputGroup: {
    width: '100%',
  },
  input: {
    backgroundColor: '#2A2A2A', 
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    fontSize: 16,
    color: '#E0E0E0', 
    borderWidth: 1,
    borderColor: '#444',
  },
  helpText: {
    fontSize: 10,
    color: '#A0A0A0', 
    marginTop: -8,
    marginBottom: 10,
    paddingLeft: 5,
  },
  button: {
    backgroundColor: '#63449c', 
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  table: {
    width: '90%',
    maxWidth: 600,
    backgroundColor: '#1E1E1E', 
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  tableHeader: {
    backgroundColor: '#0D47A1', 
    padding: 12,
  },
  tableHeaderText: {
    color: '#E0E0E0',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  tableRowLabel: {
    flexDirection: 'row',
    backgroundColor: '#262626',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  columnHeader: {
    flex: 1,
    color: '#A0A0A0',
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingVertical: 10,
  },
  tableCell: {
    flex: 1,
    color: '#E0E0E0',
    fontSize: 12,
    textAlign: 'center',
  },
});