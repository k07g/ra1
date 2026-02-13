export default function EventArgs() {
  // 独自の引数を追加したイベントハンドラー
  const current = (e, type) => {
    const d = new Date();
    switch (type) {
      case "date":
        console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
        break;
      case "time":
        console.log(`${e.target.id}: ${d.toLocaleTimeString()}`);
        break;
      default:
        console.log(`${e.target.id}: ${d.toLocaleString()}`);
        break;
    }
  };

  return (
    <div>
      {/* アロー関数経由で、ハンドラーを呼び出す */}
      <button id="dt" onClick={(e) => current(e, "datetime")}>
        現在日時
      </button>
      <button id="date" onClick={(e) => current(e, "date")}>
        現在日付
      </button>
      <button id="time" onClick={(e) => current(e, "time")}>
        現在時刻
      </button>
    </div>
  );
}
