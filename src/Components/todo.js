import React, { Component } from "react";
// https://wk-partners.co.jp/homepage/blog/hpseisaku/javascript/react-start/
export default class Todo extends Component {
  /**
   * コンストラクタ
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ""
    };
  }

  /**
   * 描画
   */
  render() {
    const { todos } = this.state;
    return (
      <div className="Todo">
        <input type="text" onInput={this.onInput} />
        <button onClick={this.addTodo}>登録</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                onClick={() => {
                  this.removeTodo(index);
                }}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  /**
   * input反映
   * @param {*} e
   */
  onInput = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  /**
   * 登録
   */
  addTodo = () => {
    const { todos, name } = this.state;
    this.setState({ todos: [...todos, name] });
  };

  /**
   * 削除
   * @param {*} index
   */
  removeTodo = (index) => {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    });
  };
}
