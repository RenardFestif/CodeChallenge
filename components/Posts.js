import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Post from '../models/Post';

const Posts = (props) => {


    const renderItem = ({ item }) => (
        <Post
            post={item}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={props.posts}
                renderItem={renderItem}
                keyExtractor={post => post.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '13vh'
    }
})


export default Posts