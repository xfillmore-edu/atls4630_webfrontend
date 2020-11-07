import React from 'react';
import ListItem from './ListItem.js';

var items = [
    {activityname: 'Something'},
    {activityname: 'Something Else'}
]

class ItemTable extends React.Component {
    render() {
        const rows = [];

        // this.props.items.forEach((activity) => {
        items.forEach((activity) => {
            // adds each item to the array of rows
            rows.push (
                <ListItem item={activity.activityname}/>
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>To-Do List</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ItemTable;