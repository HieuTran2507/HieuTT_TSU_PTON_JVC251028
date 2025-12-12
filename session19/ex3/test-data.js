// テストデータ設定用スクリプト
// Test data setup script

// サンプルユーザーデータ
const testUsers = [
    {
        email: 'admin@example.com',
        password: 'Admin123!@#'
    },
    {
        email: 'user@test.com', 
        password: 'User456$%^'
    },
    {
        email: 'demo@demo.com',
        password: 'Demo789&*('
    }
];

// ローカルストレージにテストデータを保存
function setupTestData() {
    localStorage.setItem('users', JSON.stringify(testUsers));
    console.log('テストデータが設定されました / Test data has been set up');
    console.log('利用可能なアカウント / Available accounts:');
    testUsers.forEach(user => {
        console.log(`Email: ${user.email}, Password: ${user.password}`);
    });
}

// テストデータをクリア
function clearTestData() {
    localStorage.removeItem('users');
    console.log('テストデータがクリアされました / Test data has been cleared');
}

// 現在のユーザーデータを表示
function showCurrentUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('現在のユーザーデータ / Current user data:', users);
}

// ブラウザコンソールで使用可能な関数
// Available functions in browser console:
// setupTestData() - テストデータを設定
// clearTestData() - テストデータをクリア  
// showCurrentUsers() - 現在のデータを表示