const React = require('react');
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { Router, Route, IndexRoute, Link } from 'react-router';
import NavigationLeft from 'material-ui/svg-icons/navigation/chevron-left';

const data = [
  {
  	id: 0,
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '推荐一',
    des: '牛奶＋胡萝卜＋豆腐＋酸奶',
  },
  {
  	id: 1,
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '推荐二',
    des: '豆浆＋莴笋＋瓠瓜',
  },
  {
  	id: 2,
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '推荐三',
    des: '圆白菜＋土豆＋牛乳＋锅盔',
  },
];

const Recipe = React.createClass({
	contextTypes: {
    	router: React.PropTypes.object
  	},
  	getDetails(item, e) {
  		this.context.router.push('/recDetails?recid=' + item.id);
  	},
  	back(e) {
  		console.log(11)
  		this.context.router.push('/');
  	},
  	render() {
  		let me = this;
  		let listItem = data.map(function (item) {
  			return <ListItem
		        primaryText={item.title}
        		secondaryText={item.des}
		        key={item.id}
		        onClick={me.getDetails.bind(me, item)}
		        leftAvatar={<Avatar src={item.img} />}
		      />;
  		});
  		return <div>
  		<AppBar
  			iconElementLeft={<IconButton onClick={me.back}><NavigationLeft /></IconButton>}
          title="菜谱推荐"
        />
  			<List>
      			{listItem}
    		</List>
    		</div>;
  	}
});

export default Recipe;