import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [frase, setFrase] = useState();
  const [fechado, setFechado] = useState(true);

  const listaFrases = [
    'Permita-se não saber das coisas. Ignorância é não querer saber.',
    'Aprenda com o Passado, trabalhe para melhorar o Futuro, mas sinta o Presente. Viva o Presente.',
    'O caminho árduo é o caminho certo.',
    'Se você não fizer por você, nimguém vai.',
    'Não importa quanto tempo leve. Se precisa ser feito, apenas faça. O tempo vai passar de qualquer jeito',
    'Não pense que é capaz. Saiba que você é.',
    'Cedo ou tarde você vai aprender a diferença entre conhecer o caminho e trilhar o caminho.',
    'Agradar as pessoas o tempo todo significa anular a própria identidade',
    'O campeão é feito de 99% discplina e 1% motivação',
    'O sucesso é a consequência de várias tentativas e erros.',
    'Importante não é vencer todos os dias, mas lutar sempre.',
  ];

  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * listaFrases.length);
    setFrase(' " ' + listaFrases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'));
    setFechado(false);
  }

  function reiniciar() {
    setFrase('');
    setImg(require('./src/biscoito.png'));
    setFechado(true);
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text style={styles.textoMensagem}>{frase}</Text>
      {fechado && (
        <TouchableOpacity style={styles.botao}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto} onPress={quebrarBiscoito}>
              Quebrar biscoito
            </Text>
          </View>
        </TouchableOpacity>
      )}
      {!fechado && (
        <TouchableOpacity
          style={[styles.botao, {borderColor: '#121212', marginTop: 20}]}
          onPress={reiniciar}>
          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, {color: '#121212'}]}>
              Reiniciar biscoito
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textoMensagem: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    alignItems: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 3,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
