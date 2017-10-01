import React from "react";
import AddTodo from "./AddTodo";
import VisibilityTodoList from "./VisibilityTodoList";
import Footer from "./Footer";

class TodoPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AddTodo/>
                <VisibilityTodoList/>
                <Footer/>
            </div>
        )
    }
}

export default TodoPage;