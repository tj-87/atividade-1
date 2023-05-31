import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export function Home() {
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
                >
                    Sejam Bem Vindos
                </Text>
            </View>
            <View
                style={{
                    width: '100%',
                    flex: 1,
                    justifyContent: 'flex-end',
            

                }}>
                <Button
                    color='#2f6655'
                    title='Próxima página'
                    onPress={() => navigate('HomeDetail')}
                />
            </View>
        </View>
    )
}