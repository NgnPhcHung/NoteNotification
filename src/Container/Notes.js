import { connect } from 'react-redux'
import Note from '../components/Notes'
import { noteInputAction, deleteAction } from '../Reducer/Note'
const mapStateToProps = state => {
  const { addNoteReducer } = state
  return {
    note: addNoteReducer
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submit: function (value) {
      const action = noteInputAction(value)
      dispatch(action)
    }, 
    del : function(i) {
      const action = deleteAction(i)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
