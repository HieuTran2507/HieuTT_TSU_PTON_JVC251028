# Login Form Project (Session 19 - Exercise 3)

## 概要 (Overview)
ユーザー認証機能付きのログインフォームWebアプリケーション

## 機能 (Features)
- ✅ メール・パスワード入力フォーム
- ✅ パスワード表示/非表示切り替え
- ✅ リアルタイム入力検証
- ✅ ローカルストレージでのユーザー管理
- ✅ レスポンシブデザイン

## ファイル構成 (File Structure)
```
ex3/
├── ex3.html          # メインHTMLファイル
├── ex3.css           # スタイルシート
├── ex3.js            # JavaScript機能
├── README.md         # プロジェクト説明書
├── test-data.js      # テストデータ
└── flowchart.md      # フローチャート
```

## セットアップ (Setup)
1. ブラウザでex3.htmlを開く
2. テストデータを読み込む場合：
   ```javascript
   // ブラウザコンソールで実行
   localStorage.setItem('users', JSON.stringify([
     {email: 'test@example.com', password: 'Test123!@#'}
   ]));
   ```

## 使用方法 (Usage)
1. メールアドレスを入力
2. パスワードを入力
3. 👁️アイコンでパスワード表示切り替え
4. Loginボタンでログイン実行

## 検証ルール (Validation Rules)
### メール
- 必須入力
- 正規表現: `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`

### パスワード
- 必須入力
- 最低8文字
- 大文字・小文字・数字・特殊文字を含む
- 正規表現: `^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$`

## 技術仕様 (Technical Specifications)
- **言語**: HTML5, CSS3, JavaScript (ES6)
- **ストレージ**: localStorage
- **アイコン**: Font Awesome 6.7.2
- **対応ブラウザ**: Chrome, Firefox, Safari, Edge

## 作成者 (Author)
HieuTT - Session 19 Exercise 3