import { useState } from "react";

function Task() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "ahmad", phone: "00001" },
    { id: 2, name: "john", phone: "00002" },
  ]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    const addContact = {
      id: Date.now(),
      name: name,
      phone: phone,
    };
    setContacts([...contacts, addContact]);
    setName("");
    setPhone("");
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((i) => i.id !== id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={addContact}>Add Contact </button>
      </div>

      {contacts.map((contact) => {
        return (
          <div key={contact.id}>
            <div>
              <h1>{contact.id}</h1>
              <h1>{contact.name}</h1>
              <h1>{contact.phone}</h1>
            </div>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Task;
