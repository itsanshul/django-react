import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header';
import MainIndex from './layouts/MainIndex';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<Header />
					<MainIndex />
				</Fragment>	
			</Provider>	
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
