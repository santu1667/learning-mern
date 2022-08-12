import { Button, ScrollView, StyleSheet, Text, View,TextInput } from 'react-native';
import React, { useState } from 'react';

const TodoList = (props)=>{
    const [todoList,setTodoList]= useState([]);
    const [newTask, setNewTask]=useState('');

    function handleAddTodo(event){
        event.preventDefault();
        if(!newTask){
            alert('Enter to do');
            return;
        }
        if(todoList.includes(newTask)){
            alert('To do already exists');
        }
        else{
            todoList.push(newTask);
            setTodoList(todoList)
        }
        setNewTask('');
    }

    return(
            <View style={styles.listItem}>
                <View>
                    <Text style={styles.todoHeading}> To do List</Text>
                    {todoList && todoList.map(item=>(
                        <Text key={Math.random()}>{item}</Text>
                    ))}
                    {todoList.length<=0 && <Text> To do List is empty</Text>}
                </View>
                <View style={styles.inputContainer}>
                    <TextInput  style={styles.input} type='text' value={newTask}
                    onChangeText={text=>setNewTask(text)} placeholder='Enter To do'></TextInput>
                    <Button onPress={handleAddTodo} title='Add to do'></Button>
                </View>
            </View>
    )
}

const styles=StyleSheet.create({
    todoHeading:{
        marginTop:10,
        marginBottom:10,
        fontSize:20,
        fontFamily:'monospace'
    },
    input: {
        height: 40,
        margin: 16,
        borderWidth: 1,
        padding: 10,
    },
})

export default TodoList;