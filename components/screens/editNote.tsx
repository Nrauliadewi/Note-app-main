import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomTextInput from '../customTextInput'
import CustomButton from '../customButton'

const EditNote = ({ setCurrentPage, editNoteFunction, noteId, noteList }: any) => {
    const noteById = noteList.find((e: any) => e.id == noteId)
    
    const [title, setTitle] = useState(noteById.title)
    const [desc, setDesc] = useState(noteById.desc)

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Edit Note</Text>
            <CustomTextInput
                text={title}
                onChange={setTitle}
                label="Judul"
                placeholder="Judul"
                numberOfLines={1}
                multiline={false}
            />
            <CustomTextInput
                text={desc}
                onChange={setDesc}
                label="Deskripsi"
                placeholder="Deskripsi"
                multiline
                numberOfLines={4}
            />
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#247881"
                    color="white"
                    text="Simpan"
                    width="100%"
                    // Jalankan function addNote dan arahkan kembali layar ke Home
                    onPress={() => {
                        editNoteFunction(noteId, title, desc)
                        setCurrentPage('home')
                    }}
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#DDDDDD"
                    color="#203239"
                    text="Kembali ke Home"
                    width="100%"
                    onPress={() => setCurrentPage('home')}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    pageTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#203239',
    },
    spacerTop: {
        marginTop: 30,
    },
})

export default EditNote