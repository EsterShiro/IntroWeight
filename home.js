import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer  = createDrawerNavigator();

const Home = () => {
    const images = [
        require('./assets/im1.jpg'),
        require('./assets/im2.jpg'),
        require('./assets/im3.jpg'),
        require('./assets/im4.jpg'),
        require('./assets/im5.jpg'),
    ];



    return (
        <View style={styles.container}>
            <SliderBox
                images={images}
                sliderBoxHeight={200}
                dotColor="gray"
                inactiveDotColor="honeydew"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                ImageComponentStyle={styles.sliderImage} // Apply style to the images
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
    },
    sliderImage: {
        borderRadius: 20, // Apply border radius here
        width: '96%', // Adjust as needed, prevents images from stretching to full width
        marginTop:100,
        alignSelf: 'center', //center the image
    },
});

export default Home;