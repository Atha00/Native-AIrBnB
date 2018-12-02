import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import StarRating from "react-native-star-rating";

class RoomCard extends React.Component {
  render() {
    //[{ backgroundColor: 'red'}, this.props.style]
    return (
      <View style={[styles.container, this.props.globalMargin]}>
        <ImageBackground
          style={[styles.roomPicture, this.props.imgScale]}
          source={{ uri: this.props.roomPicture }}
        >
          <View style={styles.blockprice}>
            <Text style={styles.etiquetteText}>{this.props.price} €</Text>
          </View>
        </ImageBackground>

        <View style={[styles.legend, this.props.legendScale]}>
          <View style={{ width: "75%" }}>
            <Text style={styles.titleRoom} numberOfLines={1}>
              {this.props.title}
            </Text>
            <View style={styles.ratingLine}>
              <StarRating
                starStyle={{ fontSize: 20, marginRight: 5 }}
                disabled={false}
                maxStars={5}
                rating={Number(this.props.rating)}
                fullStarColor="#f4b73f"
                halfStarColor="#f4b73f"
                emptyStarColor="#9a9a9a"
              />
              <Text style={{ fontSize: 18, color: "grey" }}>
                {this.props.reviews}
              </Text>
            </View>
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 40 }}
              source={{ uri: this.props.profilPicture }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20
  },
  roomPicture: {
    width: "100%",
    height: 180,
    justifyContent: "flex-end"
  },
  blockprice: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    bottom: 5,
    position: "absolute",
    padding: 10,
    zIndex: 10
  },
  etiquetteText: {
    color: "white",
    fontSize: 30
  },
  titleRoom: {
    fontSize: 20,
    width: "100%",
    marginBottom: 10
  },
  ratingLine: {
    flexDirection: "row"
  },
  legend: {
    flexDirection: "row",
    marginVertical: 20
  }
});

export default RoomCard;
