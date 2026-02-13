export default function EventArgs2() {
  const current = (e) => {
    const type = e.target.dataset.type;
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
      {/* 取得する日時型を独自データ属性で指定 */}
      <button id="dt" data-type="datetime" onClick={current}>
        現在日時
      </button>
      <button id="date" data-type="date" onClick={current}>
        現在日付
      </button>
      <button id="time" data-type="time" onClick={current}>
        現在時刻
      </button>
    </div>
  );
}
