import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";

function App() {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "mail@mail.com",
    phoneNum: "012345678910",
    linkedIn: "test",
  });

  function updateName(e) {
    setInfo({
      ...info,
      name: e.target.value,
    });
  }

  function updateEmail(e) {
    setInfo({
      ...info,
      email: e.target.value,
    });
  }

  function updatephoneNum(e) {
    setInfo({
      ...info,
      phoneNum: e.target.value,
    });
  }
  function updateLinkedIn(e) {
    setInfo({
      ...info,
      linkedIn: e.target.value,
    });
  }

  return (
    <>
      <div id="editSection">
        <PersonalInfo
          info={info}
          handleNameChange={updateName}
          handleEmailChange={updateEmail}
          handlePhoneNumChange={updatephoneNum}
          handleLinkedInChange={updateLinkedIn}
        ></PersonalInfo>
      </div>
    </>
  );
}

export default App;
