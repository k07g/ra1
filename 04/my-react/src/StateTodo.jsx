import { useState } from "react";

export default function StateTodo() {
  // Todo項目idの最大値(登録都度にインクリメント)
  const [maxId, setMaxId] = useState(1);
  // 入力値(title)、Todoリスト(todo)
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  // テキストボックスへの入力をStateに反映
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    // 新規のTodoを追加
    setTodo([
      ...todo,
      {
        id: maxId, // id値
        title, // Todo本体
        created: new Date(), // 作成日時
        isDone: false, // 実行済か？
      },
    ]);
    setMaxId((id) => id + 1);
  };

  return (
    <div>
      <label>
        やること:
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <button type="button" onClick={handleClick}>
        追加
      </button>
      <hr />
      {/* Todoをリストに整形 */}
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
