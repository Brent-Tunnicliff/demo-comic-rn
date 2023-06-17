import uuid from 'react-native-uuid';

export const generateUuid = () => {
    return uuid.v4();
};