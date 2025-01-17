import { FlatList, StyleSheet, Text, View } from "react-native";
import CustomButton from "../customButton";

const NoteCard = ({ item, setCurrentPage, removeNoteByIdFunction, setNoteId, noteId }: any) => (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text>{item.desc}</Text>
        <View style={styles.buttons}>
            <CustomButton
                backgroundColor="#FFC300"
                color="#151D3B"
                text="Ubah"
                fontSize={12}
                width={100}
                onPress={() => {
                    setCurrentPage('edit')
                    setNoteId(noteId)
                }}
            />
            <CustomButton
                backgroundColor="#D82148"
                color="#fff"
                text="Hapus"
                fontSize={12}
                width={100}
                onPress={() => {
                    removeNoteByIdFunction()
                    setNoteId(noteId)
                }}
            />
        </View>
    </View>
)

const Home = ({ noteList, setCurrentPage, removeNoteByIdFunction, setNoteId }: any) => (
    <View style={styles.container}>
        <CustomButton
            backgroundColor="#DDD"
            color="#203239"
            text="Tambahkan Note"
            width="100%"
            marginTop="10%"
            // Tuliskan layar "add" untuk ketika tombol-nya ditekan
            onPress={() => {
                setCurrentPage('add')
            }}
        />
        <FlatList
            showsVerticalScrollIndicator={false}
            data={noteList}
            renderItem={({ item }) => (
                <NoteCard item={item} setCurrentPage={setCurrentPage} removeNoteByIdFunction={removeNoteByIdFunction} setNoteId={setNoteId} noteId={item.id} />
            )}
            keyExtractor={(item) => item.id}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        padding: 10,
        marginVertical: 15,
        borderColor: '#DDD',
        borderWidth: 2,
        borderRadius: 5,
    },
    cardTitle: {
        fontWeight: '600',
        color: '#203239',
        fontSize: 16,
        marginBottom: 5,
    },
    buttons: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

export default Home