# Login Form Flowchart

## メインフロー (Main Flow)

```
                    START
                      |
                      v
            ローカルストレージからユーザーデータ読み込み
            Load users from localStorage
                      |
                      v
              パスワード表示切り替えクリック？
              User clicks show/hide password?
                      |
                   Yes | No
                      v   |
            パスワード表示状態を切り替え     |
            Toggle password visibility    |
                      |   |
                      v   v
              フォーム送信？
              User submits form?
                      |
                   Yes | No (待機/Wait)
                      v   |
              デフォルト送信を防止           |
              Prevent default submission   |
                      |   |
                      v   |
              ┌─────────────┐   |
              │ 入力検証     │   |
              │ validateData │   |
              └─────────────┘   |
                      |         |
                   有効？        |
                   Valid?       |
                      |         |
                 Yes  |  No     |
                      v   v     |
                      |   エラーメッセージ表示
                      |   Show error messages
                      |   |     |
                      |   └─────┘
                      v
              ┌─────────────────┐
              │ 認証チェック      │
              │ checkEmailAndPassword │
              └─────────────────┘
                      |
              認証情報一致？
              Credentials match?
                      |
                 Yes  |  No
                      v   v
            "ログイン成功"    "メールまたはパスワードが間違っています"
            "Login successful"  "Email or password incorrect"
                      |   |
                      v   v
                    END  END
```

## 入力検証詳細フロー (Validation Detail Flow)

```
validateData 開始
validateData Start
       |
       v
┌─────────────┐
│メール空？    │ → Yes → "メールは必須です"
│Email empty? │         "Email cannot be empty"
└─────────────┘
       |
      No
       v
┌─────────────┐
│メール形式有効？│ → No → "メール形式が無効です"
│Email valid?  │        "Email is not valid"
└─────────────┘
       |
      Yes
       v
┌─────────────┐
│パスワード空？ │ → Yes → "パスワードは必須です"
│Password empty?│        "Password cannot be empty"
└─────────────┘
       |
      No
       v
┌─────────────┐
│パスワード形式有効？│ → No → "パスワード形式が無効です"
│Password valid?   │      "Password is not valid"
└─────────────┘
       |
      Yes
       v
   検証成功 (Return true)
   Validation Success
```

## 検証ルール (Validation Rules)

### メール検証 (Email Validation)
- **正規表現**: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
- **条件**: 標準的なメール形式

### パスワード検証 (Password Validation)  
- **正規表現**: `/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/`
- **条件**:
  - 最低8文字 (Minimum 8 characters)
  - 大文字を含む (Contains uppercase)
  - 小文字を含む (Contains lowercase) 
  - 数字を含む (Contains digit)
  - 特殊文字を含む (Contains special character)

## 主要機能 (Key Features)

1. **パスワード表示切り替え** - Password visibility toggle
2. **リアルタイム検証** - Real-time validation  
3. **ローカルストレージ認証** - localStorage authentication
4. **エラーハンドリング** - Error handling