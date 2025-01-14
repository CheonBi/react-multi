import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('이메일:', email, '비밀번호:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          로그인
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          {/* 이메일 필드 */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* 비밀번호 필드 */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            로그인
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          계정이 없으신가요?{' '}
          <a
            href="/register"
            className="text-blue-500 hover:underline">
            회원가입
          </a>
        </p>
      </div>
    </div>
  );
}
