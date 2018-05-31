import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NumberPicker from './components/NumberPicker';

ReactDOM.render(<NumberPicker value={2} max={5} min={-5}/>, document.getElementById('app'));