
import './App.css';
import { useState } from 'react';


let clientTypes = [
  {
    name: 'Новый клиент',
    color: 'red',
  },
  {
    name: 'На удаление',
    color: 'yellow',
  },
  {
    name: 'Пробное занятие',
    color: 'green',
  },
  {
    name: 'Не отвечает',
    color: 'blue',
  },
]
let client = { selectedType: 'Пробное занятие' }


const App = () => {
  const [value, selectedValue] = useState(client.selectedType)
  const [isVisible, visibility] = useState(false)
  const changeValue = (value) => {
    selectedValue(value)
    visibility(false)
  }
  const selectVisibility = (value) => {
    visibility(!value)
  }
  return (
    <div className="App">
      <List selectedValue={value} clientTypes={clientTypes} changeValue={changeValue} isVisible={isVisible} selectVisibility={selectVisibility}></List>
    </div>
  );
}


const List = (props) => {
  console.log(props.selectedValue)

  let isVisible
  let isVisibleCaret
  if (props.isVisible) {
    isVisible = 'visible_block'
    isVisibleCaret = 'visible_caret'
  } else {
    isVisible = 'unvisible_block'
    isVisibleCaret = 'unvisible_caret'
  }
  let seletedStyle
  let typesOfClient = props.clientTypes.map((a, i) => {
    const divStyle = {
      backgroundColor: a.color,
    };
    if (a.name === props.selectedValue) {
      seletedStyle = {
        backgroundColor: a.color,
      };
      return <div value={a.name}
        style={divStyle}
        onClick={() => props.changeValue(a.name)}
        className={`${'not_select'}${' '}${'for_select'}`}
        key={a.name}><span className='selected_type_content'>{a.name}</span><span className='selected_type'></span></div>
    } else {
      return <div value={a.name}
        style={divStyle}
        onClick={() => props.changeValue(a.name)}
        className={`${'not_select'}`}
        key={a.name}><span>{a.name}</span></div>
    }
  })
  return (
    <div className='main'>
      <div style={seletedStyle}
        className={`${'not_select'}`}
        onClick={() => props.selectVisibility(props.isVisible)}><span className={isVisibleCaret}>{props.selectedValue}</span><span></span></div>
      <div className={isVisible}>{typesOfClient}</div>

    </div>
  );
}



export default App;
