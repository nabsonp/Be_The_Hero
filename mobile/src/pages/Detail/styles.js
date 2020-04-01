import {StyleSheet} from 'react-native';
// Biblioteca com os tamanhos constantes dos componentes dos apps
// expo install expo-constans
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection:  'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, 

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 58,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
    
});