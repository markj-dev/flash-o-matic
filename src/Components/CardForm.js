import React from 'react';
import { useHistory, Link } from 'react-router-dom';

// Form component for adding new card
function CardForm({ deckId, newCardData, changeHandler, submitHandler }) {
  const history = useHistory();
  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <label htmlFor='front'>Front</label>
        <textarea
          className='form-control'
          id='front'
          name='front'
          placeholder='Front side of card'
          onChange={changeHandler}
          value={newCardData.front}
          required
        ></textarea>
      </div>
      <div className='form-group'>
        <label htmlFor='back'>Back</label>
        <textarea
          className='form-control'
          id='back'
          name='back'
          placeholder='Back side of card'
          onChange={changeHandler}
          value={newCardData.back}
          required
        ></textarea>
      </div>
      <Link to={`/decks/${deckId}`} className='mr-2'>
        <button
          type='button'
          className="btn btn-secondary mx-1"
          onClick={() => history.push(`/decks/${deckId}`)}
        >
          Cancel
        </button>
      </Link>
      <button type="submit" className="btn btn-primary mx-1">
        Save
      </button>
    </form>
  );
}

export default CardForm;