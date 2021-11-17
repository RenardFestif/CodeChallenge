import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import Posts from './components/Posts';
import { SearchBar, Header, Image } from 'react-native-elements';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setPosts(res.data);
        setDisplayedPosts(res.data);
      })
      .catch(error => console.error(error))

  }, [])

  const updateSearch = (search) => {
    // Check numeric entry => did not find searchBar entry type
    const regex = /(0|[1-9][0-9]*)$/g
    if (search.match(regex) || search === '') {
      setSearch(search);
      if (search === '') {
        setDisplayedPosts(posts)
      } else {
        setDisplayedPosts(posts.filter(post => post.userId === Number(search)))
      }

    }
    setLoaded(true)

  }


  return (
    <SafeAreaProvider style={styles.container}>
      <Header
        barStyle="light-content"
        containerStyle={styles.header}
        rightContainerStyle={{ justifyContent: 'center' }}
        rightComponent={
          <SearchBar
            placeholder="Filter by user ID ..."
            lightTheme="true"
            onChangeText={updateSearch}
            value={search}
            style={styles.searchBar}
          />}

        leftComponent={
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />
        }
      >
      </Header>
      {
        displayedPosts.length === 0 && loaded ?
          <Text style={styles.empty}>No Data to display for @user {search}</Text>
          :
          <Posts
            posts={displayedPosts}
          />
      }

    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100vw',
    position: 'fixed',
    top: '0',
    zIndex: 1000,
    flexDirection: 'column',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    justifyContent: 'center'

  },
  logo: {
    height: '10vh',
    width: '10vh',
  },
  searchBar: {
    width: '50vw'
  },
  empty: {
    marginTop: '50vh',
    fontSize: 25
  }
});
