import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 15,
        width: 250,
        backgroundColor: 'gray',
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 180
    },
    courseDetailContainer: {
        paddingHorizontal: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 20,
        paddingRight: 20
    },
    courseDuration: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainer: {
        marginBottom: 20,
        flexDirection: 'row'
    },
    startNowButton: {
        paddingHorizontal: 10
    }
});
