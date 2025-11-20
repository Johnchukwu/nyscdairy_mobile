
import * as ImagePicker from "expo-image-picker";

export function useMediaPicker() {
  const pick = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });
    if (res.canceled) return null;
    return res.assets[0].uri;
  };
  return { pick };
}
