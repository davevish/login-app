import React, { Component } from 'react';

class ListItems extends Component {
    createTasks(task) {
        return <li key={task.key}>{task.text}</li>
    }

    render() {
        let todoEntries = this.props.entires;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="List">
                {listItems}
            </ul>
        );
    }
}

export default ListItems;