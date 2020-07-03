import * as React from 'react';
import { StyleSheet, Button, ScrollView, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Elit qui minim ut labore aute excepteur tempor culpa proident consequat magna id aliquip cupidatat officia. Sunt nisi quis in ullamco culpa et est ut consequat est. Aliquip nulla sint enim esse mollit culpa voluptate occaecat minim ea eiusmod mollit. Magna Lorem ex elit eiusmod ex irure tempor ipsum nulla et est dolore pariatur laboris.</Text>
        <Text style={styles.text}>Nulla ex nostrud magna eiusmod est ea dolore consectetur in esse ullamco fugiat excepteur ut. Pariatur sunt non duis sint occaecat nulla tempor qui labore ea. Labore amet labore eu nostrud minim deserunt pariatur qui veniam. Voluptate duis in dolor commodo enim sunt. Sunt sit consectetur id non incididunt cupidatat aute commodo culpa cillum aliqua. Do labore aliquip ad ad. Fugiat pariatur sint eu sunt proident irure dolor consectetur anim tempor anim esse occaecat aliqua minim.</Text>
        <Text style={styles.text}>Laboris dolor ullamco non do consectetur pariatur veniam. Reprehenderit velit ullamco voluptate irure. Labore cillum ipsum velit. Sit ut Lorem ea ullamco irure sint deserunt proident elit aute ex proident occaecat enim.</Text>
        <Text style={styles.text}>Est ea tempor labore culpa incididunt laborum. Dolore id mollit pariatur Lorem excepteur do laborum quis enim non consectetur sit commodo aute. Esse nisi reprehenderit voluptate consequat dolore duis. Ut ipsum veniam consectetur non dolore fugiat tempor deserunt duis minim do. Dolore veniam labore adipisicing enim sunt nulla laborum minim labore enim ipsum laborum deserunt. Non consectetur id commodo non irure sit amet adipisicing in Lorem. Laboris occaecat voluptate nisi veniam nisi dolor eu.</Text>
        <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Press Me"
        />

        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  text: {
    paddingBottom: 10
  },
  scrollView: {
    marginHorizontal: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
