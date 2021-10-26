import React from "react";
import {FlatList, View, ScrollView} from "react-native";

//Local Imports
import styles from "./styles";
import Title from "../../components/Title";
import CategoryCourses from "../../components/Category";
import {CATEGORY, COURSES} from "../../utils/constant";
import Courses from "../../components/Courses";

export default function HomeScreen(props) {
    const renderCategoryItem = ({item}) => (
        <CategoryCourses iconName={item.iconName} color={item.color} title={item.title}/>
    );
    const renderCourseItem = ({item}) => (
        <Courses image={item.image} color={item.color} title={item.courseTitle} onPress={onPlayVideo} />
    );
    const onPlayVideo = () => {
        props?.navigation.navigate('VideoPlayer')
    }

    return (
        <ScrollView style={styles.container}>
            <Title title={"Learning Path"}/>
            <FlatList
                data={CATEGORY}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

            <Title title={"Free Courses"} right={true}/>
            <View style={{paddingBottom: 20, marginBottom: 20}}>
                <FlatList
                    data={COURSES}
                    renderItem={renderCourseItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    )
}
