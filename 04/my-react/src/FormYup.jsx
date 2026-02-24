import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "../node_modules/@hookform/resolvers/yup/src/yup";

const schema = yup.object({
  name: yup
    .string()
    .label("名前")
    .required("${label}は必須入力です。")
    .max(20, "${label}は${max}文字以内で入力してください。"),
  gender: yup.string().label("性別").required("${label}は必須入力です。"),
  email: yup
    .string()
    .label("メールアドレス")
    .required("${label}は必須入力です。")
    .email("${label}の形式が不正です。"),
  memo: yup
    .string()
    .label("備考")
    .required("${label}は必須入力です。")
    .min(10, "${label}は${min}文字以上で入力してください。"),
});

export default function FormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "名無しの権兵衛",
      email: "admin@example.com",
      gender: "male",
      memo: "",
    },
    // Yupに検証を委ねる
    resolver: yupResolver(schema),
  });

  // サブミット時の処理を準備
  const onsubmit = (data) => console.log(data);
  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">名前:</label>
        <br />
        <input id="name" type="text" {...register("name")} />
        <div className="error">{errors.name?.message}</div>
      </div>
      <div>
        <label>性別:</label>
        <br />
        <label>
          <input id="male" type="radio" value="male" {...register("gender")} />
          男性
        </label>
        <label>
          <input
            id="female"
            type="radio"
            value="female"
            {...register("gender")}
          />
          女性
        </label>
        <div className="error">{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <br />
        <input id="email" type="email" {...register("email")} />
        <div className="error">{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考:</label>
        <br />
        <textarea id="memo" {...register("memo")} />
        <div className="error">{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}
