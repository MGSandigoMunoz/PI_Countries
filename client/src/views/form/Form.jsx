import styles from './Form.module.css'

function Form(props) {

    return (
      <div>
        <p> FORM!</p>
        <form>
            <label>Name</label>
              <input></input>
            <label>Difficulty</label>
              <input></input>
            <label>Duration</label>
              <input></input>
            <label>Season</label>
              <input></input>
            <label>Countries</label>
              <input></input>
            <button>Submit</button>
        </form>
      </div>
    );
  }

  export default Form;