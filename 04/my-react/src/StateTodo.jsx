import { useState } from "react";
import "./StateTodo.css";

export default function StateTodo() {
  // Todo項目idの最大値(登録都度にインクリメント)
  const [maxId, setMaxId] = useState(1);
  // 入力値(title)、Todoリスト(todo)
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);
  // 次のソート方向(降順であればtrue)
  const [desc, setDesc] = useState(true);

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

  // [済]ボタンでTodo項目を完了状態に
  const handleDone = (e) => {
    // todo配列を走査し、id値が等しいものを検索
    setTodo(
      todo.map((item) => {
        if (item.id === Number(e.target.dataset.id)) {
          return {
            ...item,
            isDone: true,
          };
        } else {
          return item;
        }
      }),
    );
  };

  // [削除]ボタンで該当するTodo項目を破棄
  const handleRemove = (e) => {
    setTodo(todo.filter((item) => item.id !== Number(e.target.dataset.id)));
  };

  const handleSort = (e) => {
    // 既存のTodoリストを複製の上でソート
    const sorted = [...todo];
    sorted.sort((m, n) => {
      // desc値に応じて昇順/降順を決定
      if (desc) {
        return n.created.getTime() - m.created.getTime();
      } else {
        return m.created.getTime() - n.created.getTime();
      }
    });
    // desc値を反転
    setDesc((d) => !d);
    // ソート済みのリストを再セット
    setTodo(sorted);
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
      {/* desc値に応じてキャプションを変更 */}
      <button type="button" onClick={handleSort}>
        ソート ({desc ? "↑" : "↓"})
      </button>
      <hr />
      {/* Todoをリストに整形 */}
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>
              済
            </button>
            <button type="button" onClick={handleRemove} data-id={item.id}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
