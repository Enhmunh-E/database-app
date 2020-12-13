import React, { useEffect, useState } from 'react';
import { firebase, db } from './fireb'
import './App.css';
const App = () => {
  const [lessons, setLessons] = useState([])
  const [id, setId] = useState([]);
  const [nerid, setNerid] = useState({
    ner: '',
    irsen: false
  });
  useEffect(() => {
    // db.collection('/lessons').onSnapshot((snapshot) => {
    //   const data = snapshot.docs.map((doc) => {return doc.data()})
    //   console.log(data)
    //   setLessons(data);
    // })
    db.collection('/irts').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {return doc.data()})
      const id = snapshot.docs.map((doc) => { return doc.id})
      setId([...id]);
      setLessons([...data]);
    })
  }, [])
  const change = (e, ner) => {
    setLessons((lessons) => {
        let lsson = [...lessons];
        lsson[e.target.id].irsen = e.target.value;
        return [...lsson];
    });
    db.collection('/irts').doc(id[e.target.id]).update({
      ner: ner,
      irsen: e.target.checked,
    });
  }
  const oorchlolt = (e) => {
    setNerid({...nerid, [e.target.id]: e.target.value});
  }
  const nemeh = () => {
    if (nerid.ner !== "") {
      db.collection('/irts').add({
        ner: nerid.ner,
        irsen: nerid.irsen,
      });
      setNerid({
        ner: '',
        irsen: false
      })
    }else {
      alert('ner hooson baina!!')
    }
  }
  return (
    <div className="App">
      <table border='1px'>
        <thead>
          <tr><th className='ner'>Name</th><th className='irts'>Irts</th></tr>
        </thead>
        <tbody>
          {lessons.map((item, index) => (
            <tr>
              <td className='ner'>{item.ner}</td>
              <td className='irts'><input id={index} type="checkbox" onChange={(e) => change(e, item.ner)} checked={item.irsen}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <label htmlFor="name">Name:</label>
      <input type="text" id="ner" name="ner" onChange={(e) => oorchlolt(e)} value={nerid.ner}/>
      <label htmlFor="irsen">Irts:</label>
      <input type="checkbox" id="irsen" name="irsen" onChange={(e) => oorchlolt(e)} checked={nerid.irsen}/>
      <button onClick={() => nemeh()}>Add</button>
    </div>
  );
}

export default App;
