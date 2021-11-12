import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container:{
        backgroundColor:'#fafafa',
        height:'100%'
    },
    header:{
        padding:30,
        flexDirection:"row",
        alignItems:'center',
       
    
    },
    procurar:{
        padding:10,
        backgroundColor:'#fff',
        borderColor:'#eee',
        borderWidth:1,
        borderRadius:10,
        fontSize:5,
        width:'80%',
        height:'100%'
    },

    headerimg:{
        height:40,
        width:40,
        marginLeft:20
    },
    img:{
        borderRadius:25,
        width:'90%',
        height:'90%',
        marginLeft:18
    },
    dados:{
        backgroundColor:'#fff',
        textAlign: "center",
        flexDirection: "row",
        borderRadius:20,
        padding:12,
        width:'90%',
        right:-18
        
    },
    imgdados:{
        height:90,
        width:90,
        borderRadius:20,
        marginRight:10
    },
    info:{
        justifyContent:"center"
    },
    name:{
        top:-15,
        fontSize:18,
        fontWeight:"bold"
    },
    renda:{
        position:"absolute",
        right:14,
        top:25
    },
    country:{
        opacity:0.5
    },
    nota:{
        position:"absolute",
        right:14,
        top:50,
        flexDirection:"row",
        alignItems:"center"
    },

    star:{
        height:10,
        width:10,
        margin:5,
        top:-1
    },
    cor:{
        fontWeight:'800',
        color:'green'
    },
    footer:{
        backgroundColor:'#fff',
        flexDirection:"row",
        width:'100%',
        position:'absolute',
        bottom:0,
        zIndex:1000
    },
    icons:{
        height:20,
        width:20,
        margin:25
    },
})