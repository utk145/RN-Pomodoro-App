import React from 'react';
import { Button, Pressable, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

interface TimmerTogglePros {
    isTimerRunning: boolean,
    startTimer: () => void,
    stopTimer: () => void,
}
export const TimmerToggleBtn: React.FC<TimmerTogglePros> = ({ isTimerRunning, stopTimer, startTimer }) => {
    return (
        // <Button title={isTimerRunning ? "Stop Timer" : "Start Timer"} onPress={isTimerRunning ? stopTimer : startTimer} />
        <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
            <View style={{ borderWidth: 5, width: 220, height: 220, borderRadius: 250 / 2, justifyContent: "center", borderColor: "white", marginVertical: 50 }}>
                <FontAwesome name={isTimerRunning ? "pause" : "play"} color="white" size={100} style={{ alignSelf: "center" }} />
            </View>
        </Pressable>
    )
}

