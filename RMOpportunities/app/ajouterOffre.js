import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  BackAndroid,
  ScrollView,
  Picker,
} from 'react-native';
import Trad from './traduction';
import connexion_produit from './ajouter_produit_connexion';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var star = '*';
var step1 = true;
var step2 = false;
var selected_cat = 'choose';
var selected_cont = 'cont';

class AjouterOffreEtapes extends Component{
    constructor(props){
        super(props);
        this.state = {
            numID:'',
            nom:'',
            numReach:'',
            nomenc:'',
            categorie:'',
            description:'',
            qte:'',
            unite:'',
            prixUnit:'',
            contenant:'',
            paysOrigine:'',
            paysStock:'',
            ville:'',
            jour:'',
            mois:'',
            year:'',
        }
    }
    
    onCatChange = (key: string, value: string) => {
		selected_cat = value;
        this.state.categorie = value;
		this.forceUpdate();
	};
    
    onContChange = (key: string, value: string) => {
		selected_cont = value;
        this.state.contenant = value;
		this.forceUpdate();
	};
    
    render(){
        return(
        <View>
            {(()=>{
                if (step1){
                    return(
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', width:width}}>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.06, width:width*0.9, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>{Trad[lang].etape1}</Text>
                            </View>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.06, backgroundColor:"#F2F2F2", width:width*0.1, alignItems:'center', justifyContent:'center'}}>
                                <Text onPress={this._changeStep} style={{fontSize:22, color:"#000000"}}>2</Text>
                            </View>
                            <View style={{flex:1, backgroundColor:'#F2F2F2'}}/>
                        </View>
                        <View style={{alignItems:'flex-start'}}>
                            <TextInput style={[styles.textToFill, {marginLeft:width*0.1}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].num_id + star} onChangeText={(numID) => this.setState({numID})} value={this.state.numID}/>
                            <View style={{flexDirection:'row', marginLeft:width*0.1}}>
                                <TextInput style={[styles.textToFill, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].nom_prod + star} onChangeText={(nom) => this.setState({nom})} value={this.state.nom}/>
                                <TextInput style={[styles.textToFill, {width:width*0.35, marginLeft:width*0.05}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].num_reach} onChangeText={(numReach) => this.setState({numReach})} value={this.state.numReach}/>
                            </View>
                            <View>
                                <TextInput style={[styles.textToFill, {width:width*0.5, marginLeft:width*0.1}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].nom_douane} onChangeText={(nomenc) => this.setState({nomenc})} value={this.state.nomenc}/>
                            </View>
                            <View>
                                <View style={[styles.viewPicker, {width:width*0.8, marginLeft:width*0.1}]}>     
                                    <Picker style={{color:'grey', marginTop:0}} selectedValue={selected_cat} onValueChange={this.onCatChange.bind(this,'value')}> 
                                        <Picker.Item label={Trad[lang].choix_cat} value='choose' /> 
                                        <Picker.Item label={Trad[lang].cosm} value={Trad[lang].cosm} />
                                        <Picker.Item label={Trad[lang].solv} value={Trad[lang].solv} />
                                        <Picker.Item label={Trad[lang].solv_reg} value={Trad[lang].solv_reg} />
                                        <Picker.Item label={Trad[lang].react} value={Trad[lang].react} />
                                        <Picker.Item label={Trad[lang].catal} value={Trad[lang].catal} />
                                        <Picker.Item label={Trad[lang].spe_chi} value={Trad[lang].spe_chi} />
                                        <Picker.Item label={Trad[lang].interm} value={Trad[lang].interm} />
                                        <Picker.Item label={Trad[lang].interm_simple} value={Trad[lang].interm_simple} />
                                        <Picker.Item label={Trad[lang].acides} value={Trad[lang].acides} />
                                        <Picker.Item label={Trad[lang].bases} value={Trad[lang].bases} />
                                        <Picker.Item label={Trad[lang].acid_ami} value={Trad[lang].acid_ami} />
                                        <Picker.Item label={Trad[lang].vit} value={Trad[lang].vit} />
                                        <Picker.Item label={Trad[lang].autres} value={Trad[lang].autres} /> 
                                    </Picker>
                                </View>
                            </View>
                        </View>
                        <View style={{alignItems:'center', marginBottom: height*0.3}}>
                            <TouchableHighlight onPress={this._changeStep} style={[styles.button, {width: width *0.5, backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>{Trad[lang].suivant}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    );
                }else if (step2){
                    return(
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', width:width}}>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.06, width:width*0.1, alignItems:'center', backgroundColor:"#F2F2F2", justifyContent:'center'}}>
                                <Text onPress={this._changeStep} style={{fontSize:22, color:"#000000"}}>1</Text>
                            </View>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.06, width:width*0.9, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>{Trad[lang].etape2}</Text>
                            </View>
                            <View style={{flex:1, backgroundColor:'#F2F2F2'}}/>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View>
                                <TextInput style={[styles.textToFill, {height:height*0.2}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].description2} onChangeText={(description) => this.setState({description})} value={this.state.description}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill, {width:width*0.2}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].qtte + star} onChangeText={(qte) => this.setState({qte})} value={this.state.qte}/>
                                <TextInput style={[styles.textToFill, {width:width*0.2}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].unite + star} onChangeText={(unite) => this.setState({unite})} value={this.state.unite}/>                                
                                <TextInput style={[styles.textToFill, {width:width*0.3, marginLeft:20}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].prix_unit + star} onChangeText={(prixUnit) => this.setState({prixUnit})} value={this.state.prixUnit}/> 
                            </View>
                            <View><Text style={{fontSize:16, color:'#000000', marginTop:15}}>{Trad[lang].date_exp}</Text></View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill, {width:width*0.1}]} underlineColorAndroid={'transparent'} placeholder="1" onChangeText={(jour) => this.setState({jour})} value={this.state.jour}/>
                                <TextInput style={[styles.textToFill, {width:width*0.3, marginLeft:10}]} underlineColorAndroid={'transparent'} placeholder="janvier" onChangeText={(mois) => this.setState({mois})} value={this.state.mois}/>
                                <TextInput style={[styles.textToFill, {width:width*0.2, marginLeft:10}]} underlineColorAndroid={'transparent'} placeholder="2017" onChangeText={(year) => this.setState({year})} value={this.state.year}/>
                            </View>
                            <View>
                                <View style={[styles.viewPicker, {width:width*0.8}]}>     
                                    <Picker style={{color:'grey', marginTop:0}} selectedValue={selected_cont} onValueChange={this.onContChange.bind(this,'value')}> 
                                        <Picker.Item label={Trad[lang].cont_prod + star} value='cont' /> 
                                        <Picker.Item label={Trad[lang].ibc} value={Trad[lang].ibc} />
                                        <Picker.Item label={Trad[lang].ibc_flex} value={Trad[lang].ibc_flex} />
                                        <Picker.Item label={Trad[lang].conteneur} value={Trad[lang].conteneur} />
                                        <Picker.Item label={Trad[lang].tank_cont} value={Trad[lang].tank_cont} />
                                        <Picker.Item label={Trad[lang].palette} value={Trad[lang].palette} />
                                        <Picker.Item label={Trad[lang].bigbag} value={Trad[lang].bigbag} />
                                        <Picker.Item label={Trad[lang].plast} value={Trad[lang].plast} />
                                        <Picker.Item label={Trad[lang].metal} value={Trad[lang].metal} />
                                    </Picker>
                                </View>
                            </View>
                            <View>
                                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Trad[lang].origine_prod + star} onChangeText={(paysOrigine) => this.setState({paysOrigine})} value={this.state.paysOrigine}/>
                            </View>
                            <View>
                                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Trad[lang].stock_prod + star} onChangeText={(paysStock) => this.setState({paysStock})} value={this.state.paysStock}/>
                            </View>
                            <View>
                                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Trad[lang].ville_codep + star} onChangeText={(ville) => this.setState({ville})} value={this.state.ville}/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 30}}>
                            <TouchableHighlight onPress={this._changeStep} style={[styles.button, {width: width *0.4, backgroundColor:'white', borderWidth:1, borderColor:'#A4D04A'}]}>
                                <Text style={{color:'#A4D04A', fontSize:20, textAlign:'center'}}>{Trad[lang].precedent}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this._onPressSuivant2} style={[styles.button, {width: width *0.4, backgroundColor:'#A4D04A', marginLeft:10}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>{Trad[lang].suivant}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    );
                }
            })()}
        </View>
        );
    }
    
    _changeStep = () =>{
        step1 = !step1;
        step2 = !step2;
        this.forceUpdate();
    };        
}

