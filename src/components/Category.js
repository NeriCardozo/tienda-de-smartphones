import { Link } from 'react-router-dom';

function Category( {category} ){
    return (
     <Link to={`/Category/${category.id}`}> <div className="header_text">{category.title}</div></Link>
      )
  }
  export default Category;