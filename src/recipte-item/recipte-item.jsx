import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";
import { useActions } from "../hooks/useActions";
import { useFavorites } from "../hooks/useFavorites";

function RecipeItem({recipe}) {
  const favorites = useFavorites()
  

  const {toggleFavorites} = useActions()

  // Condition exists

  

  console.log(favorites)

  const isExists = favorites.some(r => r.id === recipe.id)
    return (
      <div>
        <img src="" alt=""/>
        <h2>{recipe.name}</h2>
        <button onClick={()=> toggleFavorites(recipe)}>
          {isExists ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
    );
  }

export default RecipeItem;