export default class AjouterOffre extends Component{
    
    componentWillUpdate(){
        if (connection===0){
            const {navigator} = this.props;
            var i = 0;
            while(navigator.getCurrentRoutes()[i].name != 'Deposer offre'){
                i=i+1;
            }
            if (navigator){
                navigator.replaceAtIndex({
                    name: 'Connexion pour offre',
                    component: connexion_produit,
                }, i)
            }
        }
    }
    
    render(){
        return(
        <ScrollView>
            <View style={{height: height * 0.08}}/>
            <View style={styles.window}>
                <Text style={styles.titre}>
                    {Trad[lang].aj_offre}
                </Text>
                <View style={styles.mainWindow}>
                    <AjouterOffreEtapes/>
                </View>
            </View>
        </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
   window:{
       width: width,
       backgroundColor: '#F2F2F2',
       alignItems: 'center',
   },
   mainWindow:{
       width: width,
       backgroundColor: "#FFFFFF",
       alignItems: 'center',
   },
   titre:{
       fontSize: 32,
       textAlign: 'center',
       color: '#000000',
       marginTop: 15,
       marginBottom: 10
   },
   button:{
        height: height*0.05,
        marginTop: 20,
        borderRadius:5,
        justifyContent: 'center',
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
    textToFill:{
       width: width*0.8,
       height: height* 0.08,
       borderWidth: 1,
       borderColor: "#000000",
       marginTop: 15,
       color: 'grey',
       borderRadius: 3,
   },
   viewPicker:{
       width: width*0.8,
       height: height* 0.08,
       borderWidth: 1,
       borderColor: "#000000",
       marginTop: 15,
       borderRadius: 3,
   },
});