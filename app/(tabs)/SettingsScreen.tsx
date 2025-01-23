import React, { useState } from "react"
import { View, Text, Switch, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [saveHistory, setSaveHistory] = useState(true)
  const [vibrationEnabled, setVibrationEnabled] = useState(true)
  const [autoCopy, setAutoCopy] = useState(false)

  const toggleSetting = (setting, setSetting) => {
    setSetting((prevState) => !prevState)
  }

  const colorOptions = ["black", "red", "blue", "green"]

  return (
    <SafeAreaView style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.settingGroup}>
          <SettingItem
            label="Dark Mode"
            value={darkMode}
            onToggle={() => toggleSetting(darkMode, setDarkMode)}
            darkMode={darkMode}
          />
          <SettingItem
            label="Save Scan History"
            value={saveHistory}
            onToggle={() => toggleSetting(saveHistory, setSaveHistory)}
            darkMode={darkMode}
          />
          <SettingItem
            label="Vibrate on Scan"
            value={vibrationEnabled}
            onToggle={() => toggleSetting(vibrationEnabled, setVibrationEnabled)}
            darkMode={darkMode}
          />
          <SettingItem
            label="Auto-copy Scanned Content"
            value={autoCopy}
            onToggle={() => toggleSetting(autoCopy, setAutoCopy)}
            darkMode={darkMode}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const SettingItem = ({ label, value, onToggle, darkMode }) => (
  <View style={styles.settingItem}>
    <Text style={[styles.label, darkMode ? styles.darkText : styles.lightText]}>{label}</Text>
    <Switch value={value} onValueChange={onToggle} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  settingGroup: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  label: {
    fontSize: 16,
  },
  darkText: {
    color: "#ffffff",
  },
  lightText: {
    color: "#000000",
  },
})

export default SettingsScreen

