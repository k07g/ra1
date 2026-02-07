import Download from "./Download";

export default function ForItem({ book }) {
  let dd;
  // downloadプロパティの正否に応じてタグを分岐
  if (book.download) {
    dd = <dd>{book.summary}<Download isbn={book.isbn} /></dd>;
  } else {
    dd = <dd>{book.summary}</dd>
  }
  return (
    <>
      <dt>
        <a href={`http://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
          {book.title} ({book.price}円)
        </a>
      </dt>
      {/* 生成しておいたタグを埋め込み */}
      {dd}
    </>
  );
}
