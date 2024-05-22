import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // replace with your actual icon library

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.greeting}>Hola, Echa</Text>
          <Ionicons name="notifications" size={24} color="white" />
        </View>
        
        <View style={styles.headerTextContainer}>
          <Text style={styles.subGreeting}>find an easy parking spot</Text>
          <Ionicons name="notifications" size={24} color="white" />
        </View>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>Category</Text>
            <View style={styles.iconRow}>
              <View style={styles.iconContainer}>
                <Image source={{ uri: 'car_image_path' }} style={styles.icon} />
                <Text>Car</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image source={{ uri: 'bike_image_path' }} style={styles.icon} />
                <Text>Bike</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image source={{ uri: 'bus_image_path' }} style={styles.icon} />
                <Text>Bus</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image source={{ uri: 'van_image_path' }} style={styles.icon} />
                <Text>Van</Text>
              </View>
            </View>
          </View>
          <Text style={styles.nearestParking}>Nearest Parking Spaces</Text>
          <View style={styles.parkingContainer}>
            <Image source={{ uri: 'parking_image_path' }} style={styles.parkingImage} />
            <View style={styles.parkingDetails}>
              <Text style={styles.parkingTitle}>
                Graham Mall <Text style={styles.redText}>7 min</Text>
              </Text>
              <Text>123 Dhaka Street</Text>
              <Text style={styles.redText}>$7/hour</Text>
            </View>
          </View>
          <View style={styles.parkingContainer}>
            <Image source={{ uri: 'parking_image_path' }} style={styles.parkingImage} />
            <View style={styles.parkingDetails}>
              <Text style={styles.parkingTitle}>
                Graham Mall <Text style={styles.redText}>7 min</Text>
              </Text>
              <Text>123 Dhaka Street</Text>
              <Text style={styles.redText}>$7/hour</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f', // Black blue background
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    color: 'white',
  },
  subGreeting: {
    fontSize: 18,
    color: 'white',
  },
  searchContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  searchInput: {
    width: '100%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  mainContent: {
    backgroundColor: '#DDEEFF', // Light blue
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 18,
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  nearestParking: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  parkingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  parkingImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  parkingDetails: {
    flex: 1,
  },
  parkingTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  redText: {
    color: 'red',
  },
});
