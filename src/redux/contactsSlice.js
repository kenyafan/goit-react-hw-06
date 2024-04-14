import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push({ id: nanoid(), ...action.payload });
      },
      prepare(name, number) {
        return { payload: { name, number } };
      },
    },
    deleteContact(state, action) {
      const id = action.payload;
      state.items = state.items.filter((contact) => contact.id !== id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;
