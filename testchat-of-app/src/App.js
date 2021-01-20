import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCZYJg4humQMg6s5gwPhM9Ucp0WZqRCLM0",
  authDomain: "live-chat-20f6a.firebaseapp.com",
  projectId: "live-chat-20f6a",
  storageBucket: "live-chat-20f6a.appspot.com",
  messagingSenderId: "536500495117",
  appId: "1:536500495117:web:e0451d03e7b0e16fcdc644"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <LoggaUt />
      </header>
      <section>
        {user ? <ChatRoom /> : <LoggaIn />}
      </section>
    </div>
  );
}

function LoggaIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);

  }

  return (
    <>
    <button onClick={signInWithGoogle}>Logga in Med Google</button>
    </>
  )
}

function LoggaUt() {
  return auth.currentUser && (

    <button onClick={() => auth.signOut()}>Sign Out</button>
  )

}

  

function ChatRoom() {

  const dummy = useRef()

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {

    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
      
    });

    setFormValue('');

    dummy.current.scrollIntoView({behavior: 'smooth'});


  }



  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <div ref={dummy}></div>
      
      </main>
      
      <form onSubmit={sendMessage}>
        
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} 
        />
        <button type="submit">😉</button>


      </form>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://encrypted-tbn0.gstatic.com//images?q=tbn:ANd9GcQybfZDCOylNw3wPpQ9r0F9khF0mXeRcSzx5A&usqp=CAU'} />
      <p>{text}</p>
    </div>
  )

}

export default App;