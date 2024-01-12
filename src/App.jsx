import logo from './logo.svg';
import './App.css';
import RecipeItem from './recipte-item/recipte-item';
import Todo from './store/toDos/todofortest';
import Header from './components/header/header';
import User from './components/header/user/User';

function App() {
  return (
    <section>
    <Header />
    <User/>
    <div>
      <RecipeItem recipe={{
        id: 1,
        name: 'Лазанья'
      }}/>
      <RecipeItem recipe={{
        id: 2,
        name: 'Каша'
      }}/>
      <RecipeItem recipe={{
        id: 3,
        name: 'Паста'
      }}/>
    </div>
    <div>
      <p>To Do List</p>
      <Todo />
    </div>
    </section>
  );
}

export default App;
