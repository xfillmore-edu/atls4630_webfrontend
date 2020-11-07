import React from 'react';

class ListItem extends React.Component {
    render() {
        const item = this.props.item;

        return (
            <tr>
                <td>(remove)</td>
                <td>{item}</td>
            </tr>
        );
    }
}

export default ListItem;