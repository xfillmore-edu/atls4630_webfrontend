import React from 'react';

class ListItem extends React.Component {
    render() {
        const content = this.props.content;
        const key = this.props.key;

        return (
            <tr>
                {/* <td>{content}</td> */}
                <td>hello</td>
                <td><button type='button' onClick={()=>this.props.action(key)}>Mark complete</button></td>
            </tr>
        );
    }
}

export default ListItem;