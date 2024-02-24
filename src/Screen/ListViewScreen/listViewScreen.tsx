import { FlatList, RefreshControl, Text, View } from "react-native"
import styles from "./styles";
import Divider from "../../Component/Divider";


interface Props {
    data?: any;
    handleLoadMore?: any;
    isRefreshing?: any;
    handleRefresh?: any;

}

const ListViewScreen = ({ data, handleLoadMore, isRefreshing, handleRefresh }: Props) => {

    const renderItem = ({ item }: any) => (
        <View style={styles.inner}>
            <Text style={styles.title}>{item.title}</Text>
            <Divider />
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
        />
    )
}

export default ListViewScreen