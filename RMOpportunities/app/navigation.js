//Basic file, we start from here. But in this file,
//we just create 1 navigator. The default page of the
//navigator is 'Index'(import Index from './app/page1';)
//It means that when we run our app, it will strat from
//'Index'.

import {
   View,
   Navigator,
   Image,
   StyleSheet,
   Dimensions,
   TouchableHighlight,
   DeviceEventEmitter,
} from 'react-native';

// You change './app/page1' to look the pages that you wrote.
// For example, you want to look page 10, so you change the under
// string from './app/page1' to './app/page10'
import Drawer from 'react-native-drawer';
import ContenuMenu from './contenuMenu';
import Home from './page1';
import Index from './page1';
import React from 'react';
import EnTeteClient from './enTeteClient';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
global.connection = 0;//this is a global value which determines if the state is connected or not(0:not connected,1:connected).

// In generation, you shouldn't change the contents which are under this comment.
export default class Navigation extends React.Component {
   componentWillUnmount(){
	   DeviceEventEmitter.remove();
   }
   
   componentDidMount(){
	   DeviceEventEmitter.addListener('nvBar',this.update);
   }
   
   closeDrawer = () => {
      this._drawer.close()
   };

   openDrawer = () => {
      this._drawer.open()
   };
   
   render() {
      let pic1 = require('../img/logo_rmo.png');
      let pic2 = require('../img/menuButton.png');
      let pic3 = require('../img/client.png')
      let defaultName = 'Index';
      let defaultComponent = Index;

      const drawerStyles = {
         drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
         main: {paddingLeft: 3},
      }
	  
      return(
         <Drawer
            ref={(ref) => this._drawer = ref}
            type="overlay"
            content={<ContenuMenu closeDrawer={this.closeDrawer} navigator = {this}/>}
            tapToClose={true}

            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            styles={drawerStyles}
            tweenHandler={(ratio) => ({
               main: { opacity:(2-ratio)/2 }
            })}
         >
			{(() => {
				if (connection == 1)
					return (
						<Navigator
						   ref={"navigator"}
						   initialRoute = {{name: defaultName, component: defaultComponent}}
						   configureScene = {(route) => {
							  return Navigator.SceneConfigs.FadeAndroid;
						   }}
						   renderScene = {(route, navigator) =>{
							  let Component = route.component;
							  return <Component {...route.params} navigator = {navigator} />
						   }}
						   
						   navigationBar={ <Navigator.NavigationBar routeMapper={{
							  LeftButton: (route, navigator, index, navState) => { return (
								 <TouchableHighlight  onPress={()=>this.openDrawer()}>
									<Image source={pic2} style={styles.menu}/>
								 </TouchableHighlight>
							  ); },
							  RightButton: (route, navigator, index, navState) => { return (<EnTeteClient style={styles.icone}/>);},
							  Title: (route, navigator, index, navState) => { return (  <TouchableHighlight onPress={()=>this.goToHomePage()}>
							  <Image source={pic1} style={styles.title}/>
						   </TouchableHighlight>); },
						   }}
						   style={{backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: "#000000",width: width, height: height * 0.08,}}
						   />} 
						/>
					);
				else
					return (
						<Navigator
						   ref={"navigator"}
						   initialRoute = {{name: defaultName, component: defaultComponent}}
						   configureScene = {(route) => {
							  return Navigator.SceneConfigs.FadeAndroid;
						   }}
						   renderScene = {(route, navigator) =>{
							  let Component = route.component;
							  return <Component {...route.params} navigator = {navigator} />
						   }}
						   
						   navigationBar={ <Navigator.NavigationBar routeMapper={{
							  LeftButton: (route, navigator, index, navState) => { return (
								 <TouchableHighlight  onPress={()=>this.openDrawer()}>
									<Image source={pic2} style={styles.menu}/>
								 </TouchableHighlight>
							  ); },
							  RightButton: (route, navigator, index, navState) => { return (<View/>);},
							  Title: (route, navigator, index, navState) => { return (  <TouchableHighlight onPress={()=>this.goToHomePage()}>
							  <Image source={pic1} style={styles.title}/>
						   </TouchableHighlight>); },
						   }}
						   style={{backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: "#000000",width: width, height: height * 0.08,}}
						   />} 
						/>
					);
			})()}
      </Drawer>
   );
}

	update = () => {
		this.forceUpdate();
	}

	goToHomePage = () => {


	   if (this.refs.navigator) {
		  this.refs.navigator.push({
			 name: 'Home',
			 component: Home,
		  })
	   }
	};
}

const styles = StyleSheet.create({
   title: {
	  marginTop:15,
      width: width*0.7,
      height: height*0.07,
   },
   menu:{
	  marginLeft:10,
	  marginTop:3,
      width: width*0.08,
      height: height*0.07, 
   },
   icone:{
      width: width*0.1,
      height: height*0.08,
   }
});
