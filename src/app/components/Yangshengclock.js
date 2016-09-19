const React = require('react');
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { Router, Route, IndexRoute, Link } from 'react-router';
import NavigationLeft from 'material-ui/svg-icons/navigation/chevron-left';

const Yangsheng = React.createClass({
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
          title="中医养生钟"
        />
        <img src="image/yangsheng.png" width="100%" />
        </div>;
    }
});

export default Yangsheng;