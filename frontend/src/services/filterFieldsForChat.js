import filterFields from "../Utils/filterFields";
import chatConfig from "./chatConfig";

const filterFieldsForChat = (objType, obj) => {
  const fieldsToInclude = chatConfig[objType] || [];
  return filterFields(obj, fieldsToInclude);
};

export default filterFieldsForChat;
