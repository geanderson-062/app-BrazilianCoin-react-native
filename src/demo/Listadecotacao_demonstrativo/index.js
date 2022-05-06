import { ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { Fragment } from 'react'
import styles from './style'//importando o style
import Itens_de_cotacao from './Itens_de_cotacao/index'



//nessa secao deve ser mostrado o preco atual em destaque

export default function Lista_de_cotacao_demonstrativo() {



    return (

    //o fragment permite que componentes sejam criados fora da view
    <Fragment>

       <View style={styles.Filtros}> {/*dentro dessa view vai ficar os botoes de dias e mes do app*/}

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> (0) } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>7D</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> (0) } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>15D</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> (0) } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>1M</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> (0) } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>3M</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> (0) } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>6M</Text>
         </TouchableOpacity>

       </View>

       <Itens_de_cotacao />
       <Itens_de_cotacao />
       <Itens_de_cotacao />
       <Itens_de_cotacao />
       <Itens_de_cotacao />
       <Itens_de_cotacao />
    
    </Fragment>

    
  
    )
  
}