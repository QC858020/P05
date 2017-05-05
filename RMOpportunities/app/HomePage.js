import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  Picker,
  TextInput,
  Dimensions,
  TouchableHighlight,
  BackAndroid,
  ToastAndroid,
  Navigator,
  ScrollView,
} from 'react-native';
import Connexion from './connexion';
import inscription from './page3';

import Trad from './traduction';
var selectedKey2;

var width_window = Dimensions.get('window').width;
var height_window = Dimensions.get('window').height;
var selected = 'tlc';
var selectedKey = 'Toutes les categories';
var textInput = 'TextInput';

export default class Index extends Component {
	// Init this class and add 1 boolean value to check
	// if the user logined. We check this because when
	// users logined succesufully, two buttons should be hidden
	// in this page.
	constructor(props) {
		super(props);
	}

	// Picker: Users can choose many catagories here.
	// TextInput: Input Text, user input the key words that they want to search.
	// Button('Recherche'): Start search!
	render() {
		BackAndroid.addEventListener('Exit',this.onBackAndroid);
		return (
			<ScrollView>
				<View style={styles.container}>
					<Image source={require('../img/warehouse.jpg')} style={styles.imageBackground}>
						{(() => {
						// If user logined?
						if (connection == 1)
							return (
								<View style={styles.containerButton} />
							);
						else
							return (
								<View style={styles.containerButton}>
                                    <TouchableHighlight onPress={this.onPressConnexion} style={[styles.button, {width: width_window*0.5, backgroundColor:'#FFFFFF'}]} underlayColor="rgb(247,247,247)">
                                        <Text style={[styles.buttonText, {color:'black'}]}>{Trad[lang].connexion}</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={this.onPressInscription} style={[styles.button, {width: width_window*0.5, backgroundColor:'rgb(71,95,209)'}]} underlayColor="rgb(44,67,177)">
                                        <Text style={styles.buttonText}>{Trad[lang].inscription}</Text>
                                    </TouchableHighlight>
								</View>
							);
						})()}
						<View style={styles.mainContainer}>
							<View style={styles.containerPicker}>
								<Picker
									selectedValue={selected}
									onValueChange={this.onValueChange.bind(this,'value')}
									style={styles.picker} >
									<Picker.Item label={Trad[lang].ttes_cat} value="tlc" />
									<Picker.Item label={Trad[lang].cosm} value="Pcos" />
									<Picker.Item label={Trad[lang].solv} value="sol" />
									<Picker.Item label={Trad[lang].solv_reg} value="sol_r" />
									<Picker.Item label={Trad[lang].react} value="rea" />
									<Picker.Item label={Trad[lang].catal} value="cat" />
									<Picker.Item label={Trad[lang].spe_chi} value="spe" />
									<Picker.Item label={Trad[lang].interm} value="int" />
									<Picker.Item label={Trad[lang].interm_simple} value="int_s" />
									<Picker.Item label={Trad[lang].acides} value="aci" />
									<Picker.Item label={Trad[lang].bases} value="bas" />
									<Picker.Item label={Trad[lang].acid_ami} value="aci_a" />
									<Picker.Item label={Trad[lang].vit} value="vit" />
									<Picker.Item label={Trad[lang].autres} value="aut" />
								</Picker>
							</View>
							<View style={styles.contTexte}>

								<TextInput
									placeholder={Trad[lang].trouver_par}
									maxLength = {40}
									editable={true}
									style={styles.textInput}
									onChangeText={this.onResponderEndEditing}
								/>
							</View>
							<View style={styles.containerButtonR}>
								<TouchableHighlight onPress={this.onPressRecherche} style={{height: height_window*0.05, width: width_window*0.7, backgroundColor:'#A4D04A', justifyContent:'center'}} underlayColor="rgb(138,183,46)">
									<Text style={styles.buttonText}>{Trad[lang].recherche}</Text>
								</TouchableHighlight>
							</View>
						</View>
					</Image>
				</View>
			</ScrollView>
		);
	}
    _onLangChange = (key: string, value: string) => {
        lang = value;
        selectedKey2 = key;
		this.forceUpdate();
    };
	//Get the key words from user's choice.(catagories)
	onValueChange = (key: string, value: string) => {
		// This value (selectedKey) is same as the catagorie selected.
		selectedKey = key;
		selected = value;
		this.forceUpdate();
	};

	onBackAndroid = () => {
		//If user touch the button back 2 times in 2s, he/she will quit our app
		if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now())
		{
			BackAndroid.removeEventListener('Exit',this.onBackAndroid);
			return false;
		}
		this.lastBackPressed = Date.now();
		ToastAndroid.show('Cliquer deux fois pour quitter.',ToastAndroid.SHORT);
		return true;
	};

	onPressConnexion = () => {
		let _this = this;
		BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		// Create router and push page 'Connexion' into stack,
		// this will lead us to page 'Connexion'.
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
				name: 'Connexion',
				component: Connexion,
				params:{
      }
			})
		}
	};

  onPressInscription = () => {
    BackAndroid.removeEventListener('Exit',this.onBackAndroid);
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Inscription',
        component: inscription,
      })
    }
  };

  onPressRecherche = () => {
	  Alert.alert(textInput);
  };

  onResponderEndEditing = (text) => {
	textInput = text;
  };

}

const styles = StyleSheet.create({
	container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#F5FCFF',
			flexDirection: 'column',
	},
	containerButton: {
			flexGrow: 0,
			flexShrink: 0,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			height: 350,
			alignSelf: 'center',
	},
	mainContainer:{
		flexDirection: 'column',
	},
	containerButtonR: {
			width: width_window*0.7,
			height:height_window*0.05,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			alignSelf: 'center',
	},
	containerPicker: {
		justifyContent: 'center',
		width: width_window*0.7,
		height:height_window*0.05,
		alignSelf: 'center',

	},
	contTexte:{
		justifyContent: 'center',
		flexDirection: 'column',
		width: width_window*0.7,
		height:height_window*0.07,
		alignSelf: 'center',
	},
	imageBackground: {
			width: width_window,
			height: height_window,
	},
	picker: {
			//flexBasis: 120,
			
		backgroundColor: '#FFFFFF',
		padding:5,
	},
	textInput: {
			//flexBasis: 215,
			backgroundColor: '#a9a9a9',
	},
    button:{
        height: height_window*0.05,
        marginTop: 20,
        justifyContent: 'center',
        borderRadius:5,
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
});

module.exports = Index;