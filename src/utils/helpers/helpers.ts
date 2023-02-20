import React from "react";
import { Alert, Share } from "react-native";

const helpers = {
    shareMessage: async (content: string) => {
        try {
            const result = await Share.share({
                message: content,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    //
                }else{
                    //
                }
            } else if (result.action === Share.dismissedAction) {
                // dismiss
            }
        } catch (err) {
            Alert.alert("Have Error")
        }
    },
    shareContent: async () => {}
    

}

export default helpers;