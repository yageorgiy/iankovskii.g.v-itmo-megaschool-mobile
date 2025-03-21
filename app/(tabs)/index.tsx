import { Image, StyleSheet, Platform, ImageBackground, SectionList } from 'react-native';

import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { getNews } from '@/components/api/api';
import { truncateText } from '@/components/tools/truncateText';
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item11111',
  },
];

type ItemProps = {title: string, description: string};

const Item = ({title, description}: ItemProps) => (
  <ThemedView style={styles.item}>
    <Image
      source={image}
      resizeMode="cover"
      style={styles.image} />
    <ThemedText type="defaultSemiBold">
      {truncateText(title, 50)}
    </ThemedText>
    <ThemedText>
      {truncateText(description, 150)}
    </ThemedText>
  </ThemedView>
);

const image = require('@/assets/images/background-image.png'); 

export default function HomeScreen() {

  const [dataEnergy,  setDataEnergy]  = useState([]);
  const [dataOil,     setDataOil]     = useState([]);
  const [dataMoney,   setDataMoney]   = useState([]);

  const [dataEnergyLoading, setDataEnergyLoading] = useState(false);
  const [dataOilLoading,    setDataOilLoading]    = useState(false);
  const [dataMoneyLoading,  setDataMoneyLoading]  = useState(false);

  useEffect(() => {
    getNews("energy", setDataEnergy,  setDataEnergyLoading);
    getNews("oil",    setDataOil,     setDataOilLoading);
    getNews("money",  setDataMoney,   setDataMoneyLoading);
  }, []);
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'Energy',
              data: dataEnergy
            },
            {
              title: 'Oil',
              data: dataOil
            },
            {
              title: 'Money',
              data: dataMoney
            },
          ]}
          // keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item 
            title={item.display_title}
            description={item?.abstracts["cdata!"]} 
          />}
          renderSectionHeader={({section: {title}}) => (
            <ThemedText style={styles.title} type="title">
              {title}
            </ThemedText>
          )}
        />

      </SafeAreaView>
    </SafeAreaProvider>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12'
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: { light: '#A1CEDC', dark: '#1D3D47' },
    display: 'flex',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundSize: '50px cover',
    // height: ('50%')
  },
});