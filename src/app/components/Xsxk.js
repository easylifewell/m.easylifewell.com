const React = require('react');
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { Router, Route, IndexRoute, Link } from 'react-router';
import NavigationLeft from 'material-ui/svg-icons/navigation/chevron-left';

const Xsxk = React.createClass({
  contextTypes: {
      router: React.PropTypes.object
    },
    back(e) {
      this.context.router.push('/');
    },
    render() {
      return <div>
      <AppBar
        iconElementLeft={<IconButton onClick={this.back}><NavigationLeft /></IconButton>}
          title="食物相生相克"
        />
        <img src="image/xsxk.png" width="100%" />
        </div>;
    }
});

export default Xsxk;