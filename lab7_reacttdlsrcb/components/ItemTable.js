import React from 'react';
import ListItem from './ListItem.js';

class ItemTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [], // holds array of activities with (key, value) pairs for content and key
            newItemInput: '', // stores text input value to assist with updating State
            nextKeyValue: 0 // increments as items are added, Never decremented to remain unique
        };

        // self binding
        this.inputHandler = this.inputHandler.bind(this);
        this.addTDLactivity = this.addTDLactivity.bind(this);
        this.removeTDLactivity = this.removeTDLactivity.bind(this);
    }

    inputHandler(event) {
        // https://reactjs.org/docs/forms.html
        this.setState({
            newItemInput: event.target.value // reads value from the text input field
        });
    }

    addTDLactivity() {
        // copies the items array into updatedItems
        // at the same time, adds the new item
        // content is defined by the value in the text field at time of submit
        var updatedItems = this.state.items.concat([{
            content: this.state.newItemInput,
            key: this.state.nextKeyValue
        }]);
        this.setState({
            items: updatedItems, // overwrite previous items list with added item version
            nextKeyValue: this.state.nextKeyValue + 1 // increment key for next item added
        });

    }

    removeTDLactivity(key) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        // copy the current items list but filter out the activity with the argument key
        var updatedItems = this.state.items.filter(activity => activity.key !== key);
        this.setState({
            items: updatedItems // overwrite previous items list with removed item version
        });

    }

    render() {
        // const rows = [];

        // convert the items array from state into an array of ListItems (component)
        // this.state.items.forEach((activity) => {

        const rows = this.state.items.forEach((activity) => {
            <ListItem content={activity.content} key={activity.key} action={this.removeTDLactivity} />
            console.log(activity.content);
        

            // adds each item to the array of rows
            // rows.push (
            //     // pass content, key, and removable action as props
            //     // removable action refers back to higher level function in ItemTable component
            //     <ListItem content={acitivity.content} key={acitivity.key} action={this.removeTDLactivity} />
            // );
        });
        console.log(rows);

        var bodystyle = {
            "margin": "3%"
        };

        console.log(this.state.items);
        return (
            <main style={bodystyle}> {/* semantic element instead of div */ }
                <table>
                    <thead>
                        <tr>
                            <th>To-Do List</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows} {/* uses the array created above of ListItems */}
                    </tbody>
                </table>
                {/* Text input and button for adding to-do activities to list */}
                <input type='text' placeholder='eat, drink, sleep, repeat' value={this.state.newItemInput} onChange={this.inputHandler} />
                <button type='button' onClick={this.addTDLactivity}>Add to list</button>
                {/* List length count display */}
                <p><strong>{this.state.items.length} {this.state.items.length===1?"thing":"things"} to do.</strong></p>
            </main>
            
        );
        
    }
}

export default ItemTable;