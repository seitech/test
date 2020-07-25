import React, {useState} from 'react';
import {StyleSheet,TextInput, Button, Text,View} from 'react-native';
import axios from 'axios';
//import {Input} from 'react-native-elements';
 
function LibraryScreen({navigation}) {
    
    
    const [Livres,setLivres] = useState([]);

    const [NewLivre, setNewLivre] = useState("");
function Recherche () {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${NewLivre}}`)
    .then(function(response) {
        setLivres(response.data.items)
        console.log(response.data.items)
    });
}

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} 
                label="Entrez votre recherche"
                value={NewLivre}
                onChangeText={text => setNewLivre(text)} />
            <Button title="lancer la rechercher" onPress= {Recherche} />
            <Text onPress={() => navigation.navigate("book", {title: {NewLivre}})}>
            {Livres.map(book => <Text>{book.volumeInfo.title} - {book.volumeInfo.subtitle}</Text>)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        margin: 15,
        width: '90%'
      },
})

export default LibraryScreen;