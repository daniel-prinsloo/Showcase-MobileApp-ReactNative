'use strict';

import React, {
    StyleSheet
} from 'react-native';

const spinAnimationStyles = StyleSheet.create({
    spinContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121',
    },spinnerShared:{
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     display: block;
//     background: transparent;
//     border: 10px solid rgba(23,246,251, 1.0);
//     border-radius: 500px;
//     transition: all 0.5s ease;
    }
});

exports.spinAnimationStyles = spinAnimationStyles;

// ul.spin-animation{
//     height: 100%;
//     width: 100%;
//     display: block;
//     margin: 0 auto;
// }

// li.spin-animation{
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     display: block;
//     background: transparent;
//     border: 10px solid rgba(23,246,251, 1.0);
//     border-radius: 500px;
//     transition: all 0.5s ease;
// }

// li.spin-animation:first-child{
//     margin-left: -130px;
//     margin-top: -130px;
//     width: 240px;
//     height: 240px;
//     border-color: #e000c9;
//     border-left-color: transparent;
//     border-right-color: transparent;
//     animation: spin 12s infinite linear;
// }

// li.spin-animation:nth-child(2) {
//     margin-left: -120px;
//     margin-top: -120px;
//     width: 220px;
//     height: 220px;
//     border-color: #7500ad;
//     border-top-color: transparent;
//     border-right-color: transparent;
//     animation: spin2 12s infinite linear;
// }

// li.spin-animation:nth-child(3) {
//     margin-left: -110px;
//     margin-top: -110px;
//     width: 200px;
//     height: 200px;
//     border-color: #0049d8;
//     border-left-color: transparent;
//     border-right-color: transparent;
//     animation: spin3 4s infinite linear;
// }

// li.spin-animation:nth-child(4) {
//     margin-left: -80px;
//     margin-top: -80px;
//     width: 140px;
//     height: 140px;
//     border-color: #0089ed;
//     border-left-color: transparent;
//     border-top-color: transparent;
//     animation: spin4 4s infinite linear;
// }

// li.spin-animation:nth-child(5) {
//     margin-left: -70px;
//     margin-top: -70px;
//     width: 120px;
//     height: 120px;
//     border-color: #00f2a9;
//     border-left-color: transparent;
//     border-right-color: transparent;
//     animation: spin5 4s infinite linear;
// }

// li.spin-animation:nth-child(6) {
//     margin-left: -60px;
//     margin-top: -60px;
//     width: 100px;
//     height: 100px;
//     border-color: #009e2c;
//     border-left-color: transparent;
//     border-right-color: transparent;
//     animation: spin6 4s infinite linear;
// }

// li.spin-animation:nth-child(7) {
//     margin-left: -40px;
//     margin-top: -40px;
//     width: 60px;
//     height: 60px;
//     border-color: #d4d800;
//     border-left-color: transparent;
//     border-right-color: transparent;
//     border-top-color: transparent;
//     animation: spin7 2s infinite linear;
// }

// li.spin-animation:nth-child(8) {
//     margin-left: -30px;
//     margin-top: -30px;
//     width: 40px;
//     height: 40px;
//     border-color: #c18b00;
//     border-left-color: transparent;
//     border-right-color: transparent;
//     animation: spin8 2s infinite linear;
// }

// /* Animations */

// @keyframes spin {
//     0%  {transform: rotate(0deg);}
//     10%  {transform: rotate(-25deg);}
//     20%  {transform: rotate(47deg);}
//     30%  {transform: rotate(-125deg);}
//     40%  {transform: rotate(-25deg);}
//     50%  {transform: rotate(25deg);}
//     60%  {transform: rotate(165deg);}
//     70%  {transform: rotate(42deg);}
//     80%  {transform: rotate(180deg);}
//     90%  {transform: rotate(-300deg);}
//     100%{transform: rotate(360deg);}    
// }

// @keyframes spin2 {
//     0%  {transform: rotate(0deg);}
//     100%{transform: rotate(360deg);}    
// }

// @keyframes spin3 {
//     0%  {transform: rotate(0deg);}
//     60%  {transform: rotate(165deg);}
//     70%  {transform: rotate(42deg);}
//     100%{transform: rotate(360deg);}    
// }

// @keyframes spin4 {
//     0%  {transform: rotate(0deg);}
//     100%{transform: rotate(360deg);}    
// }

// @keyframes spin5 {
//     0%  {transform: rotate(0deg);}
//     10%  {transform: rotate(-25deg);}
//     20%  {transform: rotate(47deg);}
//     30%  {transform: rotate(-125deg);}
//     100%{transform: rotate(360deg);}    
// }

// @keyframes spin6 {
//     0%  {transform: rotate(0deg);}
//     80%  {transform: rotate(180deg);}
//     90%  {transform: rotate(-300deg);}
//     100%{transform: rotate(360deg);}    
// }

// @keyframes spin7 {
//     0%  {transform: rotate(0deg);}
//     100%{transform: rotate(-360deg);}   
// }

// @keyframes spin8 {
//     0%  {transform: rotate(0deg);}
//     100%{transform: rotate(360deg);}    
// }