import React from 'react';

class ListItem extends React.Component {
    render() {
        const content = this.props.content;
        const xkey = this.props.zkey;

        console.log('inside ListItem');

        return (
            <tr>
                <td>{content}</td>
                <td><button type='button' onClick={()=>this.props.action(xkey)}>Mark complete</button></td>
            </tr>
        );
    }
}

export default ListItem;