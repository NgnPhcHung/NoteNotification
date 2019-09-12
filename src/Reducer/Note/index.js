export const NOTE_ADD = 'note/ADD'
export const NOTE_DELETE = 'note/DELETE'

export const noteInputAction = (note) => ({
  type: NOTE_ADD,
  payload: {
    note,
  }
})
export const deleteAction = (index) => {
  return {
    type: NOTE_DELETE,
    payload: {
      index
    }
  }
}

initialState = {
  note: [],

}
export const addNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_ADD: {
      const { payload } = action
      const newState = { ...state }
      newState.note = [...state.note, payload]
      return newState
    }
    case NOTE_DELETE: {
      const { payload } = action
      const newState = { ...state }
      newState.note = newState.note.filter((e, i) => payload.index != i )
      return newState
    }
    default: return state
  }
}