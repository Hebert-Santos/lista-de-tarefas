import * as C from './App.styles'
import { useState } from 'react'
import { Item } from './types/item'
import { ListItem } from "./components/list-item";
import { AddArea } from "./components/add-area";

/*Consertar o erro  : Não está trocando o status na lista, apenas na exibição*/

const App = () => {

  const [list, setList] = useState<Item[]>([])

  const handleAddTask = (taskname: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false
    })

    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App