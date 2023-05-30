import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { TimerCountDown } from './TimerCountDown';
import { TimmerToggleBtn } from './TimmerToggleBtn';


const focus_time_in_minutes = 25 * 60 * 1000;
const break_time_in_minutes = 5 * 60 * 1000;
export default function App() {

  const [count, setCount] = useState<number>(focus_time_in_minutes);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null); // This state is to be able to reference id to clearInterval
  const [isTimerRunning, setisTimerRunning] = useState<boolean>(false);
  const [mode, setMode] = useState<"Focus"|"Break">("Focus");

  useEffect(()=>{
    if(count===0){
      if(mode==="Focus"){
        setMode("Break");
        setCount(break_time_in_minutes);
      }else{
        setMode("Focus");
        setCount(focus_time_in_minutes)
      }
      stopTimer();
    }
  },[count])
  const startTimer = () => {
    setisTimerRunning(true);
    const id = setInterval(() => setCount(prev => prev - 1000), 1000)
    setTimerInterval(id);
  }
  const stopTimer = () => {
    if (timerInterval != null) {
      clearInterval(timerInterval);
    }
    setisTimerRunning(false);
  }
  return (
    <View style={{...styles.container,...{backgroundColor:mode==='Break'?"#00A550":"#CD5700"}}}>
      <Text style={{fontSize:25,fontWeight:"500",color:"#fff"}}>{mode==='Focus'?"Stay focused, be present ⏳":`Take a break`}</Text>
      <StatusBar style="auto" />
      <TimmerToggleBtn isTimerRunning={isTimerRunning} stopTimer={stopTimer} startTimer={startTimer} />
      <TimerCountDown TimeDate={new Date(count)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CD5700',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
