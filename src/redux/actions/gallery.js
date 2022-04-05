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
import C4Seven from "../../image/Man/pixSeven.jpeg"
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
import C4LargeSeven from "../../image/Man/largePixSeven.jpeg"
import C4LargeEight from "../../image/Man/largePixEight.jpeg"
import C4LargeNine from "../../image/Man/largePixNine.jpeg"
import C4LargeTen from "../../image/Man/largePixTen.jpeg"
import C4LargeEleven from "../../image/Man/largePixEleven.jpeg"
import C4LargeTwelve from "../../image/Man/largePixTwelve.jpeg"
import C4LargeThirteen from "../../image/Man/largePixThirteen.jpeg"
import C4LargeFourteen from "../../image/Man/largePixFourteen.jpeg"





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
            {
                id: 7,
                src: C4LargeSeven,
                loading: 'lazy',
            },
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
                    {
                        id: 7,
                        src: C4Seven,
                        loading: 'lazy',
                    },
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
        }
    }
});


export const {
    fetchGallaryStart,
    fetchGallarySuccess,
    fetchGallaryFailure
} = GallarySlice.actions;

export default GallarySlice.reducer;