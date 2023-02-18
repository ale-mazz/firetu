import React, { useState } from "react";
import DropDownPicker, {
  DropDownPickerProps,
  ItemType,
} from "react-native-dropdown-picker";
import { TodoPriority } from "../../types/todo";
import { StyleSheet } from "react-native";

const PriorityPicker = ({
  value,
  setValue,
  open,
  setOpen,
}: Omit<DropDownPickerProps<number>, "items">) => {
  const [items] = useState<ItemType<any>[]>([
    { label: "Low", value: TodoPriority.LOW },
    { label: "Medium", value: TodoPriority.MEDIUM },
    { label: "High", value: TodoPriority.HIGH },
  ]);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      style={styles.color}
      containerStyle={styles.color}
      dropDownContainerStyle={styles.color}
      labelStyle={styles.label}
    />
  );
};

const styles = StyleSheet.create({
  color: { borderColor: "#FFE7CC", backgroundColor: "#FFFAD7" },
  label: { fontFamily: "Lato_400Regular", fontSize: 16 },
});

export default PriorityPicker;
