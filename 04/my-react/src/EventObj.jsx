export default function EventObj() {
    // クリック時にイベントオブジェクトをログに出力
    const handleClick = e => console.log(e);
    return(
        <button onClick={handleClick}>クリック</button>
    );
}