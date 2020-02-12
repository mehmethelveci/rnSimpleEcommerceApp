import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import makeStyle from './styles';

const Header = props => {
  const styles = makeStyle();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.scene.descriptor.options.title}</Text>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}><Icon size={24} name='menu'/></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

class HeaderScreen extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

export default HeaderScreen;
