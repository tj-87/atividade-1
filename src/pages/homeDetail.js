import { Button, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export function HomeDetail() {
    const { navigate } = useNavigation()
    return (
        <View
            style={{
                flex: 1,
                padding: 12,
            }}>
            <View
                style={{
                    flex: 1,
                    padding: 12,
                    justifyContent: 'flex-end',
                    alignContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        padding: 12,
                    }}
                >Aqui será criado meu App</Text>
            </View>
            <View
                style={{
                    width: '100%',
                    flex: 1,
                    justifyContent: 'flex-end',

                }}
            >
                <Button
                    title='Voltar para página inicial'
                    color='#2f6655'
                    onPress={() => navigate('Home')}
                />
            </View>
        </View>
    )
}