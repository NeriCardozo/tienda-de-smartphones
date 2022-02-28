import { Link } from 'react-router-dom';

function Category( {category} ){
    return (
     <Link to={`/Category/${category.id}`}> <li className="header_text">{category.title}</li></Link>
      )
  }
  export default Category;