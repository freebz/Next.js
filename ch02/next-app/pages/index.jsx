// '/' 경로를 가지는 페이지
import Link from "next/link";

//* 리액트 컴포넌트
const Child = () => {
  return <p>Move to '/tomato'</p>; 
};

const App = () => {
  return (
    <div>
      <h2>Link to 'tomato' Page</h2>
      <Link href="/tomato">
        <Child />
      </Link>
    </div>
  );
};

export default App;
