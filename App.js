import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      alcool: 0,
      gasolina: 0,
      visibleModal: false,
      melhorOpc: '',
    }


    this.calcular = this.calcular.bind(this);
    this.calculardnv = this.calculardnv.bind(this);
  }

  calcular() {
    const gasolina = this.state.gasolina;
    const alcool = this.state.alcool;

    console.log(gasolina, alcool)


    if (gasolina == 0 || alcool == 0) {
      alert('digite um valor nos campos de alcool ou gasolina');
      return;
    }

    this.setState({ visibleModal: true })
    if (alcool / gasolina <= 0.7) {
      this.setState({ melhorOpc: 'A melhor opção para abastecer é com alcool' });
    } else {
      this.setState({ melhorOpc: 'A melhor opção para abastecer é com gasolina' });
    }

  }

  calculardnv() {
    this.setState({
      visibleModal: false,
      alcool: 0,
      gasolina: 0,
    })
  }

  // componentDidUpdate() {
  //   console.log(this.state.gasolina, this.state.alcool)
  // }


  render() {
    return (
      <View style={s.container} >
        <Image style={s.image} source={require('./assets/src/logo.png')} />
        <Text style={s.title}>Qual a melhor opção?</Text>

        <Text style={s.labelText}>Alcool (preço por litro)</Text>
        <TextInput style={s.inputAlcool} value={this.state.alcool} onChangeText={(value) => { this.setState({ alcool: value }) }} keyboardType='numeric' />

        <Text style={s.labelText2}>Gasolina (preço por litro)</Text>
        <TextInput style={s.inputAlcool} value={this.state.gasolina} onChangeText={(value) => { this.setState({ gasolina: value }) }} keyboardType='numeric' />


        <TouchableOpacity style={s.btnCalcular} onPress={this.calcular}>
          <Text style={s.txtBtn}>Calcular</Text>
        </TouchableOpacity>

        <Modal visible={this.state.visibleModal}>
          <View style={s.viewModal}>
            <Image style={s.image} source={require('./assets/src/gas.png')} />
            <Text style={s.titleModal}>{this.state.melhorOpc}</Text>

            <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff' }}>Com os Preços: </Text>
            <Text style={{ fontSize: 18, color: '#fff' }}>Alcool: {this.state.alcool}</Text>
            <Text style={{ fontSize: 18, color: '#fff' }}>Gasolina: {this.state.gasolina}</Text>

            <TouchableOpacity style={s.btnCalcularDnv} onPress={this.calculardnv}>
              <Text style={s.txtBtnModal}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
        </Modal>


      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
  },
  viewModal: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center'
  },
  image: {
    marginTop: '20%',
  },
  title: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  titleModal: {
    color: '#32a852',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  inputAlcool: {
    backgroundColor: '#fff',
    width: '90%',
    height: 55,
    borderRadius: 15,
  },
  labelText: {
    color: '#fff',
    alignSelf: 'flex-start', // Alinha o texto à esquerda do contêiner
    marginLeft: '5%', // Ajuste opcional para dar um espaçamento à esquerda
    marginBottom: 5,
    marginTop: '15%',
  },
  labelText2: {
    color: '#fff',
    alignSelf: 'flex-start', // Alinha o texto à esquerda do contêiner
    marginLeft: '5%', // Ajuste opcional para dar um espaçamento à esquerda
    marginBottom: 5,
    marginTop: '5%',
  },
  btnCalcular: {
    width: '90%',
    backgroundColor: '#FF6347', // Cor do botão
    borderRadius: 10,
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnCalcularDnv: {
    width: '50%',
    backgroundColor: 'transparent', // Cor do botão
    borderRadius: 10,
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FF6347',
    borderWidth: 1.5,
  },
  txtBtn: {
    color: '#fff',
    fontWeight: 'bold',
  },
  txtBtnModal: {
    fontSize: 20,
    color: '#FF6347',
    fontWeight: 'bold',
  },

});

export default App;