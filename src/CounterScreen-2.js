import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />

      <Text>Counter: {counter}</Text>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => `${Math.random() * 101010}`}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  console.log("RED", `rgb(${red},${green},${blue}`);
  return `rgb(${red},${green},${blue})`;
};
export default CounterScreen;
