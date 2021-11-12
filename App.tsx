import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';

export default function App() {
  return (
    <View style={estilo.container}>
      <ScrollView horizontal={false}>
        {/* INICIO DO HEADER ========== */}
        <View style={estilo.header}>
          <View style={estilo.procurar}>
            <Text>
              Search
            </Text>
          </View>
          <Image source={require("./assets/filter.png")} style={estilo.headerimg} />
        </View>
        <View />
        {/* FIM DO HEADER ========== */}

        {/* INICIO IMG ============ */}
        <View>
          <Image source={{ uri: "http://media.pbseducation.org/craft.prod/assets/_1200x671_crop_center-center_75/15-lessons-learned-blog-header.png" }} style={estilo.img} />
        </View>
        {/* FIM IMG ============ */}

        {/* Lista de dados ========= */}
        <View style={estilo.dados}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" }} style={estilo.imgdados} />
          <View style={estilo.info}>
            <Text style={estilo.name}>Gin Wellback</Text>
            <Text style={estilo.country}>Spanish</Text>
          </View>

          <View style={estilo.renda}>
            <Text>$ 230/h</Text>

          </View>

          <View style={estilo.nota}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/786/786432.png" }} style={estilo.star} />
            <Text style={estilo.cor}>4.7</Text>
          </View>

        </View>
        {/*FIM DA Lista de dados ========= */}
        {/* Lista de dados ========= */}
        <View style={estilo.dados}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }} style={estilo.imgdados} />
          <View style={estilo.info}>
            <Text style={estilo.name}>Deolane</Text>
            <Text style={estilo.country}>Inglês</Text>
          </View>

          <View style={estilo.renda}>
            <Text>$ 350/h</Text>

          </View>

          <View style={estilo.nota}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/786/786432.png" }} style={estilo.star} />
            <Text style={estilo.cor}>5.0</Text>
          </View>

        </View>
        {/*FIM DA Lista de dados ========= */}
      </ScrollView>

      {/*INICIO DO FOOTER ========= */}
      <View style={estilo.footer}>
        <Image source={{ uri: "https://cdn-icons.flaticon.com/png/512/5859/premium/5859234.png?token=exp=1636726027~hmac=37dc68c6545054c965941ae9028a25cb" }} style={estilo.icons} />
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/633/633839.png" }} style={estilo.icons} />
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png" }} style={estilo.icons} />
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/5167/5167053.png" }} style={estilo.icons} />
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png" }} style={estilo.icons} />
      </View>
      {/*FIM DO FOOTER ========= */}


    </View>
  );
}

