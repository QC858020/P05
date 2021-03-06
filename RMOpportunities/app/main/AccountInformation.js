import React, { Component } from 'react';
import Translation from './Translation';

import {
  StyleSheet,
  Text,
  BackAndroid,
  View,
  Dimensions,
  ListView
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

//We change this and add some foncs to realise
//the display of the list of factures when we need.
var dataSource = null;

export default class AccountInformation extends Component {
  constructor(props) {
  super(props);
  var ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  var ds3 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  // datasources are account information showed in the list.ListView will use these things to show these in a list format
  // In the future,these datas would be delivered by the remote
  this.state = {
	dataSource1: ds1.cloneWithRows([Translation[lang].denomination, Translation[lang].adresse , Translation[lang].num_tva_inter]),
    dataSource2: ds1.cloneWithRows(['NULL1', 'NULL2',"NULL3"]),
	dataSource3: ds1.cloneWithRows([Translation[lang].nom_info , Translation[lang].ad_mail , Translation[lang].num_tel]),
  };

}
    //Function called when the component is updating. If the user logs out, we go back to HomePage
    componentWillUpdate(){
        if (connection===0){
            const {navigator} = this.props;
            navigator.popToTop();
        }
    }
    
  render() {
	BackAndroid.addEventListener('Back',this.onBackAndroid);
    return (
      <View style={styles.container}>
        <View style={{height:height*0.08}}/>
    		<View style={styles.containerMain}>

    			<View style = {styles.containerText}>
    				<Text style = {styles.title}>
    					{Translation[lang].info}
    				</Text>
    				<Text style = {styles.instructions}>
    					{Translation[lang].text_info}
    				</Text>
    			</View>


          <View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start',marginLeft:5}}>
            <Text style = {styles.titleAV}>
                {Translation[lang].entreprise}
            </Text>
          </View>
          <View style={styles.containerEntreprise}>
            <View style={{flex:1}}>
            <ListView
              contentContainerStyle={styles.containerEntrepriseGauche}
              dataSource={this.state.dataSource1}
              renderRow={(rowData) => <Text>{rowData}</Text>}/>
            </View>
            <View style={{flex:1.8}}>
              <ListView
              contentContainerStyle={styles.containerEntrepriseDroite}
              dataSource={this.state.dataSource2}
              renderRow={(rowData) => <Text>{rowData}</Text>}/>
            </View>
          </View>

          <View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start',marginLeft:5}}>
            <Text style = {styles.titleAV}>
                {Translation[lang].representant}
            </Text>
          </View>
          <View style={styles.containerEntreprise}>
            <View style={{flex:1}}>
            <ListView
              contentContainerStyle={styles.containerEntrepriseGauche}
              dataSource={this.state.dataSource3}
              renderRow={(rowData) => <Text>{rowData}</Text>}/>
            </View>
            <View style={{flex:1.8}}>
              <ListView
              contentContainerStyle={styles.containerEntrepriseDroite}
              dataSource={this.state.dataSource2}
              renderRow={(rowData) => <Text>{rowData}</Text>}/>
            </View>
          </View>



    		</View>
    </View>


    );
  }

  onBackAndroid = () => {
		const { navigator } = this.props;
		if (navigator && navigator.getCurrentRoutes().length > 1) {
			BackAndroid.removeEventListener('Back', this.onBackAndroid);
			navigator.pop();
			return true;
		} else {
			return false;
		}
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  containerMain: {
    backgroundColor: '#F2F2F2',
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: width,
	height: height * 0.89,
	alignSelf: 'center',
  },
  containerText: {
    backgroundColor: '#F2F2F2',
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: width,
	height: height * 0.28,
	alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
	color: '#333333',
  },
  instructions: {
    fontSize: 15,
	textAlign: 'center',
    marginBottom:5,
  },
  titleAV: {
  fontSize: 20,
  color: '#333333',
  textAlign: 'left',
  },
  containerEntreprise: {
  //width: width,
  flexDirection:'row',
  height: height * 0.23,
  //justifyContent: 'space-around',
  //alignItems: 'stretch',
  backgroundColor: '#F2F2F2',
  padding: 5,
  borderWidth: 1,
  borderRadius: 5,
  margin: 5,
  borderColor: '#CCC',
  width: 0.92 * width + 20,
  },
  containerEntrepriseGauche:{
      flex:1,
      justifyContent:'space-around'
    //alignItems:'flex-end',
  },
  containerEntrepriseDroite:{
      flex:1,
      justifyContent:'space-around',
      alignItems:'flex-end'
  }
});
