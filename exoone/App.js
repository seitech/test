import React, {useState} from 'react';
import { Button,FlatList,StyleSheet, Text, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';  
import { Input } from 'react-native-elements';
import { uuid } from 'uuidv4';



function App() {
  const[tasks,setTasks] = useState([
      {id:1, task:"Acheter une corde"},
      {id:2, task:"Acheter un Tabouret"},
      {id:3, task:"Rédiger une lettre d'Adieu et foutre personne dans l'héritage"},
      {id:4, task:"Executer la recette"}
  ])

  const [newTask, setNewTask] = useState("")

  function deleteTask(id) {
    let remainingTasks = tasks.filter(task => task.id !== id)
    setTasks(remainingTasks)
  }

  function addTask() {
    let task = {
      id: uuid(),
      task: newTask
    }
    console.log(task);
    setTasks([...tasks,task]);
    setNewTask("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todolist d'un suicidaire</Text>
      <Input style={styles.input} 
        placeholder="Entrez votre tâche" 
        label="Nouvelle tâche"
         value={newTask}
         onChangeText={text => setNewTask(text)} />
      <Button title="Ajouter" color='black' onPress={addTask} />
      <Text style={styles.backTitle}> Tâches:</Text>
      <FlatList
          data={tasks}
          renderItem={({item}) => 
          <View style={styles.task}>
            <Text style={styles.text}>{item.task}</Text>
              <TouchableHighlight onPress={() => {deleteTask(item.id)}}>
                <AntDesign name="closecircle" size={24} color="white" />
              </TouchableHighlight>
          </View>}
          keyExtractor={item => item.id.toString()}
        />
    </View>
  );}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 35,
    marginBottom: 30,
    marginTop: 30,
  },
  backTitle:{
    fontSize: 25,
    marginBottom: 30,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    margin: 15,
    width: '90%'
  },
  task:{
    margin: 15,
    backgroundColor: 'black',
    padding : 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
});
export default App;