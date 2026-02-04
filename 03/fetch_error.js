fetch("https://wings.msn.to/tmp/it/nothing.php")
  .then((response) => {
    // 応答が成功(ok)であれば結果を取得
    if (response.ok) {
      return response.text();
    }
    // 成功(ok)でなければ、ステータスメッセージを例外としてスロー
    throw new Error(response.statusText);
  })
  // 正常終了時は結果をログ出力
  .then((text) => console.log(text))
  // 例外発生時は例外メッセージをログ出力
  .catch((err) => console.error(err.message))
  .finally(() => console.log("処理が終了しました"));
