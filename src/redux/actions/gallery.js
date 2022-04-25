import {createSlice} from '@reduxjs/toolkit';

//A4 PICTURES
import One from "../../image/small/picOne.jpeg"
import Two from "../../image/small/picTwo.jpeg"
import Three from "../../image/small/picThree.jpeg"
import Four from "../../image/small/picFour.jpeg"
import Five from "../../image/small/picSix.jpeg"
import Six from "../../image/small/picSeven.jpeg"
import Seven from "../../image/small/picFive.jpeg"


//C4 PICTURES
import C4One from "../../image/Man/pixOne.jpeg"
import C4Two from "../../image/Man/pixTwo.jpeg"
import C4Three from "../../image/Man/pixThree.jpeg"
import C4Four from "../../image/Man/pixFour.jpeg"
import C4Five from "../../image/Man/pixFive.jpeg"
import C4Six from "../../image/Man/pixSix.jpeg"
import C4Eight from "../../image/Man/pixEight.jpeg"
import C4Nine from "../../image/Man/pixNine.jpeg"
import C4Ten from "../../image/Man/pixTen.jpeg"
import C4Eleven from "../../image/Man/pixEleven.jpeg"
import C4Twelve from "../../image/Man/pixTwelve.jpeg"
import C4Thirteen from "../../image/Man/pixThirteen.jpeg"
import C4Fourteen from "../../image/Man/pixFourteen.jpeg"

import LargeOne from "../../image/largeScreen/picOne.jpeg"
import LargeTwo from "../../image/largeScreen/picTwo.jpeg"
import LargeThree from "../../image/largeScreen/picThree.jpeg"
import LargeFour from "../../image/largeScreen/picFour.jpeg"
import LargeFive from "../../image/largeScreen/picSix.jpeg"
import LargeSix from "../../image/largeScreen/picSeven.jpeg"
import LargeSeven from "../../image/largeScreen/picFive.jpeg"

import C4LargeOne from "../../image/Man/largePixOne.jpeg"
import C4LargeTwo from "../../image/Man/largePixTwo.jpeg"
import C4LargeThree from "../../image/Man/largePixThree.jpeg"
import C4LargeFour from "../../image/Man/largePixFour.jpeg"
import C4LargeFive from "../../image/Man/largePixFive.jpeg"
import C4LargeSix from "../../image/Man/largePixSix.jpeg"
import C4LargeEight from "../../image/Man/largePixEight.jpeg"
import C4LargeNine from "../../image/Man/largePixNine.jpeg"
import C4LargeTen from "../../image/Man/largePixTen.jpeg"
import C4LargeEleven from "../../image/Man/largePixEleven.jpeg"
import C4LargeTwelve from "../../image/Man/largePixTwelve.jpeg"
import C4LargeThirteen from "../../image/Man/largePixThirteen.jpeg"
import C4LargeFourteen from "../../image/Man/largePixFourteen.jpeg"


//Mother Day Picture
import MotherOne from "../../image/event/mothers/motherOne.jpeg"
import MotherTWe from "../../image/event/mothers/motherTwo.jpeg"
import MotherThree from "../../image/event/mothers/motherThree.jpeg"
import MotherFour from "../../image/event/mothers/motherFour.jpeg"
import MotherFive from "../../image/event/mothers/motherFive.jpeg"
import MotherSix from "../../image/event/mothers/motherSix.jpeg"
import MotherSeven from "../../image/event/mothers/motherSeven.jpeg"
import MotherEight from "../../image/event/mothers/motherEight.jpeg"
import MotherNine from "../../image/event/mothers/motherNine.jpeg"
import MotherTen from "../../image/event/mothers/motherTen.jpeg"
import MotherEleven from "../../image/event/mothers/motherEleven.jpeg"
import MotherTwelve from "../../image/event/mothers/motherTwelve.jpeg"
import Mother13 from "../../image/event/mothers/13M.jpeg"
import Mother14 from "../../image/event/mothers/14M.jpeg"
import Mother15 from "../../image/event/mothers/15M.jpeg"
import Mother16 from "../../image/event/mothers/16M.jpeg"
import Mother17 from "../../image/event/mothers/17M.jpeg"
import Mother18 from "../../image/event/mothers/18M.jpeg"
import Mother19 from "../../image/event/mothers/19M.jpeg"
import Mother20 from "../../image/event/mothers/20M.jpeg"
import Mother21 from "../../image/event/mothers/21M.jpeg"
import Mother22 from "../../image/event/mothers/22M.jpeg"
import Mother23 from "../../image/event/mothers/23M.jpeg"
import Mother24 from "../../image/event/mothers/24M.jpeg"
import Mother25 from "../../image/event/mothers/25M.jpeg"
import Mother26 from "../../image/event/mothers/26M.jpeg"
import Mother27 from "../../image/event/mothers/27M.jpeg"
import Mother28 from "../../image/event/mothers/28M.jpeg"
import Mother29 from "../../image/event/mothers/29M.jpeg"
import Mother30 from "../../image/event/mothers/30M.jpeg"
import Mother31 from "../../image/event/mothers/31M.jpeg"
import Mother32 from "../../image/event/mothers/32M.jpeg"
import Mother33 from "../../image/event/mothers/33M.jpeg"
import Mother34 from "../../image/event/mothers/34M.jpeg"
import Mother35 from "../../image/event/mothers/35M.jpeg"
import Mother36 from "../../image/event/mothers/36M.jpeg"





