import { toast } from "react-toastify";

export const listToSeparatedText = (array) => {
  var text = "";
  var i;
  for (i = 0; i < array.length; i++) {
    text += array[i];
    if (i !== array.length - 1) {
      text += ", ";
    }
  }
  return text;
};

export const objectsToOptions = (list, name, value) => {
  return list.map((item, index) => ({
    key: index,
    text: item[name],
    value: item[value]
  }));
};

//export const objectsToTabs = (list, name)

export const displayToast = (success, message) => {
  if(success){
    toast.success(message)
  }
  else{
    toast.error(message)
  }
}
