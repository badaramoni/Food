import Colors from '../../constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native';


const ProductListItem = ({product}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
    </View>

  );

}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },

  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});