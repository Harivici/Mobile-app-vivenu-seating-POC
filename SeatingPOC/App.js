import React, { useEffect } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

export default function Home() {
  const loadScript = () => {
    const script = `
      if (typeof window !== 'undefined' && window.VIInit) {
        const instance = window.VIInit();
        instance.initSeatSelector({
          holder: 'map',
          baseUrl: 'https://seatmap.vivenu.com',
          eventId: '642ccf05f3622e50a284b00e',
        });
      }
    `
    console.log('hello')
    // console.log('window', window)
    // webViewRef && webViewRef.current.injectedJavaScript(script)
  }

  const webViewRef = React.useRef(null)
  const jsCode = `document.querySelector('.HeaderHero').style.backgroundColor = 'purple';`;
  useEffect(() => {
    // loadScript()
  }, [])

  const handleScriptLoad = () => {
    loadScript()
  }
  const runFirst = `
  document.body.style.backgroundColor = 'gold';
  setTimeout(function() { window.alert('hi');}, 2000);
  true; // note: this is required, or you'll sometimes get silent failures
`;
  return (
    <SafeAreaView style={{ flex: 1}} collapsable={false}>
      <View style={{ flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Vivenu Seating POC using Webview </Text>
      {/* <WebView
        source={{ uri: 'https://seatmap.vivenu.com/js/init.js' }}
        javaScriptEnabled={true}
        injectedJavaScript={`
          document.addEventListener('load', function() {
            window.ReactNativeWebView.postMessage('Script loaded');
          });
        `}
        onMessage={(event) => {
          if (event.nativeEvent.data === 'Script loaded') {
            loadScript()
          }
        }}
        onLoad={handleScriptLoad}
        ref={webViewRef}
      /> */}
      <WebView
          ref={webViewRef}
          source={{ uri: 'https://qvb.ts.centre-websites.vcx.cloud/event-booking-testing/paid-recurring-seating'}}
          originWhitelist={['*']}
          javaScriptEnabled={true}
          injectedJavaScript={jsCode}
        />
        {/* <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ html: `
        <!DOCTYPE html>
<html>
    <head>
        <style>
            * {
                margin: 0;
                padding: 0;
            }

            #map, #map iframe {
                width: 100vw;
                height: 100vh;
            }
        </style>
    </head>
        <body>
        <script>
        

        const eventId = '643558941fe2aebaae76dd81';

        const coreUrl = "https://vivenu.dev"
        const baseUrl = "https://seatmap.vivenu.dev";
        const createCheckout = () => {
          window.alert(baseUrl);
        }
        </script>
        
        <h1>This is a static HTML source!</h1>
        <button onclick="createCheckout()">Create Checkout</button>
        <div id="map" />
        </body>
        </html>
        ` }}
        injectedJavaScript={runFirst}
      /> */}
      {/* <WebView
          ref={(ref) => (this.webview = ref)}
          source={{ uri: 'https://google.com' }}
          onError={console.error.bind(console, 'error')}
          bounces={false}
          onShouldStartLoadWithRequest={() => true}
          javaScriptEnabledAndroid={true}
          startInLoadingState={true}
          style={{ flex: 1 }}
        />
      <Button onPress={this.onPressBroken} title={'Broken'} />
        <Button onPress={this.onPressWorks} title={'Works'} />
        <Button onPress={this.reload} title={'Reload'} /> */}
        </View>
    </SafeAreaView>
    
  )
}
