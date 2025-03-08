import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


// Home Screen พร้อม SliderBox
function HomeScreen() {
    const images = [
        require('./assets/im1.jpg'),
        require('./assets/im2.jpg'),
        require('./assets/im3.jpg'),
        require('./assets/im4.jpg'),
        require('./assets/im5.jpg'),
    ];

    return (
        <View style={styles.screen}>
            <SliderBox
                images={images}
                sliderBoxHeight={200}
                dotColor="gray"
                inactiveDotColor="honeydew"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                ImageComponentStyle={styles.sliderImage}
            />           
        </View>
    );
}

// Profile Screen

export default HomeScreen;

// Styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop:100,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    sliderImage: {
        borderRadius: 20,
        width: '96%',
        alignSelf: 'center',
    },
});
