import './SelectStyle.css';
import cn from 'classnames';

export default function SelectStyle({ mode }) {
  return (
    // mode属性に応じてスタイルクラスを切り替え
    <div className={cn('box', mode === 'light' ? 'light' : 'dark')}>
      こんにちは、世界！
    </div>
  );
}
