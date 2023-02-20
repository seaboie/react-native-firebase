import React, { Component } from 'react';
import { Dimensions } from 'react-native';

class SizeConfig {
    static readonly screen = Dimensions.get('window');
    static readonly screenWidth = this.screen.width;    // 360
    static readonly screenHeight = this.screen.height;  // 610
    static readonly ratio = this.screenWidth / this.screenHeight;
    static isMobile = (this.ratio < 0.57);
    static readonly head5 = this.screenHeight * 0.04262;    // 26
    static readonly head4 = this.screenHeight * 0.0393; // 24
    static readonly head3 = this.screenHeight * 0.036; // 22
    static readonly head2 = this.screenHeight * 0.03278; // 20
    static readonly head1 = this.screenHeight * 0.0295;   // 18
    static readonly head = this.screenHeight * 0.02622;  // 16
    static readonly body = this.screenHeight * 0.02295;   // 14
    static readonly title = this.screenHeight * 0.01967;   //  12
    static readonly subtitle = this.screenHeight * 0.0164;  // 10
    static readonly caption = this.screenHeight * 0.0131;   // 8

    static readonly padMin = this.screenWidth * 0.025;
    static readonly padMid = this.screenWidth * 0.035;
    static readonly padMax = this.screenWidth * 0.075;  //  27 / 360

    static readonly minSpace = this.screenHeight * 0.00125;
    static readonly midSpace = this.screenHeight * 0.0025;
    static readonly maxSpace = this.screenHeight * 0.005;

    static readonly spaceCaption = this.screenHeight * 0.0110;
    static readonly spaceSubtitle = this.screenHeight * 0.01381;
    static readonly spaceTitle = this.screenHeight * 0.01657;
    static readonly spaceBody = this.screenHeight * 0.01933;
    static readonly spaceHead = this.screenHeight * 0.02622;      // 16
    static readonly spaceHead1 = this.screenHeight * 0.02486;
    static readonly spaceHead2 = this.screenHeight * 0.02762;
    static readonly spaceHead3 = this.screenHeight * 0.036;      // 22
    static readonly spaceHead4 = this.screenHeight * 0.03315;
    static readonly spaceHead5 = this.screenHeight * 0.0359;




    // Card List :  84 / 724
    static readonly cardListHeight = this.screenHeight * 0.116022;

    // Navigation Bar : 55 / 724
    static readonly navBarHeight = this.screenHeight * 0.0759;

    // Sub head : 46 / 724
    static readonly breadcrumbHeight = this.screenHeight * 0.063535;

    // Head content Height : 80 / 724
    static readonly headStepperHeight = this.screenHeight * 0.110497;
    // Head Section Height : 65 / 724
    static readonly headSectionHeight = this.screenHeight * 0.08977;



    // Footer Height : 124 / 610
    static readonly footerHeight = this.screenHeight * 0.20327;     //
    // Footer Height : 70 / 610
    static readonly footerSecondHeight = this.screenHeight * 0.11475;     //

    // Button Auth Height : 34 / 610
    static readonly buttonAuthHeight = this.screenHeight * 0.0557;      //

    // Text Field Auth Height : 46 / 610
    static readonly textFieldHeight = this.screenHeight * 0.0754;      //

    /////// Space Fifty Eight : 58 / 610
    static readonly spaceFiftyEightHeight = this.screenHeight * 0.0754;      //
    /////// Space Eighty Four : 84 / 610
    static readonly spaceEightyFourHeight = this.screenHeight * 0.1377;      //
    /////// Space SixtyFour : 64 / 610
    static readonly spaceSixtyFourHeight = this.screenHeight * 0.1049;      //
    /////// Space oneTwoFourr : 124 / 610
    static readonly spaceOneTwoFourHeight = this.screenHeight * 0.1377;      //
    /////// Space oneTwoFourr : 70 / 610
    static readonly spaceSeventyHeight = this.screenHeight * 0.11475;      //
    /////// Space oneTwoFourr : 100 / 610
    static readonly spaceOneHundredHeight = this.screenHeight * 0.11475;      //




    // Footer Space Height : 30 / 610
    static readonly footerSpaceHeight = this.screenHeight * 0.04143;

    // Button Height : 46 / 610
    static readonly buttonHeight = this.screenHeight * 0.063535;

    // Button Height : 46 / 610
    static readonly buttonBottomBarHeight = this.screenHeight * 0.063535;

    // CheckBox Height : 28 / 610
    static readonly checkboxHeight = this.screenHeight * 0.03867;













}

export default SizeConfig;