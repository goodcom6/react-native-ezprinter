/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import EzPrinter,{ FontSize, AlignmentType, BarcodeType } from 'react-native-ezprinter';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [strLeft, setStrLeft] = useState('Left');
  const [strRight, setStrRight] = useState('Right');
  const [strMid, setStrMid] = useState('Mid');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    parentView: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 20,
    },
    childView: {
      flex: 1,
      borderWidth: 1,
    },
    marginRight: {
      marginRight: 25,
    },
  });

  const printLeft = () => {
    EzPrinter.drawCustom(strLeft, FontSize.Default, AlignmentType.Left);
    EzPrinter.printText(true);
  };
  const printTicket = () => {
    EzPrinter.printImageByBase64(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAACGCAYAAADdAv1sAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0M1NjU4OUFEMUZEMTFFREFBM0E4MjQ1N0E0M0IzREUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0M1NjU4OUJEMUZEMTFFREFBM0E4MjQ1N0E0M0IzREUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QzU2NTg5OEQxRkQxMUVEQUEzQTgyNDU3QTQzQjNERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QzU2NTg5OUQxRkQxMUVEQUEzQTgyNDU3QTQzQjNERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq4jMbMAAAazSURBVHhe7dyLbts4EAXQZv//n7vRbARkDT9EicOXzgGEFmgjDsmRri27/fr77Q8At/fPz68A3JxAACAIBACCQAAgCAQAgkAAIAgEAIJAACAIBACCQAAgCAQAgkAAIAgEAIJAACAIBACCQAAgCAQAgkAAIAgEAIJAACAIBACCQAAgCAQAgkAAIAgEAIJAACAIBACCQAAgCAQAgkAAIAgEAIJAACB8/f328/tpfH19/fzuuAmnCdDUFIFwJgA+ERBcVdKX+o0ZDPvIaLvY9iND9vmBz1x/YxkuEHrcpAUDtOWaG9NQgdC7QTQo5BIEYxsiEEZqEs0KOVxb4+seCCM2yUgBBbNzPc2jayBoEliXIJhPt0CYoVE0M5zj2plTl0CYqVk0NnAXXf5hWq2b7JHSW44F/KfkunNtjaN5IFy5QV8ttefYcCcCYU5NHxmdvSFvDVOjaa6c40qYAMyg+9dOP6n96qFWuACsplkgnHmFnXnjFgoA/9fsM4TSQGhR1kghdbSWGYLs3VxGrf9VzTOs9ydHeqv2PEuurew1XuXaatGjTQKhpDk2LTemZ22lYz+qVUtJHa/GPDOXEeo/+rPPaq2xbs/02o/NmT05O9ZRPWo6M+Y7V/b06M/WqHm4zxBqb0QNW037UcO2wTUuolrnueJKDb3rLxm7Z52lrtTae0+uqlX/KOtQUkONeof/UDnb403+981/P2rJarJejVtr3B7191qzTNucZt6TqzJq7rkOPcZOD4QZGivj5v8oex1ar3Pt8VrWf2aszN6oIWP9WvfUFZm19liHXj061DuE0S+6s1o11Ozj9LjwVpC5bjPsSYsa79Kbt39klK11I2WP5/xjWW0+pVrOv9VYPfdUICxo9pvE3W9yoxl1P3rUtXpvpn7ttGTxVnxcdKZ5nq1DrfO8UqPJX4139tyt6//k6r6svB/Z63917Xc116RkPzfZa7QprekZgZCktAGOzD/jnJsrzZo5Rov6j3hVR8m4R+eyGXE/SurfZK3NLqP+zJqv7OkRZ9bwGY+MBnB0M2ttei0l9YxW+4oy1zj7hlYiIww2Jes30nrUJBAWltm0Z24+pT/T6qLb6no8ZlNa84xzPGOVee59+fvIsNQjoxY3kCN1Zs+79vnPrNvZ/SodK6v+zdFzv/p7tfdhl7FGz2SOM8LaZK9L5p7ujoyxnfvsXB95h7CQrSkejwxXzptVU6mjdYxSb4aV59bC2Zv8UT16VCBMaGuAZwdw3Z2vJYHQkZv4ZxmvwlZadz303Ozr0qt+gVBZ9tvI3mo0qpsYZ6x+bY1AIACctFpICQRgOduN+spxV8MEwp03gXY8rmJ0PXs0NRBcfADzWOqR0RZAZw4AfIYAwI+hAsHnCAD9pAeCRzIAc0j9z+12pa/8W4dISX2faqt5rlZ61LzCmmeN23I+M82h1z7XMEvtPkOgSEljA3NpEgiliTfzTSfrVdSj7WefHTMoqXO0V3qwsmHfIcxycxvN73DYD1iBFwf5mgXCmc3MvpnNesPsXbOQYXRXenS/LzwedzD8ZwgZm3GnDR7tVdVd1p317PeN38dqmgbClZtTjcVvtYkl85y1qUZbR+4h+9oq+ZkV+7P5O4SrobAfR/z++0d/poeS2kaaR2ktI+8Ba5r12upl+EdGr2yb9+noqTT4jtRbOqcWr2CO1tR7P7gvvXdcl0BY8a1WDe8ad+Sm3mp7Vd+7P3tHj9zHu/541j9neuNdH777s1dW7c8m/1L5ldJN6OnsMvWaY0m9o+1D6VqX1F+z3bPGbTmfEeZwxLOxa49x1Jk1b7mnV3R9ZNRz4iVmqXM3W72sRw/OqftnCCM3zlbb1fpcGGWsF0f16JXV+3OID5W3RR5toWvW03Ju2WNlnn+0HmB8K11bIxjqW0bbgvdc9H38jBpazC37/LuMubSqnXZa9mO2u/TnUIGw2xa/5Qa0HC9jnNbrtasxZq/aaaPV3mb10d36c8hA2GVuxn7uHptda9xe9f92ZfzetdNGyz6tNVbLmkfS9WunV5R+5Wz0aR6dT8Y8an4l7tO5Jm03Kmrd6z2vrdlMGwjUUzMQgHkN/cgIgHYEAgBBIAAQBAIAQSAAEAQCAEEgABAEAgBBIAAQBAIAQSAAEAQCAEEgABAEAgDBf38NQPAOAYAgEAAIAgGAIBAACAIBgCAQAAgCAYAgEAAIAgGAIBAACAIBgCAQAAgCAYAgEAAIAgGAIBAACAIBgCAQAAgCAYAgEAAIAgGAIBAACAIBgCAQAAgCAYAgEAAIAgGAb3/+/Aujo3xnCJ0mkQAAAABJRU5ErkJggg==',
      AlignmentType.Center,
      false,
    );
    EzPrinter.drawOneLine(FontSize.MediumBold);
    EzPrinter.drawCustom("Request Time", FontSize.Medium, AlignmentType.Center);
    EzPrinter.drawCustom("10:03", FontSize.MediumBold, AlignmentType.Center);
    EzPrinter.drawOneLineDefault();
    EzPrinter.drawText("1 x", FontSize.SmallBold, "test", FontSize.SmallBold, "65.00", FontSize.SmallBold);
    EzPrinter.drawLeftRight("option1",FontSize.Default, "60.00", FontSize.Default);
    EzPrinter.drawText("option2", FontSize.Default, "", FontSize.Default, "5.00", FontSize.Default);
    EzPrinter.drawQrCode("test123", AlignmentType.Center);
    EzPrinter.drawText("",0,"test123",FontSize.Default,"",0);

    EzPrinter.drawOneLineDefault ();
    EzPrinter.drawCustom("Thanks!", FontSize.Small, AlignmentType.Center);
    EzPrinter.printText(true);
  };

  const printImageByBase64 = () => {
    EzPrinter.printImageByBase64(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAACGCAYAAADdAv1sAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0M1NjU4OUFEMUZEMTFFREFBM0E4MjQ1N0E0M0IzREUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0M1NjU4OUJEMUZEMTFFREFBM0E4MjQ1N0E0M0IzREUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QzU2NTg5OEQxRkQxMUVEQUEzQTgyNDU3QTQzQjNERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QzU2NTg5OUQxRkQxMUVEQUEzQTgyNDU3QTQzQjNERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRG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',
      AlignmentType.Center,
      true,
    );
  };

  const printRight = () => {
    EzPrinter.drawText('', 0, '', 0, strRight, 0);
    EzPrinter.printText(true);
  };

  const printMid = () => {
    EzPrinter.drawText('', 0, strMid, 0, '', 0);
    EzPrinter.printText(true);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View style={styles.parentView}>
          <View style={[styles.childView, styles.marginRight]}>
            <TextInput value={strLeft} onChangeText={setStrLeft} />
            <Button title="Print Left" onPress={printLeft} />
          </View>
          <View style={styles.childView}>
            <TextInput value={strRight} onChangeText={setStrRight} />
            <Button title="Print Right" onPress={printRight} />
          </View>
        </View>
        <View style={styles.parentView}>
          <View style={styles.childView}>
            <TextInput value={strMid} onChangeText={setStrMid} />
            <Button title="Print Mid" onPress={printMid} />
          </View>
        </View>
        <View style={styles.parentView}>
          <View style={styles.childView}>
            <Button
              title="Print Ticket"
              onPress={printTicket}
            />
          </View>
        </View>
        <View style={styles.parentView}>
          <View style={styles.childView}>
            <Button
              title="Print image by base64"
              onPress={printImageByBase64}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
