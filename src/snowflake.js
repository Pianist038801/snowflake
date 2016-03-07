'use strict';
/**
 *  # snowflake
 *  Snowflake ![snowflake](https://cloud.githubusercontent.com/assets/1282364/11599365/1a1c39d2-9a8c-11e5-8819-bc1e48b30525.png)
 */

/**
 * ## imports
 * * ```Provider``` will tie the React-Native to the Redux store
 * * ```configureStore``` will connect the ```reducers```, the
 *   ```thunk``` and the initial state.
 */
import React, { AppRegistry, Navigator, View, Text } from 'react-native';
import RNRF, {Route, Schema, Animations, Actions, TabBar} from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './lib/configureStore';

import App 						from './containers/App';
import Login 					from './containers/Login';
import Logout 				from './containers/Logout';
import Register 			from './containers/Register';
import ForgotPassword from './containers/ForgotPassword';
import Profile 				from './containers/Profile';
import Main			 			from './containers/Main';
import Subview				from './containers/Subview';

/** Add icon support for use in Tabbar
 * 
 */
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * ## Actions
 *  The necessary actions for dispatching our bootstrap values
 */
import {setPlatform, setVersion} from './reducers/device/deviceActions';
import {setStore} from './reducers/global/globalActions';

/**
 * ## States
 * Snowflake explicitly defines initial state
 *
 */

import authInitialState from './reducers/auth/authInitialState';
import deviceInitialState from './reducers/device/deviceInitialState';
import globalInitialState from './reducers/global/globalInitialState';
import profileInitialState from './reducers/profile/profileInitialState';

/**
 *  The version of the app but not  displayed yet
 */
var VERSION='0.0.10';

/**
 *
 * ## Initial state
 * Create instances for the keys of each structure in snowflake
 * @returns {Object} object with 4 keys
 */
function getInitialState() {
  const _initState = {
    auth: new authInitialState,
    device: (new deviceInitialState).set('isMobile',true),
    global: (new globalInitialState),
    profile: new profileInitialState
  };
  return _initState;
}

class TabIcon extends React.Component {
	render() {
		var color = this.props.selected ? 'FF3366' : 'FFB3B3';

		return (
			<View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center'}}>
					<Icon style={{color: color}} name={this.props.iconName} size={30} />
					<Text style={{color: color}}>{this.props.title}</Text>
			</View>	
		);
	}
}

/**
 * ## Native
 *
 * ```configureStore``` with the ```initialState``` and set the
 * ```platform``` and ```version``` into the store by ```dispatch```.
 * *Note* the ```store``` itself is set into the ```store```.  This
 * will be used when doing hot loading
 */
 
export default function native(platform) {

  let Snowflake = React.createClass( {
    render() {
       	
			const store = configureStore(getInitialState());
			const Router = connect()(RNRF.Router);
			
    	// configureStore will combine reducers from snowflake and main application
    	// it will then create the store based on aggregate state from all reducers
      
      store.dispatch(setPlatform(platform));
      store.dispatch(setVersion(VERSION));
      store.dispatch(setStore(store));
      	
 			// setup the router table with App selected as the initial component
      return (
        <Provider store={store}>
					<Router hideNavBar={true}>
						<Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
						<Schema name="floatFromRight" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
						<Schema name="default"/>
						<Schema name="tab" type="switch" icon={TabIcon} />
						
						<Route name="App" 						component={App} 						title="App" 						initial={true} /> 
						<Route name="Login" 					component={Login} 					title="Login"						type="replace"  />		
						<Route name="Register" 				component={Register} 				title="Register"				type="replace" />	
						<Route name="ForgotPassword" 	component={ForgotPassword} 	title="ForgotPassword"	type="replace" />		
						<Route name="Subview"					component={Subview}					title="Subview"					Schema="floatFromRight"	/> 

	      		<Route name="Tabbar" type="replace">
							<Router footer={TabBar} showNavigationBar={false}>
								<Route name="Logout"  	schema="tab" title="logout" 				iconName={"sign-out"}  		hideNavBar={true} component={Logout}  										/>
								<Route name="Main"  		schema="tab" title="main" 					iconName={"briefcase"}		hideNavBar={true} component={Main} 		initial={true} 	/>
								<Route name="Profile"   schema="tab" title="profile"  			iconName={"gear"}     	 	hideNavBar={true} component={Profile} 										/>
							</Router>
						</Route>
						
					</Router>
        </Provider>
      );
    }
  });
  /**
   * registerComponent to the AppRegistery and off we go....
   */

  AppRegistry.registerComponent('snowflake', () => Snowflake);
}
