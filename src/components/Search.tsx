/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../theme/appTheme';

const ViewSearch = (props: any) => {
  const onChange = (newSearch: string) => {
    props.setSearch(newSearch);
  };
  return (
    <View>
      <View style={styles.inputTextSearch}>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../recursos/images/icon-search.png')}
            style={{
              marginLeft: 4,
              marginRight: 4,
              height: 22,
              width: 22,
            }}
          />

          <TextInput
            value={props.search}
            onChangeText={text => onChange(text)}
            style={styles.textSearch}
            placeholder="Buscar"
          />
        </View>
      </View>
    </View>
  );
};

export default ViewSearch;

const styles = StyleSheet.create({
  //search
  inputTextSearch: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderColor: colors.primary,
    borderWidth: 2,
    marginTop: 1,
    marginBottom: 1,
    borderRadius: 60,
  },
  textSearch: {
    width: '90%',
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.tertiary,
    fontFamily: 'Poppins-Bold',
    marginLeft: 4,
    marginRight: 4,
  },
});