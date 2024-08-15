import react from "react";
import {Text, View, Button} from 'react-native'
import MapClickButton from "./MapClickButton";
import EnterStateName from "./EnterStateName";

export default function FrontPage() {
    return (
        <View>
            <Text>Hello and welcome to Our States App!</Text>
            <Button title="SELECT THE CORRECT STATE!" onPress={MapClickButton} />
            <Button title="ENTER THE STATE NAME" onPress={EnterStateName}/>
        </View>
    );
}