export const  GallarySlice = createSlice({
    name: 'gallary',
    initialState: {
        gallary: [],
        loading: false,
        error: null,
        largeA4Image: [
            {
                id: 1,
                src:  LargeFour,
                loading: 'lazy',
            },
            {
                id: 2,
                src: LargeTwo,
                loading: 'lazy',
            },
            {
                id: 3,
                src: LargeThree,
                loading: 'lazy',
            },
            {
                id: 4,
                src: LargeOne,
                loading: 'lazy',
            },
            {
                id: 5,
                src: LargeFive,
                loading: 'lazy',
            },
            {
                id: 6,
                src: LargeSix,
                loading: 'lazy',
            },
            {
                id: 7,
                src: LargeSeven,
                loading: 'lazy',
            },
        ],
        largeC4Image: [
            {
                id: 1,
                src:  C4LargeOne,
                loading: 'lazy',
            },
            {
                id: 2,
                src: C4LargeTwo,
                loading: 'lazy',
            },
            {
                id: 3,
                src: C4LargeThree,
                loading: 'lazy',
            },
            {
                id: 4,
                src: C4LargeFour,
                loading: 'lazy',
            },
            {
                id: 5,
                src: C4LargeFive,
                loading: 'lazy',
            },
            {
                id: 6,
                src: C4LargeSix,
                loading: 'lazy',
            },
            // {
            //     id: 7,
            //     src: C4LargeSeven,
            //     loading: 'lazy',
            // },
            {
                id: 8,
                src: C4LargeEight,
                loading: 'lazy',
            },
            {
                id: 9,
                src: C4LargeNine,
                loading: 'lazy',
            },
            {
                id: 10,
                src: C4LargeTen,
                loading: 'lazy',
            },
            {
                id: 11,
                src: C4LargeEleven,
                loading: 'lazy',
            },
            {
                id: 12,
                src: C4LargeTwelve,
                loading: 'lazy',
            },
            {
                id: 13,
                src: C4LargeThirteen,
                loading: 'lazy',
            },
            {
                id: 14,
                src: C4LargeFourteen,
                loading: 'lazy',
            }
        ],
        motherDay: [
            {
                id: 1,
                src: MotherOne,
                loading: 'lazy',
            },
            {
                id: 2,
                src: MotherTWe,
                loading: 'lazy',
            },
            {
                id: 3,
                src: MotherThree,
                loading: 'lazy',
            },
            {
                id: 4,
                src: MotherFour,
                loading: 'lazy',
            },
            {
                id: 5,
                src: MotherFive,
                loading: 'lazy',
            },
            {
                id: 6,
                src: MotherSix,
                loading: 'lazy',
            },
            {
                id: 7,
                src: MotherSeven,
                loading: 'lazy',
            },
            {
                id: 8,
                src: MotherEight,
                loading: 'lazy',
            },
            {
                id: 9,
                src: MotherNine,
                loading: 'lazy',
            },
            {
                id: 10,
                src: MotherTen,
                loading: 'lazy',
            },
            {
                id: 11,
                src: MotherEleven,
                loading: 'lazy',
            },
            {
                id: 12,
                src: MotherTwelve,
                loading: 'lazy',
            },
            {
                id: 13,
                src: Mother13,
                loading: 'lazy',
            },
            {
                id: 14,
                src: Mother14,
                loading: 'lazy',
            },
            {
                id: 15,
                src: Mother15,
                loading: 'lazy',
            },
            {
                id: 16,
                src: Mother16,
                loading: 'lazy',
            },
            {
                id: 17,
                src: Mother17,
                loading: 'lazy',
            },
            {
                id: 18,
                src: Mother18,
                loading: 'lazy',
            },
            {
                id: 19,
                src: Mother19,
                loading: 'lazy',
            },
            {
                id: 20,
                src: Mother20,
                loading: 'lazy',
            },
            {
                id: 21,
                src: Mother21,
                loading: 'lazy',
            },
            {
                id: 22,
                src: Mother22,
                loading: 'lazy',
            },
            {
                id: 23,
                src: Mother23,
                loading: 'lazy',
            },
            {
                id: 24,
                src: Mother24,
                loading: 'lazy',
            },
            {
                id: 25,
                src: Mother25,
                loading: 'lazy',
            },
            {
                id: 26,
                src: Mother26,
                loading: 'lazy',
            },
            {
                id: 27,
                src: Mother27,
                loading: 'lazy',
            },
            {
                id: 28,
                src: Mother28,
                loading: 'lazy',
            },
            {
                id: 29,
                src: Mother29,
                loading: 'lazy',
            },
            {
                id: 30,
                src: Mother30,
                loading: 'lazy',
            },
            {
                id: 31,
                src: Mother31,
                loading: 'lazy',
            },
            {
                id: 32,
                src: Mother32,
                loading: 'lazy',
            },
            {
                id: 33,
                src: Mother33,
                loading: 'lazy',
            },
            {
                id: 34,
                src: Mother34,
                loading: 'lazy',
            },
            {
                id: 35,
                src: Mother35,
                loading: 'lazy',
            },
            {
                id: 36,
                src: Mother36,
                loading: 'lazy',
            }
        ]
    },
    reducers: {
        fetchGallaryStart: (state) => {
            state.loading = true;
            state.error = null;
        }
        ,
        fetchGallarySuccess: (state, action) => {
            console.log(action.payload)
            state.loading = false;
            if(action.payload === "A4") {
                state.gallary = [
                    {
                        id: 1,
                        src: One,
                        loading: 'lazy',
                    },
                    {
                        id: 2,
                        src: Two,
                        loading: 'lazy',
                    },
                    {
                        id: 3,
                        src: Three,
                        loading: 'lazy',
                    },
                    {
                        id: 4,
                        src: Four,
                        loading: 'lazy',
                    },
                    {
                        id: 5,
                        src: Five,
                        loading: 'lazy',
                    },
                    {
                        id: 6,
                        src: Six,
                        loading: 'lazy',
                    },
                    {
                        id: 7,
                        src: Seven,
                        loading: 'lazy',
                    },
                ];
            } else if(action.payload === "C4") {
                state.gallary = [
                    {
                        id: 1,
                        src: C4One,
                        loading: 'lazy',
                    },
                    {
                        id: 2,
                        src: C4Two,
                        loading: 'lazy',
                    },
                    {
                        id: 3,
                        src: C4Three,
                        loading: 'lazy',
                    },
                    {
                        id: 4,
                        src: C4Four,
                        loading: 'lazy',
                    },
                    {
                        id: 5,
                        src: C4Five,
                        loading: 'lazy',
                    },
                    {
                        id: 6,
                        src: C4Six,
                        loading: 'lazy',
                    },
                    // {
                    //     id: 7,
                    //     src: C4Seven,
                    //     loading: 'lazy',
                    // },
                    {
                        id: 8,
                        src: C4Eight,
                        loading: 'lazy',
                    },
                    {
                        id: 9,
                        src: C4Nine,
                        loading: 'lazy',
                    },
                    {
                        id: 10,
                        src: C4Ten,
                        loading: 'lazy',
                    },
                    {
                        id: 11,
                        src: C4Eleven,
                        loading: 'lazy',
                    },
                    {
                        id: 12,
                        src: C4Twelve,
                        loading: 'lazy',
                    },
                    {
                        id: 13,
                        src: C4Thirteen,
                        loading: 'lazy',
                    },
                    {
                        id: 14,
                        src: C4Fourteen,
                        loading: 'lazy',
                    },
                ]
            } else {
                state.gallary = []
            }
            
        }
        ,
        fetchGallaryFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});


export const {
    fetchGallaryStart,
    fetchGallarySuccess,
    fetchGallaryFailure
} = GallarySlice.actions;

export default GallarySlice.reducer;