import { Link } from 'react-router-dom';

function Category( {category} ){
    return (
     <Link to={`/Category/${category}`}> <li className="header_text">{category}</li></Link>
      )
  }
  export default Category;