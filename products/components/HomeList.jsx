import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeList = () => {
    const dummyData = [
        { id: '1', title: 'Pilot', subtitle: 'S01E01', date: 'December 2, 2013"' },
        { id: '2', title: 'Lawnmower Dog', subtitle: 'S01E02', date: 'December 9, 2013' },
        { id: '3', title: 'Anatomy Park', subtitle: 'S01E03', date: 'December 16, 2013' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <FontAwesome name="film" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <View style={styles.dateContainer}>
                    <FontAwesome name="calendar" color="gray" style={{ marginRight: 5 }} />
                    <Text style={styles.caption}>{item.date}</Text>
                </View>
            </View>
            <View style={styles.trailing}>
                <FontAwesome name="arrow-right" color="dimgray" />
            </View>
        </View>
    );

    return (
        <FlatList
            style={styles.body}
            data={dummyData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    body: {
        marginTop: 50,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3, // for android devices 
        shadowColor: '#000', // for iOS devices
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'lightcoral',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    trailing: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'black',
        fontWeight: '500'
    },
    caption: {
        color: 'grey',
        fontWeight: '400'
    }
});

export default HomeList;
