import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Post = ({ post }) => {
    const [selected, setSelected] = useState(false);

    const onPress = () => {
        setSelected(!selected)
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={[styles.title, styles.common]}>{post.title}</Text>
            <Text style={[styles.text, styles.common]}>@user {post.userId}</Text>
            {selected && <Text style={[styles.body]}>"{post.body}"</Text>}

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: '1ex',
        padding: '1ex',
        flex: 1,
        backgroundColor: '#00c8ff',
        justifyContent: 'center',
        borderRadius: 10,
        width: '80vw',
    },

    text: {
        color: '#ffff',
        marginBottom: '1ex'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#616161'
    },

    common: {
        paddingLeft: 10
    },

    body: {
        fontSize: 18,
        padding: "2ex",
        backgroundColor: '#ffff',
        width: "100%",
        textAlign: 'center',
        color: '#7e7b76',
        fontStyle: 'italic',
        alignSelf: 'center',
        borderRadius: 10,
    }


});

export default Post;