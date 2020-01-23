import React, {useState} from 'react';
import {
    Alert,
    AsyncStorage,
    View,
    Modal,
    ScrollView,
    Image,
    StyleSheet,
    TextInput
} from "react-native";

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Text,
    Left,
    Right,
    Button,
    Body,
    Icon,
    Accordion,
    Input,
    Item
} from "native-base";

const EventCard = ({name, place, time, code, points}) => {

    const [heart, setHeart] = useState("ios-heart-empty");

    const likeEvent = () => {
        if(heart === "ios-heart"){
            setHeart("ios-heart-empty");
        } else {
            setHeart("ios-heart");
        }
    }

    return (

            <Card style={styles.card}>
                <CardItem style={styles.header}>
                    <Left style={styles.leftHeader}>
                        <Image style={styles.icon} source={require("../assets/images/white.png")}/>
                        <Body>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.subtitle}>{time}</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Button name={heart} transparent onPress={likeEvent}>
                            <Icon
                                style={styles.likeButton}
                                name={heart}
                                active={true}
                            />
                        </Button>
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Image style={styles.img} source={require("../assets/images/cardPic.png")}/>
                </CardItem>
                <CardItem style={styles.footer}>
                    <Left>
                        <Text>{place}</Text>
                    </Left>
                    <Right>
                        <Text>{time}</Text>
                    </Right>
                </CardItem>
            </Card>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff"
    },
    card: {
        margin: 15
    },
    header: {
        backgroundColor: "#CEB888",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    footer: {
        backgroundColor: "#782F40",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    img: {
        width: null,
        height: 200,
        flex: 1
    },
    icon: {
        width: 40,
        height: 40
    },
    title: {
        fontSize: 17,
        fontWeight: "bold"
    },
    subtitle: {
        color: "gray",
        fontSize: 15
    },
    leftHeader: {
        flex: 1,
    },
    likeButton: {
        color: "#782F40",
        fontSize: 35
    }
});

export default EventCard;