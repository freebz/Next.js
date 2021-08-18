// '/' 경로를 가지는 페이지
import Link from "next/link";

const App = () => {
  return (
    <div>
      <h2>Link to 'tomato' Page</h2>
      <a href="/tomato">
        <p>Move to '/tomato'</p>
      </a>
    </div>
  );
};

export default App;
