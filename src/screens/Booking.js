import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default function Booking() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.header}>Booking ID:</Text>
        <Text style={styles.header}>Address:</Text>
        <Text style={styles.header}>Plug Type:</Text>
      </View>
      <View>
      <Grid>
    <Col>
    <Row>
            <Text>2</Text>
        </Row>
        <Row>
            <Text>3</Text>
        </Row>
    </Col>
    <Col>
        <Row>
            <Text>2</Text>
        </Row>
        <Row>
            <Text>3</Text>
        </Row>
    </Col>
</Grid>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2128',
  },
  container1: {
    flex: 1,
    backgroundColor: '#1f2128',
    marginLeft: 20,
    marginTop: 40,
  },
  header: {
    color: '#768991',
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro',
  },
});
