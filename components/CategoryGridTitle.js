import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
} from "react-native";

function CategoryGridTitle({ title, color, onPress, imageUrl }) {
  console.log(imageUrl);
  return (
    <View style={[styles.gridItem]}>
      <ImageBackground
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.4 }}
      >
        <View>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ]}
            onPress={onPress}
          >
            <View style={[styles.innerContainer]}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(54,51,51,1)",
    borderRadius:6,
  },
  gridItem: {
    flex: 1,
    margin: 16,
    height: 117,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    color: "white",
  },
});
