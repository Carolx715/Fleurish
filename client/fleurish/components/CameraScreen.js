import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions'
class CameraScreen extends React.Component {

    camera = null;
    _focusListener = null;
    _blurListener = null;

    state = {
        hasCameraPermission: null,
        isFocused: true,
    };


    async componentDidMount() {
        const camera = await Permissions.getAsync(Permissions.CAMERA);
        const hasCameraPermission = (camera.status === 'granted');

        this._focusListener = this.props.navigation.addListener('focus', () => {
            this.setState({ isFocused: true });
        });

        this._blurListener = this.props.navigation.addListener('blur', () => {
            this.setState({ isFocused: false });
        });

        this.setState({ hasCameraPermission });
    };

    componentWillUnmount() {
        if (this._focusListener) {
            this._focusListener();
            this._focusListener = null;
        }

        if (this._blurListener) {
            this._blurListener();
            this._blurListener = null;
        }
    }

    render() {
        const { hasCameraPermission, isFocused } = this.state;

        if (hasCameraPermission === null || hasCameraPermission === false ) {

        }

        else if (isFocused)
        {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.cameraType}>
                    </Camera>
                </View>
            )
        }

        return null;
    };

};

export default CameraScreen;