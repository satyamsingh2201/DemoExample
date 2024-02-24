import { FlatList, Text, View } from "react-native"
import styles from "./styles";
import Divider from "../../Component/Divider";
import { memo } from "react";


interface Props {
    data?: any;
}

const FlattenDirectoryScreen = ({ data }: Props) => {

    const renderItem = ({ item }: any) => (
        <View style={styles.inner}>
            <Text style={styles.title}>{item}</Text>
            <Divider />
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default memo(FlattenDirectoryScreen)