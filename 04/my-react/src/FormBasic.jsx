import { useForm } from "react-hook-form";
import "./FormBasic.css";

export default function FormBasic() {
  // 規定値を準備
  const defaultValues = {
    name: "名無しの権兵衛",
    email: "admin@example.com",
    gender: "male",
    memo: "",
  };

  // フォームを初期化
  const {
    register,
    handleSubmit,
    formState: { errors,isDirty,isValid },
  } = useForm({
    defaultValues,
  });
  // サブミット時の処理
  const onsubmit = (data) => console.log(data);
  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      {/* 検証ルールなどをフォームに紐付け */}
      <div>
        <label htmlFor="name">名前:</label>
        <br />
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "名前は入力必須です。",
            maxLength: {
              value: 20,
              message: "名前は20文字以内にしてください。",
            },
          })}
        />
        <div className="error">{errors.name?.message}</div>
      </div>
      <div>
        <label>性別:</label>
        <br />
        <label>
          <input
            id="male"
            type="radio"
            value="male"
            {...register("gender", { required: "性別は必須です。" })}
          />
          男性
        </label>
        <label>
          <input
            id="female"
            type="radio"
            value="female"
            {...register("gender", { required: "性別は必須です。" })}
          />
          女性
        </label>
        <div className="error">{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <br />
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "メールアドレスは必須入力です。",
            pattern: {
              value: /^[a-z\-\d._%+]+@[a-z\-\d]+(?:\.[a-z\-\d]+)*\.[a-z]{2,}$/i,
              message: "メールアドレスの形式が不正です。",
            },
          })}
        />
        <div>
          <label htmlFor="memo">備考:</label>
          <textarea
            id="memo"
            {...register("memo", {
              required: "備考は必須入力です。",
              minLength: {
                value: 10,
                message: "備考は10文字以上にしてください。",
              },
              validate: {
                ng: (value, formValues) => {
                  // 不適切ワードを準備
                  const ngs = ["暴力", "死", "グロ"];
                  // 入力文字列に不適切ワードが含まれているかを判定
                  return ngs.some((ng) => value.includes(ng))
                    ? "備考にNGワードが含まれています。"
                    : true;
                },
              },
            })}
          />
          <div className="error">{errors.memo?.message}</div>
        </div>
        <div>
          <button type="submit" disabled={!isDirty || !isValid}>送信</button>
        </div>
      </div>
    </form>
  );
}
