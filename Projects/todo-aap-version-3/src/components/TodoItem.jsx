/* eslint-disable react/prop-types */
import {AiFillDelete} from 'react-icons/ai';
function TodoItem({todoname, todoDate, onDeleteClick}) {

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={() => onDeleteClick(todoname)}>
            <AiFillDelete/>
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
